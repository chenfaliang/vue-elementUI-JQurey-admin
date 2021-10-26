<template>
  <div>
    <section class="container-fluid" id="container">
      <div class="threesixty product1">
        <div class="spinner">
          <span>0%</span>
        </div>
        <ol class="threesixty_images"></ol>
      </div>
    </section>
  </div>
</template>

<style>
@import "../../threesixty/threesixty.css";
</style>

<script>
require("../../utils/jquery.min.js");
require("../../threesixty/threesixty.js");

export default {
  mounted() {
      $(".product1").ThreeSixty({
        totalFrames: 28, //图片的总数
        endFrame: 28,
        currentFrame: 1,//初始化时现实的第几个元素
        imgList: ".threesixty_images",//显示图片的父级div
        progress: ".spinner",//显示进度的div
        imagePath: "http://image.yzmg.com/20200302/car/",//图片的路径
        filePrefix: "",//用到的图片的前缀名称
        ext: ".jpg",//存放的图片的后缀名（要一致）
        height: 667,//显示区域的高度
        width: 1000,//显示区域的宽度
        navigation: true,//是否显示导航条（可以进行的操作：上一步   下一步   开始自动旋转）
        disableSpin: false
      });
  }
};
</script>
