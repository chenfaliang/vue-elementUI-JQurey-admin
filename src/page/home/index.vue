<template>
  <div>
    <div class="home">
      <div class="mt50">
        <h1>欢迎来到陈发良的万能工具箱，让我们一起嘿嘿嘿~~~~~</h1>
        <br />
        <el-button class="mt50" type="success" @click="start">开始</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    // 开始
    start() {
        this.$router.push({path:"/menu"})
    },

   
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}

</style>
