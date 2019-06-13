<template>
  <div>
    <bread-crumb></bread-crumb>
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
          <el-table :show-header="false" :data="unread">
            <el-table-column>
              <template slot-scope="scope">
                <span class="msg">{{scope.row.msg}}</span>
              </template>
            </el-table-column>
            <el-table-column align="left" width="150">
              <template slot-scope="scope">
                <span class="msg-date">{{scope.row.date}}</span>
              </template>
            </el-table-column>
            <el-table-column width="150" align="left">
                <template slot-scope="scope">
              <el-button type="primary" @click="signRead(scope.$index)" plain>标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(${read.length})`" name="second">
          <el-table :show-header="false" :data="read">
            <el-table-column>
              <template slot-scope="scope">
                <span class="msg">{{scope.row.msg}}</span>
              </template>
            </el-table-column>
            <el-table-column align="left" width="150">
              <template slot-scope="scope">
                <span class="msg-date">{{scope.row.date}}</span>
              </template>
            </el-table-column>
            <el-table-column width="150" align="left">
                <template slot-scope="scope">
              <el-button type="danger" @click="delMsg(scope.$index)" plain>删除</el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
          <el-table :show-header="false" :data="recycle">
            <el-table-column>
              <template slot-scope="scope">
                <span class="msg">{{scope.row.msg}}</span>
              </template>
            </el-table-column>
            <el-table-column align="left" width="150">
              <template slot-scope="scope">
                <span class="msg-date">{{scope.row.date}}</span>
              </template>
            </el-table-column>
            <el-table-column width="150" align="left">
                <template slot-scope="scope">
              <el-button type="info" @click="restore(scope.$index)" plain>还原</el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import breadCrumb from "./breadcrumb";
export default {
  components: {
    breadCrumb
  },
  data() {
    return {
      activeName: "first",
      unread: [
        {
          date: "2019-6-13",
          msg: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          date: "2019-7-20",
          msg: "今晚12点整发大红包，先到先得"
        },
        {
          date: "2019-5-25",
          msg: "【系统通知】服务器将于凌晨12点停用"
        },
        {
          date: "2019-5-23",
          msg: "今晚9点整发大红包，先到先得"
        }
      ],
      read: [
        {
          date: "2019-6-14",
          msg: "【系统通知】该系统将于今晚凌晨2点到6点进行更新"
        },
        {
          date: "2019-7-20",
          msg: "服务器异常"
        }
      ],
      recycle: [
        {
          date: "2018-6-14",
          msg: "【系统通知】该系统将于今晚凌晨12点到6点进行更新"
        },
        {
          date: "2018-7-20",
          msg: "服务器已恢复，可以正常访问了!"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
    //   console.log(tab, event);
    },
    //标记已读
    signRead(msg) {
        const newRead = this.unread.splice(msg,1);
        this.read = newRead.concat(this.read);
    },
    //删除已读
    delMsg(msg){
        const delRead = this.read.splice(msg,1);
        this.recycle = delRead.concat(this.recycle);
    },
    //还原
    restore(msg){
        const resMsg = this.recycle.splice(msg,1);
        this.read = resMsg.concat(this.read);
    }
  },
  computed: {
    
  }
};
</script>
<style>
.msg {
  color: #20a0ff;
}
</style>


