<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card mb20" shadow="hover">
          <div class="user-info">
            <div class="user-avator">
              <img src="../../assets/images/avator.jpg" alt>
              <div class="user-name">
                <span>admin</span>
                <span>超级管理员</span>
              </div>
            </div>
            <div class="pre-time">
              上次登录时间：
              <span>2019-5-31</span>
            </div>
            <div class="pre-place">
              上次登录地点：
              <span>北京</span>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>Vue
          <el-progress :percentage="70" color="#5cb87a"></el-progress>JavaScript
          <el-progress :percentage="30" color="#1989fa"></el-progress>CSS
          <el-progress :percentage="40" color="#6f7ad3"></el-progress>HTML
          <el-progress :percentage="60" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <div class="card-count count-1">
                <i class="el-icon-umpyiliaohangyedeICON- count-icon"></i>
                <div class="count-text">
                  <div class="num">999+</div>
                  <div class="tit">用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <div class="card-count count-2">
                <i class="el-icon-umpxiaoxi count-icon"></i>
                <div class="count-text">
                  <div class="num">33</div>
                  <div class="tit">系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <div class="card-count count-3">
                <i class="el-icon-ump56 count-icon"></i>
                <div class="count-text">
                  <div class="num">1428</div>
                  <div class="tit">数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card class="box-card todos" shadow="hover">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="todos"
            tooltip-effect="dark"
            style="width: 100%"
            :show-header="false"
            @selection-change="handleSelectionChange"
            font-size="14px"
            height="282px"
          >
            <el-table-column width="55">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <!-- 有的时候你希望提供的组件带有一个可从子组件获取数据的可复用的插槽。 -->
              <template slot-scope="scope">
                <div class="todo-item" :class="{'todo-item-done':scope.row.checked}">{{ scope.row.title }}</div>
              </template>
            </el-table-column>
            <el-table-column width="150">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: [
        {
          title: "今天天气挺好",
          checked: true
        },
        {
          title: "今天要改100个bug",
          checked: false
        },
        {
          title: "今天是2019年6月3日",
          checked: true
        },
        {
          title: "今天是周一",
          checked: false
        },
        {
          title: "今天要写100个bug",
          checked: true
        },
        {
          title: "今天处理了一个bug",
          checked: false
        },
        {
          title: "hello，你好啊!",
          checked: false
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    handleEdit(index, row) {
      console.log(index, row);
      console.log(this.$prompt);
       this.$prompt('请输入待办事项', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '邮箱格式不正确',
        closeOnPressEscape: true
      }).then((val)=>{
        // this.todos = this.todos[index].title = val;
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style>
.box-card .user-avator {
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.box-card .user-avator .user-name {
  padding-top: 40px;
  margin-left: 40px;
}
.box-card .user-avator .user-name span:first-child {
  font-size: 28px;
}
.box-card .user-avator .user-name span:last-child {
  font-size: 14px;
  color: #aaa;
}
.box-card .user-avator .user-name span {
  display: block;
}
.box-card .user-avator img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.box-card .pre-time,
.pre-place {
  font-size: 14px;
  color: #999;
  line-height: 20px;
}
.box-card .pre-time span,
.pre-place span {
  margin-left: 70px;
}
.box-card.mb20 {
  margin-bottom: 20px;
}
.card-count {
  display: flex;
  align-items: center;
}
.card-count .count-icon {
  display: block;
  width: 100px;
  height: 100px;
  font-size: 60px;
  line-height: 100px;
  color: #fff;
  text-align: center;
}
.count-1 i {
  background: #2d8cf0;
}
.count-1 .num {
  color: #2d8cf0;
}
.count-2 i {
  background: #64d572;
}
.count-2 .num {
  color: #64d572;
}
.count-3 i {
  background: #f25e43;
}
.count-3 .num {
  color: #f25e43;
}
.card-count .count-text {
  flex: 1;
  text-align: center;
}
.card-count .num {
  font-size: 28px;
  font-weight: bold;
}
.card-count .tit {
  font-size: 14px;
  color: #999;
}
.todos {
  margin-top: 20px;
}
.todo-item {
  font-size: 14px;
}
.todo-item-done {
  text-decoration: line-through;
  color: #999;
}
</style>


