<!--这是首页的头部-->
<template>
  <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:24}" :lg="{span:24}" :xl="{span:24}">
    <el-header>
      <!--logo的div-->
      <el-col :xs="{span:15}" :sm="{span:15}" :md="{span:4}" :lg="{span:3,offset:1}" :xl="{span:3,offset:1}">
      <a class="logo">
        <!--logo图片处-->
        <img src="../../static/img/logo.png" class="logo-img" alt="">
      <span class="logoziti">昊良梦创</span>
      </a>

      </el-col>
      <el-col :xs="{span:9}" :sm="{span:9}" :md="{span:20}">
        <a class="hanbaotubiao">
          <!--logo图片处-->
          <el-button type="info" icon="el-icon-menu" size="small" @click.native="openHanBao"></el-button>
        </a>
      </el-col>
      <!--导航div-->
      <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:20}" :lg="{span:20}" :xl="{span:20}">
      <ul class="daohang">
        <li><a href="">首页</a></li>
        <li><a href="">市场化孵化服务</a></li>
        <li><a href="">政府公共服务</a></li>
        <li><a href="">社会化服务</a></li>
        <li><a href="">电商专题</a></li>
        <li><a href="">孵化展示</a></li>
        <li><a href="">非公党建</a></li>
        <li><a href="">新闻公告</a></li>
          <a href="">注册</a>
          /
          <a href="">登录</a>
        </div>
      </ul>
    </el-col>
      <!--汉堡导航-->
      <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:24}" :lg="{span:24}" :xl="{span:24}">
        <ul class="hanbao" v-show="hanbao">
          <li><a href="">首页</a></li>
          <li><a href="">市场化孵化服务</a></li>
          <li><a href="">政府公共服务</a></li>
          <li><a href="">社会化服务</a></li>
          <li><a href="">电商专题</a></li>
          <li><a href="">孵化展示</a></li>
          <li><a href="">非公党建</a></li>
          <li><a href="">新闻公告</a></li>
          <div class="login">
            <a href="">注册</a>
            /
            <a href="">登录</a>
          </div>
        </ul>
      </el-col>



    </el-header>
  </el-col>
</template>

<script>
  // 引入头部样式文件
  import "../../static/css/head.css"
    export default {
        name: "headr",
      data(){
          return {
            hanbao:false
          }
      },
      methods:{
        openHanBao(){
         this.hanbao=!this.hanbao;
        }
      }
    }
</script>

<style scoped>
.el-header{
  background-color: #000;
  color: #333;
  border-bottom: 2px solid rgba(114,114,114,0.5);
  text-align: center;
  line-height:56px;
  height: 56px !important;
  background-color: transparent;
  border-radius: 0px;
  margin-left: 0;
}
</style>
