<template>
  <div>
    <div style="text-align:center; margin-top: 30px">
      <div id="printArea">
        <div>......文本打印区域......</div>
        <div>......文本打印区域......</div>
        <div>......文本打印区域......</div>
        <div>......文本打印区域......</div>
        <div>......文本打印区域......</div>
      </div>
      <br />
      <br />
      <input
        id="btnPrint"
        type="button"
        value="打印文本区域"
        @click="minPrintArea"
      />
      <input
        id="btnPrintFull"
        type="button"
        value="全屏打印"
        @click="maxPrintArea"
      />
    </div>
  </div>
</template>

<script>
require('../../utils/jquery.PrintArea.min')

export default {
  methods: {
    // 打印文本区域
    minPrintArea() {
      $("#printArea").printArea();
    },

    // 全屏打印
    maxPrintArea() {
      $("body").printArea();
    }
  }
};
</script>

<style></style>
