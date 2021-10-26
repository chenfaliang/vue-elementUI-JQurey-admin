/**
 * 这里大概简述一下vuex.Store参数中的几个属性：

state: 存储变量的地方，我们平时定义的变量都放到这里面， 外部可以通过 this.$store.state.* 去获取存储的变量值
getters: 获取变量的时候添加的过滤器，用getter里面定义的函数去获取state数据时，可以对state里的数据提前进行加工处理
mutations: 定义一个函数去修改state里面的值，直接修改state里的值vue会监听不到数据变化，所以通过mutations里定义函数来操作state里的数据。只能同步处理。
actions：定义函数去调用mutations的，这样又加了一层的目的是为了让mutations能处理异步的请求，如果项目中对state都是同步处理，就不用加这一层
 */

import Vue from "vue";
import Vuex from "vuex";
//引入cart的vuex模块
// import cart from "@/store/modules/cart.js"
Vue.use(Vuex);
export default new Vuex.Store({
  //当做data
  state: {
    routes: [], //全部路由
    minMenuList:[],// 子菜单（只有在三级菜单条件下，才需要此值）
  },
  //相当于计算属性
  getters: {},
  //同步一些方法
  mutations: {
    SET_ROUTES(state, routes) {
      state.routes = routes;
    },
    SET_MINMENULIST(state, minMenuList) {
      state.minMenuList = minMenuList;
    },
  },
  //存放异步的方法
  actions: {
    setRoutes({ commit }, routes) {
      commit("SET_ROUTES", routes);
    },
    setMinMenuList({ commit }, minMenuList) {
      commit("SET_MINMENULIST", minMenuList);
    },
  }
});
