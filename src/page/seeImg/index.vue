<template>
  <div>
    <viewer :images="photo">
      <!-- //photo 一定要一个数组，否则报错 -->
      <img
        v-for="(src, index) in photo"
        :src="src"
        :key="index"
        :onerror="errorImg"
      />
    </viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo: ['http://image.yzmg.com/20200302/car/1.jpg'],
      errorImg:''
    };
  }
};
</script>

<style></style>
