<template>
  <div>
    <el-button type="success" class="mt15" @click="getPDF"
      >点击生成PDF文档</el-button
    >
    <el-button type="success" class="mt15" @click="getPDF"
      >点击生成PDF文档并打印</el-button
    >
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  methods: {
    // 获取pdf，使用参考链接：http://www.rotisedapsales.com/snr/cloud2/website/jsPDF-master/docs/jsPDF.html
    getPDF() {
      /** new jsPDF(op) --op参数说明
       * 第一个参数： l：横向  p：纵向
       * 第二个参数：测量单位（"pt"，"mm", "cm", "m", "in" or "px"）
       * 第三个参数：可以是下面格式，默认为“a4”
       * a0 - a10
       * b0 - b10
       * c0 - c10
       * dl
       * letter
       * government-letter
       * legal
       * junior-legal
       * ledger
       * tabloid
       * credit-card
       * 默认为“a4”。如果您想使用自己的格式，只需将大小作为数字数组传递，例如[595.28, 841.89];
       *
       * */
      var doc = new jsPDF();
      doc.text(20, 20, "Hello world.");
      doc.save("Test.pdf");
    },

    // 生成pdf并打印
    printPDF() {
      var doc = new jsPDF();
      doc.text(20, 20, "Hello world.");
      doc.autoPrint();
      doc.save("Test.pdf");
    }
  }
};
</script>

<style></style>
