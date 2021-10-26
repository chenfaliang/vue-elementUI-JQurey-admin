<template>
  <div>
    <tabBar />
    <div class="about">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://static.jzyx.com/uploadfile/2021/0628/20210628040126798.jpeg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://static.jzyx.com/uploadfile/2020/0821/20200821025327964.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://static.jzyx.com/uploadfile/2020/0821/20200821025345542.jpg"
              alt=""
            />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import tabBar from "./TabBar.vue";
import $ from 'jquery' //在需要使用的页面中

export default {
  name: "About",
  data() {
    return {};
  },
  components: { tabBar },

  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      direction: "vertical",
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev"
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      //如果需要自动切换海报
      // autoplay: {
      //   delay: 1000,//时间 毫秒
      //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
      // },
    });
    console.log('[jquery]',$);
  }
};
</script>

<style scoped>
.swiper-container {
  height: 100vh;
  width: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  background-color: #42b983;
  text-align: center;
  /* line-height: 500px; */
}
</style>
