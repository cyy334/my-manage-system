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
        </el-select>
        <el-input size="mini" class="search-input" v-model="keywords" placeholder="请输入内容"></el-input>
        <el-button size="mini" type="primary">搜索</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableList"
        tooltip-effect="dark"
        style="width: 100%"
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
      </el-dialog>>
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
      delList: [],
      form: {
        time: "",
        name: "",
        address: ""
      },
      tableList: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
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
    delAll() {
      const length = this.multipleSelection.length;
      this.delList = this.delList.concat(this.multipleSelection);
      let str = '';
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + ' ';
      }
      this.$message.error('删除了' + str);
      this.multipleSelection = [];
      console.log(this.delList)
    },
    handleDel(msg) {
      this.nowId = msg.$index;
      this.delDialogVisible = true;
    },
    deleteRow() {
      this.tableList.splice(this.nowId,1);
      this.delDialogVisible = false;
      this.$message.success('删除成功');
    },
    handleEditor(msg) {
      this.form = {
        date: msg.row.date,
        name: msg.row.name,
        address: msg.row.address
      }
      this.nowId = msg.$index;
      this.editDialogVisible = true;
    },
    saveEditData() {
      this.$set(this.tableList, this.nowId, this.form);
      console.log(this.tableList[this.nowId]);
      console.log(this.form);
      this.editDialogVisible = false;
      this.$message.success('修改成功');
    },
    getData() {
      this.$axios
        .post("/ms/table/list", {
          page: this.currentPage
        })
        .then(res => {
          this.tableList = res.data.list;
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


