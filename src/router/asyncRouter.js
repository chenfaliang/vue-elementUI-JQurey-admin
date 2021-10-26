// 权限路由处理文件
import store from "../store/index.js";
var routerObj = require("./index.js");

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0);
  } else {
    return true;
  }
}

// 权限处理的核心方法--关键方法
/**
 *
 * @param {Array} asyncRouterMap 需要进行权限校验的路由--是数组
 * @param {Array} roles 从后端获取的角色
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

// 对过滤后的顶级路由进行处理（三级路由需要），用于判断此路由的显示的隐藏
/**
 * 1 对路由进行处理，如果最下面的children的个数存在，则返回true,否则，返回false
 * @param {} list
 */
function handleList(list=[]) {
  list.forEach((item, idx) => {
    for (let index = 0; index < item.children.length; index++) {
      const element = item.children[index];
      if (element.children.length > 0) {
        item.meta.isShow = true;
        break;
      } else {
        item.meta.isShow = false;
      }
    }
  });
}

/**
 *
 * @param {Array} role 实际项目中从后端获取的角色，如 ["/simpleAni", "/lazyload", "/jqCookie"]
 * 注意：
 * 此方法不仅在登录的时候需要设置角色
 * 当页面刷新的时候，也需要对角色进行更新（即main.js内也需要处理），或者把角色存储在内存呢中，在内存中获取
 */
export function setAsyncRouter(role = []) {
  // 进行路由鉴权
  var asyncRoutes = routerObj.default.asyncRoutes; // 获取需要权限的路由
  var accessedRouters = filterAsyncRouter(asyncRoutes, role); // 筛选后产生的路由
  handleList(accessedRouters);
  routerObj.default.router.addRoutes(accessedRouters); // 添加筛选对比后的路由
  store.dispatch("setRoutes", accessedRouters); // 设置路由
  store.dispatch("setMinMenuList", accessedRouters[0]); // 在多系统情况下需要此设置
}
