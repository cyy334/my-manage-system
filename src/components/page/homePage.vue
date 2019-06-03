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
      <el-col :span="16">
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
        <el-card class="box-card todos">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column width="55">
              <el-checkbox v-model="checked"></el-checkbox>
            </el-table-column>
            <el-table-column>
              <!-- 有的时候你希望提供的组件带有一个可从子组件获取数据的可复用的插槽。 -->
               <template slot-scope="scope">
                 <div class="todo-item">{{ scope.row.date }}</div>
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
      tableData3: [
        {
          title: "今天天气挺好",
          checked: false
        },
        {
          title: "今天要改100个bug",
          checked: false
        },
        {
          title: "2016-05-04",
          checked: false
        },
        {
          title: "2016-05-01",
          checked: false
        },
        {
          title: "2016-05-08",
          checked: false
        },
        {
          title: "2016-05-06",
          checked: false
        },
        {
          title: "2016-05-07",
          checked: false
        }
      ],
      multipleSelection: [],
      checked: false
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
        console.log(this.multipleSelection)
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
</style>


