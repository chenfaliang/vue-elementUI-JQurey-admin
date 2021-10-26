<template>
  <div>
    <button @click="open">open(支持：String、html、DOM、URL、数组)</button>
    <br />
    <br />
    <button @click="alert">alert</button>
    <br />
    <br />
    <button @click="msg">msg</button>
    <br />
    <br />
    <button @click="load1">load（默认不关闭）</button>
    <button @click="load2">load（可以关闭）</button>
    <br />
    <br />
    <button id="tips" @click="tips">tips</button>
  </div>
</template>

<script>
require("../../layer/layer.js");

export default {
  methods: {
    // open
    open() {
      console.log("[layer]", layer);
      layer.open({
        type: 0,
        title: "在线调试",
        content: "可以填写任意的layer代码"
      });
    },

    // alert
    alert() {
      layer.alert("你好，小伙子");
    },

    // msg
    msg() {
      layer.msg("你好，小伙子");
    },

    // load
    load1() {
      layer.load();
    },

    // load
    load2() {
      var index = layer.load(1);
      setTimeout(() => {
        layer.close(index);
      },1000);
    },

     // tips
    tips() {
      // layer.tips('提示文本',要吸符的对象,{tips:[2,  //方向 ,'#ff9800'  //颜色]});
     layer.tips('输入的文本式不正确',$('#tips'),{tips:[3, '#ff9800']});
    },

  }
};
</script>

<style>
/* @import url('../../layer/mobile/need/layer.css'); */
@import url("../../layer/theme/default/layer.css");
</style>
