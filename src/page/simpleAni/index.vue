<template>
  <div>
    <h3 class="mb15">1 进场动画</h3>
    <el-button class="wow slideInLeft" type="primary">从左进入</el-button>
    <el-button class="wow slideInRight" type="primary">从右进入</el-button>
    <el-button class="wow slideInUp" type="primary">从下进入</el-button>
    <el-button class="wow slideInDown" type="primary">从上进入</el-button>

    <h3 class="mt15 mb15">2 延迟1s动画</h3>
    <el-button class="wow slideInLeft" data-wow-delay="1s" type="primary"
      >从左进入</el-button
    >
    <el-button class="wow slideInRight" data-wow-delay="1s" type="primary"
      >从右进入</el-button
    >
    <el-button class="wow slideInUp" data-wow-delay="1s" type="primary"
      >从下进入</el-button
    >
    <el-button class="wow slideInDown" data-wow-delay="1s" type="primary"
      >从上进入</el-button
    >

    <h3 class="mt15 mb15">3 离场动画</h3>
    <el-button
      type="primary"
      id="slideOutLeft"
      class="animated"
      @click="slideOutLeft"
      >从左离开</el-button
    >
    <el-button
      type="primary"
      id="slideOutRight"
      class="animated"
      @click="slideOutRight"
      >从右离开</el-button
    >
    <el-button
      type="primary"
      id="slideOutUp"
      class="animated"
      @click="slideOutUp"
      >从上离开</el-button
    >
    <el-button
      type="primary"
      id="slideOutDown"
      class="animated"
      @click="slideOutDown"
      >从下离开</el-button
    >
    <h3 class="mt15 mb15">4 展开 / 关闭 动画</h3>
    <el-button type="primary" @click="open">展开/关闭（默认关闭）</el-button>
    <el-button type="primary" @click="open2">展开/关闭（默认展示）</el-button>

    <!-- 动画dom -->
    <div id="ani-main1" class="ani-main"></div>
    <div id="ani-main2" class="ani-main2"></div>
    <div id="ani-main3">
      <span class="pointer" @click="close">{{ txt }}</span>
      <div class="conten"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isShow2: true,
      txt: "展开"
    };
  },
  mounted() {},
  methods: {
    // 右侧展开关闭
    close() {
      if (this.txt == "关闭") {
        $("#ani-main3").animate({
          right: "-2.02rem"
        });
        this.txt = "展开";
      } else {
        $("#ani-main3").animate({
          right: "0rem"
        });
        this.txt = "关闭";
      }
    },

    //展开 关闭
    open() {
      $("#ani-main1").css({ visibility: "visible" });
      if (this.isShow) {
        $("#ani-main1").removeClass("animated slideInRight");
        $("#ani-main1").addClass("animated slideOutRight");
      } else {
        $("#ani-main1").removeClass("animated slideOutRight");
        $("#ani-main1").addClass("animated slideInRight");
      }
      this.isShow = !this.isShow;
    },

    // open2
    open2() {
      if (this.isShow2) {
        $("#ani-main2").removeClass("animated slideInDown");
        $("#ani-main2").addClass("animated slideOutDown");
      } else {
        $("#ani-main2").removeClass("animated slideOutDown");
        $("#ani-main2").addClass("animated slideInDown");
      }
      this.isShow2 = !this.isShow2;
    },

    // 从左离开
    slideOutLeft() {
      $("#slideOutLeft").addClass("slideOutLeft");
      this.watchAniEnd();
    },

    // 从右离开
    slideOutRight() {
      $("#slideOutRight").addClass("slideOutRight");
    },

    // 从上离开
    slideOutUp() {
      $("#slideOutUp").addClass("slideOutUp");
    },
    // 从下离开
    slideOutDown() {
      $("#slideOutDown").addClass("slideOutDown");
    },

    // 监听动画结束时间
    watchAniEnd() {
      var element = document.getElementById("slideOutLeft");
      element.addEventListener("webkitTransitionEnd", handle, false);
      function handle() {
        console.log("动画结束");
      }
    }
  }
};
</script>

<style scoped>
.ani-main {
  width: 2rem;
  height: 2rem;
  background-color: pink;
  position: fixed;
  right: 0;
  visibility: hidden;
  cursor: pointer;
}
.ani-main2 {
  width: 2rem;
  height: 2rem;
  background-color: pink;
  position: fixed;
  bottom: 0;
  left: 50%;
  cursor: pointer;
}
.conten {
  display: inline-block;
  width: 2.02rem;
  height: 5.66rem;
  background: url("../../assets/image/sidebar-bg.png") no-repeat;
  background-size: 2.02rem 5.66rem;
}
#ani-main3 {
  position: fixed;
  top: 1rem;
  right: -2.02rem;
}
</style>
