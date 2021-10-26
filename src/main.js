// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import routerObj from "./router";
var router = routerObj.router;

Vue.config.productionTip = false;

// 引入swiper
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min";

// 引入 elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入初始化样式
import "./assets/css/reset.css";

// 引入公共样式
import "./assets/css/global.css";

// 引入rem
import "./utils/devicerem.js";

//引入公共功能fn.js文件
import Fn from "./utils/fn.js";
window.Fn = Fn;

// 引入动画
import "./assets/css/animate.min.css";
import { WOW } from "./utils/wow.js";

var wow = new WOW({
  boxClass: "wow", //需要执行动画的元素的 class
  animateClass: "animated", //animation.css 动画的 class
  offset: 0, //距离可视区域多少开始执行动画
  mobile: true, //是否在移动设备上执行动画
  live: true //异步加载的内容是否有效
});

wow.init();

// 引入jq
require("./utils/jquery.min.js");

// 引入网站背景水印
require("./utils/watermark.js");
watermark.init({
  watermark_id: "wm_div_id", //水印总体的id
  watermark_prefix: "mask_div_id", //小水印的id前缀
  watermark_txt: "陈发良的前端工具箱", //水印的内容
  watermark_x: 20, //水印起始位置x轴坐标
  watermark_y: 20, //水印起始位置Y轴坐标
  watermark_rows: 0, //水印行数
  watermark_cols: 0, //水印列数
  watermark_x_space: 100, //水印x轴间隔
  watermark_y_space: 50, //水印y轴间隔
  watermark_font: "微软雅黑", //水印字体
  watermark_color: "black", //水印字体颜色
  watermark_fontsize: "18px", //水印字体大小
  watermark_alpha: 0.15, //水印透明度，要求设置在大于等于0.005
  watermark_width: 100, //水印宽度
  watermark_height: 100, //水印长度
  watermark_angle: 15, //水印倾斜度数
  watermark_parent_width: 0, //水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值）
  watermark_parent_height: 0, //水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值）
  watermark_parent_node: null //水印插件挂载的父元素element,不输入则默认挂在body上
});

// 引入图片查看器
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true, //是否启用inline模式
    button: true, // 是否显示有上角关闭按钮
    navbar: true, //  是否显示缩略图导航
    title: true, // 是否显示图片标题
    toolbar: true, // 图片工具栏
    tooltip: true, // 缩放百分比
    movable: true, // 是否可移动
    zoomable: true, // 是否可缩放
    rotatable: true, // 是否可旋转
    scalable: true, // 是否可翻转
    transition: true, // 是否css3过度效果
    fullscreen: true, // 是否可全屏
    keyboard: true, // 是否支持键盘
    url: "data-source" // 设置大图片的url
  }
});

// 引入图片懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
// 配置项
Vue.use(VueLazyload, {
  preLoad: 1.3, //表示lazyload的元素,距离页面底部距离的百分比.计算值为(preload - 1)
  error:
    "https://yxfile.gowan8.com/upload/image/202106/icon_202106031202287010.png", //加载失败后图片地址
  loading:
    "https://yxfile.gowan8.com/upload/image/202106/icon_202106031202287010.png", //加载时图片地址
  attempt: 1 //图片加载失败后的重试次数
});

// 引入vuex
import store from "./store/index.js";

// 引入缓存存储--全局可以使用
require("./utils/SStroage.js");

// 每次页面刷新获取权限
import { setAsyncRouter } from "./router/asyncRouter.js";
var session = new SStorage("session");
var role = session.get("role");
if (role) {
  setAsyncRouter(role); // 设置异步路由
}


// 路由守卫
router.beforeEach((to, from, next) => {
  console.log("[to]", to);
  if (to.matched.length === 0) {
    next('/404');
    return;
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
