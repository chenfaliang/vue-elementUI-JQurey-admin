<template>
  <div>
    <el-container>

      <!-- 左侧菜单栏 -->
      <el-aside style="overflow-x: hidden;" width="200px">
        <div class="logo">
          <span>{{ minMenuList.meta.title }}</span>
        </div>

        <!-- 左侧菜单栏 -->
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
          unique-opened
        >
          <template v-for="(item, index) in minMenuList.children">
            <el-submenu
              v-if="item.children.length > 0"
              :key="index"
              :index="index + ''"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{ item.meta.title }}</span>
              </template>
              <el-menu-item-group v-for="(jdx, j) in item.children" :key="j">
                <el-menu-item
                  :index="minMenuList.path + '/' + item.path + '/' + jdx.path"
                  >{{ jdx.meta.title }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </template>

        </el-menu>

      </el-aside>

      <!-- 右侧内容 -->
      <el-container>
        <el-header class="header">
          <div>时间：{{ time }}</div>
          <div>
            陈发良
            <span class="pointer" @click="lgout">[退出]</span>
          </div>
        </el-header>
        <div class="el-tab">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <template v-for="(list, ldx) in menuList">
              <el-tab-pane
                :key="ldx"
                :label="list.meta.title"
                :name="ldx + ''"
                v-if="list.meta.isShow"
              ></el-tab-pane>
            </template>
          </el-tabs>
        </div>
        <el-main><router-view /></el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
import routerStore from "../store/index.js";
console.log("[routerStore]", routerStore);
export default {
  data() {
    return {
      time: "",
      timeId: "",
      activeName: "0",
      stepMap: ""
    };
  },
  mounted() {
    this.handleTime();
  },
  computed: {
    //菜单栏
    menuList: function() {
      console.log("[路由列表]", routerStore.state.routes);
      return routerStore.state.routes;
    },

    // 左侧子菜单栏
    minMenuList: function() {
      return routerStore.state.minMenuList;
    }
  },
  methods: {
    // 控制系统按钮的显示和隐藏
    handleList(list) {
      console.log("[list]", list);
      list.children.forEach((item, index) => {
        console.log("[item]", item);
        if (item.children.length > 0) {
          return true;
        } else {
          return false;
        }
      });
    },

    // 系统切换
    handleClick(tab, event) {
      var min = this.menuList[tab.index];
      console.log("[min]", min);
      this.$store.dispatch("setMinMenuList", min);
      console.log("[max]", this.$store);
    },

    // 退出
    lgout() {
      var session = new SStorage("session");
      session.remove("role");
      this.$router.push({ path: "/login" });
    },

    // 时间
    handleTime() {
      this.time = Fn.getTime();
      if (this.timeId) {
        clearTimeout(this.timeId);
      }
      this.timeId = setTimeout(() => {
        this.handleTime();
      }, 1000);
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-tab >>> .el-tabs__nav-scroll {
  overflow: hidden;
  padding-left: 15px;
  background-color: #eee;
  border-top: 1px solid #999;
}

.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(84, 92, 100);
}
.el-main {
  height: calc(100vh - 116px);
  overflow-x: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
}
.header {
  height: 40px !important;
  line-height: 40px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
}
</style>
