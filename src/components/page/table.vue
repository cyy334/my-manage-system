<template>
  <div class="table">
    <el-breadcrumb separator="/" class="crumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <div class="hanle-box mb20">
        <el-button size="mini" type="primary" @click="delAll">批量删除</el-button>
        <el-select v-model="selectWords" placeholder="选择省份" size="mini">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
          <el-option key="3" label="河南省" value="河南省"></el-option>
          <el-option key="4" label="浙江省" value="浙江省"></el-option>
          <el-option key="5" label="河北省" value="河北省"></el-option>
          <el-option key="6" label="黑龙江省" value="黑龙江省"></el-option>
          <el-option key="7" label="贵州省" value="贵州省"></el-option>
          <el-option key="8" label="吉林省" value="吉林省"></el-option>
          <el-option key="9" label="云南省" value="云南省"></el-option>
          <el-option key="10" label="四川省" value="四川省"></el-option>
        </el-select>
        <el-input size="mini" class="search-input" v-model="keywords"  placeholder="请输入内容"></el-input>
        <el-button size="mini" type="primary">搜索</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="data"
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
        border
        class="mb20"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" width="55"></el-table-column>
        <el-table-column sortable label="日期" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" align="center" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="150" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEditor(scope)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDel(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        align="right"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="提示" :visible.sync="editDialogVisible" width="30%">
      <el-form :model="form" label-position="left" label-width="50px">
        <el-form-item label="日期">
          <el-date-picker value-format="yyyy-MM-dd" v-model="form.date" type="date" style="width: 100%" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEditData">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑弹出框 -->

    <!-- 删除弹出框 -->
      <el-dialog title="提示" center :visible.sync="delDialogVisible" width="20%">
        <div class="del-dialog">确认删除吗？</div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="delDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteRow">确 定</el-button>
        </span>
      </el-dialog>
    <!-- 删除弹出框 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: "",
      selectWords: "",
      multipleSelection: [],
      currentPage: 1,
      editDialogVisible: false,
      delDialogVisible: false,
      nowId: 0,
      loading: false,
      delList: [],
      form: {
        time: "",
        name: "",
        address: ""
      },
      tableList: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  /*
   * computed用来监控自己定义的变量，该变量不在data里面声明，
   * 直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
   */
  computed: {
    data() {
      return this.tableList.filter( item =>{
        let is_del = false;
        for (let i = 0; i < this.delList.length; i++) {
            if (item.name === this.delList[i].name) {
                is_del = true;
                break;
            }
        }
        if(!is_del){
          if(
          item.address.indexOf(this.selectWords) > -1  &&
          (item.name.indexOf(this.keywords) > -1 || item.address.indexOf(this.keywords) > -1)
          ){
          return item;
        }
        }
      });
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    },
    formatter(row, column, cellValue) {
      let nweData = row.address.replace(/\s{1}/g, "-");
      return nweData;
    },
    //批量删除
    delAll() {
      const length = this.multipleSelection.length;
      this.delList = this.delList.concat(this.multipleSelection);
      let str = '';
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + ' ';
      }
      this.$message.error('删除了' + str);
      this.multipleSelection = [];
      
    },
    //删除
    handleDel(msg) {
      this.nowId = msg.$index;
      this.delDialogVisible = true;
    },
    //删除一条数据
    deleteRow() {
      this.tableList.splice(this.nowId,1);
      this.delDialogVisible = false;
      this.$message.success('删除成功');
    },
    //编辑
    handleEditor(msg) {
      this.form = {
        date: msg.row.date,
        name: msg.row.name,
        address: msg.row.address
      }
      this.nowId = msg.$index;
      this.editDialogVisible = true;
    },
    //保存编辑
    saveEditData() {
      this.$set(this.tableList, this.nowId, this.form);
      this.editDialogVisible = false;
      this.$message.success('修改成功');
    },
    //请求数据
    getData() {
      this.loading = true;
      this.$axios
        .post("/ms/table/list", {
          page: this.currentPage
        })
        .then(res => {
          this.tableList = res.data.list;
          this.loading = false;
        });
    }
  }
};
</script>
<style>
.crumb {
  line-height: 40px;
}
.table .container {
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.table .search-input {
  display: inline-block;
  width: 300px;
}
.table .del-dialog {
  font-size: 20px;
  text-align: center;
}
</style>


