import Vue from "vue";
import Router from "vue-router";
import menu from "@/components/menu";
import simpleAni from "@/page/simpleAni";
import ordinaryAni from "@/page/ordinaryAni";
import seeImg360 from "@/page/360SeeImg";
import html2canvas from "@/page/html2canvas";
import img2pdf from "@/page/img2pdf";
import seeImg from "@/page/seeImg";
import dad from "@/page/dad";
import fangdajing from "@/page/fangdajing";
import print from "@/page/print";
import clipboard from "@/page/clipboard";
import layer from "@/page/layer";
import jqCookie from "@/page/jqCookie";
import lazyload from "@/page/lazyload";
import login from "@/page/login";
import page404 from "@/page/404";
import menuSetting from '@/page/menuSetting'
import roleSetting from '@/page/roleSetting'
import accountSeeting from '@/page/accountSetting'

Vue.use(Router);

// 解决报错
const originalPush = Router.prototype.push;
const originalReplace = Router.prototype.replace;
// push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
// replace
Router.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};

// 静态路由（不需要权限的路由）
let defaultRouter = [
  {
    path: "/",
    name: "home",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/404",
    name: "404",
    component: page404
  }
];

// 需要权限的路由 --三级路由
let asyncRoutes = [
  
  {
    path: "/s1",
    name: "s1",
    meta: {
      title: "工具箱"
    },
    component: menu,
    children: [
      {
        path: "animation",
        name: "animation",
        meta: {
          title: "动画"
        },
        component: {render(c) {return c('router-view')}},   // 解决Vue中三级菜单页面跳转路由改变页面不变，如果是二级路由，则不需要这个
        children: [
          {
            path: "simpleAni",
            name: "simpleAni",
            component: simpleAni,
            meta: {
              title: "基础动画",
              roles: ["/simpleAni", "admin",'kefu'] // 用户权限
            }
          },
          {
            path: "ordinaryAni",
            name: "ordinaryAni",
            component: ordinaryAni,
            meta: {
              title: "高级动画",
              roles: ["/ordinaryAni", "admin"] // 用户权限
            }
          }
        ]
      },
      {
        path: "function",
        name: "function",
        meta: {
          title: "功能"
        },
        component: {render(c) {return c('router-view')}},   // 解决Vue中三级菜单页面跳转路由改变页面不变，如果是二级路由，则不需要这个
        children: [
          {
            path: "print",
            name: "print",
            component: print,
            meta: {
              title: "打印",
              roles: ["/print", "admin"] // 用户权限
            }
          },
          {
            path: "clipboard",
            name: "clipboard",
            component: clipboard,
            meta: {
              title: "复制",
              roles: ["/clipboard", "admin"] // 用户权限
            }
          },
          {
            path: "layer",
            name: "layer",
            component: layer,
            meta: {
              title: "layer",
              roles: ["/layer", "admin"] // 用户权限
            }
          },
          {
            path: "seeImg360",
            name: "seeImg360",
            component: seeImg360,
            meta: {
              title: "360查看图片",
              roles: ["/seeImg360", "admin"] // 用户权限
            }
          },
          {
            path: "html2canvas",
            name: "html2canvas",
            component: html2canvas,
            meta: {
              title: "dom生成图片",
              roles: ["/html2canvas", "admin"] // 用户权限
            }
          },
          {
            path: "img2pdf",
            name: "img2pdf",
            component: img2pdf,
            meta: {
              title: "生成PDF",
              roles: ["/img2pdf", "admin"] // 用户权限
            }
          },
          {
            path: "seeImg",
            name: "seeImg",
            component: seeImg,
            meta: {
              title: "查看图片",
              roles: ["/seeImg", "admin"] // 用户权限
            }
          },
          {
            path: "dad",
            name: "dad",
            component: dad,
            meta: {
              title: "Permission",
              roles: ["/dad", "admin"] // 用户权限
            }
          },
          {
            path: "fangdajing",
            name: "fangdajing",
            component: fangdajing,
            meta: {
              title: "拖拽dom",
              roles: ["/fangdajing", "admin"] // 用户权限
            }
          },

          {
            path: "jqCookie",
            name: "jqCookie",
            component: jqCookie,
            meta: {
              title: "jqCookie操作",
              roles: ["/jqCookie", "admin"] // 用户权限
            }
          },
          {
            path: "lazyload",
            name: "lazyload",
            component: lazyload,
            meta: {
              title: "vue懒加载",
              roles: ["/lazyload", "admin"] // 用户权限
            }
          }
        ]
      }
    ]
  },
  {
    path: "/s2",
    name: "s2",
    meta: {
      title: "权限系统"
    },
    component: menu,
    children: [
      {
        path: "setting",
        name: "setting",
        meta: {
          title: "权限管理"
        },
        component: {render(c) {return c('router-view')}},   // 解决Vue中三级菜单页面跳转路由改变页面不变，如果是二级路由，则不需要这个
        children: [
          {
            path: "menuSetting",
            name: "menuSetting",
            component: menuSetting,
            meta: {
              title: "菜单设置",
              roles: ["/menuSetting", "admin",] // 用户权限
            }
          },
          {
            path: "roleSetting",
            name: "roleSetting",
            component: roleSetting,
            meta: {
              title: "角色设置",
              roles: ["/roleSetting", "admin"] // 用户权限
            }
          },
          {
            path: "accountSeeting",
            name: "accountSeeting",
            component: accountSeeting,
            meta: {
              title: "账号设置",
              roles: ["/accountSeeting", "admin"] // 用户权限
            }
          }
        ]
      },
    
    ]
  }
];

// 需要权限的路由 --二级路由
// let asyncRoutes=[
//   {
//     path: "/animation",
//     name: "funcanimationtion",
//     component: menu,
//     meta: {
//       title: "动画"
//     },
//     children: [
//       {
//         path: "simpleAni",
//         name: "simpleAni",
//         component: simpleAni,
//         meta: {
//           title: "基础动画",
//           roles: ["/simpleAni",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "ordinaryAni",
//         name: "ordinaryAni",
//         component: ordinaryAni,
//         meta: {
//           title: "高级动画",
//           roles: ["/ordinaryAni",'admin'] // 用户权限
//         }
//       }
//     ]
//   },
//   {
//     path: "/function",
//     name: "function",
//     component: menu,
//     meta: {
//       title: "功能"
//     },
//     children: [
//       {
//         path: "print",
//         name: "print",
//         component: print,
//         meta: {
//           title: "打印",
//           roles: ["/print",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "clipboard",
//         name: "clipboard",
//         component: clipboard,
//         meta: {
//           title: "复制",
//           roles: ["/clipboard",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "layer",
//         name: "layer",
//         component: layer,
//         meta: {
//           title: "layer",
//           roles: ["/layer",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "seeImg360",
//         name: "seeImg360",
//         component: seeImg360,
//         meta: {
//           title: "360查看图片",
//           roles: ["/seeImg360",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "html2canvas",
//         name: "html2canvas",
//         component: html2canvas,
//         meta: {
//           title: "dom生成图片",
//           roles: ["/html2canvas",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "img2pdf",
//         name: "img2pdf",
//         component: img2pdf,
//         meta: {
//           title: "生成PDF",
//           roles: ["/img2pdf",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "seeImg",
//         name: "seeImg",
//         component: seeImg,
//         meta: {
//           title: "查看图片",
//           roles: ["/seeImg",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "dad",
//         name: "dad",
//         component: dad,
//         meta: {
//           title: "Permission",
//           roles: ["/dad",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "fangdajing",
//         name: "fangdajing",
//         component: fangdajing,
//         meta: {
//           title: "拖拽dom",
//           roles: ["/fangdajing",'admin'] // 用户权限
//         }
//       },
     
//       {
//         path: "jqCookie",
//         name: "jqCookie",
//         component: jqCookie,
//         meta: {
//           title: "jqCookie操作",
//           roles: ["/jqCookie",'admin'] // 用户权限
//         }
//       },
//       {
//         path: "lazyload",
//         name: "lazyload",
//         component: lazyload,
//         meta: {
//           title: "vue懒加载",
//           roles: ["/lazyload",'admin'] // 用户权限
//         }
//       }
//     ]
//   }
// ]

let router = new Router({
  // mode: 'history',  // 如果打开此模式，则url上没有#。
  scrollBehavior: () => ({ y: 0 }),
  routes: defaultRouter
});

export default { router, asyncRoutes };
