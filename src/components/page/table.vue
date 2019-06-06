<template>
  <div class="table">
    <el-breadcrumb separator="/" class="crumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <div class="hanle-box mb20">
        <el-button size="mini" type="primary">批量删除</el-button>
        <el-select v-model="selectWords" placeholder="选择省份" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
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
        <el-table-column prop="address" label="地址"  show-overflow-tooltip></el-table-column>
        <el-table-column  label="操作" width="150" align="center"  show-overflow-tooltip>
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        align="right"
        >
    </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: "",
      selectWords: "",
      tableList: [
          {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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
</style>


