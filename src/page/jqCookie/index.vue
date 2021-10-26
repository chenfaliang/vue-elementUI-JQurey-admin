<template>
  <div>
    <h3>
      1.添加一个会话 cookie，当没有指明
      cookie有效时间时，所创建的cookie有效期默认到用户关闭浏览器为止，所以被称为“会话cookie（session
      cookie）”。
    </h3>
    <br />
    <button @click="setCookie">设置会话cookie</button>
    <br />
    <br />
    <h3>
      2.创建一个cookie并设置有效时间为
      7天（当指明了cookie有效时间时，所创建的cookie被称为“持久 cookie
      （persistent cookie）”）:
    </h3>
    <br />
    <button @click="setCookieExpires">设置7天有效时间cookie</button>

    <br />
    <br />
    <h3>
      3.创建一个cookie并设置 cookie的有效路径，在默认情况下，只有设置
      cookie的网页才能读取该
      cookie。如果想让一个页面读取另一个页面设置的cookie，必须设置cookie的路径。cookie的路径用于设置能够读取
      cookie的顶级目录。将这
      个路径设置为网站的根目录，可以让所有网页都能互相读取 cookie
      （一般不要这样设置，防止出现冲突） 。
    </h3>
    <br />
    <button @click="setCookiePath">设置 cookie的有效路径</button>

    <br />
    <br />
    <h3>
      4.读取cookie
    </h3>
    <br />
    <button @click="getCookie">读取Cookie</button>

    <br />
    <br />
    <h3>
      5.删除cookie，通过传递null作为cookie的值即可
    </h3>
    <br />
    <button @click="rmCookie">删除cookie</button>
  </div>
</template>

<script>
require("../../utils/jquery.cookie.js");

export default {
  methods: {
    // 设置cookie
    setCookie() {
      $.cookie("the_cookie", "the_value");
    },

    // 创建一个cookie并设置有效时间为 7天:
    setCookieExpires() {
      $.cookie("the_cookie", "the_value", { expires: 7 });
    },

    //设置 cookie的有效路径
    setCookiePath() {
      $.cookie("the_cookie", "the_value", { expires: 7, path: "/" });
    },

    // 获取cookie
    getCookie() {
      alert("the_cookie值为" + $.cookie("the_cookie"));
    },

    // 删除cookie
    rmCookie() {
      $.cookie("the_cookie", null);
    }
  }
};
</script>

<style></style>
