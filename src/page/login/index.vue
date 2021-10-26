<template>
  <div class="page">
    <canvas class="cavs" width="1575" height="1337"></canvas>

    <div class="loginmain">
      <div class="login-title">
        <span>登录-陈发良前端工具箱</span>
      </div>

      <div class="login-con">
        <div class="login-user">
          <div class="icon">
            <img src="../../assets/image/user_icon_copy.png" alt="" />
          </div>
          <input
            type="text"
            name="usernem"
            placeholder="用户名"
            autocomplete="off"
            v-model="user.name"
          />
        </div>
        <div class="login-pwd">
          <div class="icon">
            <img src="../../assets/image/lock_icon_copy.png" alt="" />
          </div>
          <input
            type="password"
            name="pwd"
            placeholder="密码"
            autocomplete="off"
            v-model="user.pwd"
          />
        </div>
        <!-- <div class="login-yan">
          <div class="icon">
            <img src="static/picture/key.png" alt="" />
          </div>
          <input
            type="text"
            name="pwd"
            placeholder="验证码"
            autocomplete="off"
            value=""
          />
        </div> -->
        <div class="login-btn">
          <input type="button" value="登录" @click="login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setAsyncRouter } from "../../router/asyncRouter.js";

export default {
  data() {
    return {
      user: {
        name: "admin",
        pwd: "123456"
      }
    };
  },
  methods: {
    // loin
    login() {
      var role = ["admin"];
      if (this.user.name == "admin") {
        role = ["admin"];
         this.$message({
          message: '您登录的是管理员账号，将看到所有路由',
          type: 'success'
        });
      } else {
        role = ["kefu"];
         this.$message({
         message: '您登录的是非管理员账号，只能看到部分路由',
          type: 'warning'
        });
      }

      var session = new SStorage("session");
      session.set("role", role);
      setAsyncRouter(role);
      this.$router.push({ path: "/s1/animation" });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cavs {
  z-index: 1;
  position: fixed;
  width: 95%;
  margin-left: 20px;
  margin-right: 20px;
}

.page {
  width: 100%;
  height: 100vh;
  background: url("../../assets/image/bg1.jpg") no-repeat;
  background-size: 100% 100%;
}

.loginmain {
  background: rgba(0, 0, 0, 0.5);
  width: 540px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 100px 40px 40px 40px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  z-index: 99999;
}
.login-title {
  color: #d3d7f7;
  height: 60px;
  font-size: 20px;
  text-align: center;
  margin-top: -20px;
}
.login-con {
  height: 208px;
  position: absolute;
  left: 0;
  width: 80%;
  margin: 0 10%;
}
.login-user {
  position: relative;
}
.icon {
  position: absolute;
  z-index: 1;
  left: 36px;
  top: 8px;
  opacity: 1;
}
.login-con input {
  width: calc(100% - 130px);
  margin-top: -2px;
  background: rgba(57, 61, 82, 0);
  left: 0;
  padding: 10px 65px;
  border-top: 2px solid rgba(57, 61, 82, 0);
  border-bottom: 2px solid rgba(57, 61, 82, 0);
  border-right: none;
  border-left: none;
  outline: none;
  font-family: "Gudea", sans-serif;
  box-shadow: none;
  color: #61bfff !important;
}
.login-pwd,
.login-yan {
  position: relative;
}
/*
.login-pwd .icon{
    position: absolute;
    z-index: 1;
    left: 36px;
    top: 8px;
    opacity: .5;
}*/
.login-btn {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.login-btn input {
  border-radius: 3px;
  background: transparent;
  border: 2px solid #4fa1d9;
  color: #4fa1d9;
  text-transform: uppercase;
  font-size: 11px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;

  margin: auto;
  width: 80%;
  transition-property: background, color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
.login-btn input:hover {
  color: white !important;
  background: #4fa1d9;
  cursor: pointer;
  -webkit-transition-property: background, color;
  transition-property: background, color;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
</style>
