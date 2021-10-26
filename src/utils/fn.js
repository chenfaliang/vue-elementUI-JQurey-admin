// 时间处理函数
function p(s) {
  return s < 10 ? "0" + s : s;
}

function getTime() {
  const d = new Date();
  const resDate =
    d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  const resTime =
    p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
  return `${resDate}  ${resTime}`;
}

/**
 * 设备和环境检查判断
 * @param 无
 * @return Boolean 真或者假
 */
const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /mobile/i.test(userAgent);
const isAndroid = /android/i.test(userAgent);
const isIOS = /iphone|ipad|ipod/i.test(userAgent);
const isWX = /MicroMessenger/i.test(userAgent);




export default { getTime, isMobile, isAndroid, isIOS, isWX };
