<template>
  <div>
    <div id="img-main">
      我是div内的内容，最后变成了图片
    </div>
    <el-button class="mt15 mb15" type="success" @click="getImg"
      >点击生成图片</el-button
    >
    <br />
    <img :src="src" alt="暂时没有生成图片" />
  </div>
</template>

<script>
require("../../utils/html2canvas.js");

export default {
  data() {
    return {
      src: ""
    };
  },
  mounted() {},
  methods: {
    // 生成图片
    getImg() {
      new html2canvas(document.getElementById("img-main"), {
        backgroundColor: "transparent", //png图片透明
        allowTaint: true, // 解决显示跨域
        useCORS: true // 解决显示跨域
      }).then(canvas => {
        // canvas为转换后的Canvas对象
        let oImg = new Image();
        oImg.src = canvas.toDataURL(); // 导出图片
        // document.body.appendChild(oImg); // 将生成的图片添加到body
        this.src = oImg.src;
      });
    }
  }
};
</script>

<style scoped>
#img-main {
  width: 300px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background-color: PINK;
}
</style>
