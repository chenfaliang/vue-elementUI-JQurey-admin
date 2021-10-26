<template>
  <div>
    <div>
      <button class="btn" @click="copy">Copy</button>
      <div class="mt15" id="c">我是要被复制的内容</div>
    </div>
  </div>
</template>

<script>
require("../../utils/clipboard.min.js");

export default {
  methods: {
    copy() {
      var c = document.getElementById("c");
      var s = c.innerHTML;
      var clipboard = new Clipboard(".btn", {
        text: function() {
          return s;
        }
      });

      clipboard.on("success", function(e) {
        // alert("复制成功");
      });

      clipboard.on("error", function(e) {
        console.log(e);
      });
    }
  }
};
</script>

<style></style>
