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
          </div>
          Vue
          <el-progress :percentage="70" color="#5cb87a"></el-progress>
          JavaScript
          <el-progress :percentage="30" color="#1989fa"></el-progress>
          CSS
          <el-progress :percentage="40" color="#6f7ad3"></el-progress>
          HTML
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
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
.count-1 i{
  background: #2D8CF0;
}
.count-1 .num{
  color: #2D8CF0;
}
.count-2 i{
  background: #64D572;
}
.count-2 .num{
  color: #64D572;
}
.count-3 i{
  background: #F25E43;
}
.count-3 .num{
  color: #F25E43;
}
.card-count .count-text {
  flex: 1;
  text-align: center;
}
.card-count .num{
  font-size: 28px;
  font-weight: bold;
}
.card-count .tit {
  font-size: 14px;
  color: #999;
}
</style>


