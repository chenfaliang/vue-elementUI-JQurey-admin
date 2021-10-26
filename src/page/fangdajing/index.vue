<template>
  <div>
    <div id="magnifier">
      <div class="small-box">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <div class="small-box">
                <img src="./picture/big_1.jpg" alt="#" />
                <span class="hover"></span>
                <span class="hover"></span>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="thumbnail-box">
        <a href="javascript:;" class="btn btn-prev btn_prev_disabled"></a>
        <a href="javascript:;" class="btn btn-next"></a>
        <div class="list">
          <ul class="wrapper">
            <li class="item item-cur" data-src="/static/img/big_1.jpg">
              <img src="./picture/big_1.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_2.jpg">
              <img src="./picture/big_2.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_3.jpg">
              <img src="./picture/big_3.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_4.jpg">
              <img src="./picture/big_4.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_5.jpg">
              <img src="./picture/big_5.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_6.jpg">
              <img src="./picture/big_6.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_2.jpg">
              <img src="./picture/big_2.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_3.jpg">
              <img src="./picture/big_3.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_4.jpg">
              <img src="./picture/big_4.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_5.jpg">
              <img src="./picture/big_5.jpg" alt="#" />
            </li>
            <li class="item" data-src="/static/img/big_6.jpg">
              <img src="./picture/big_6.jpg" alt="#" />
            </li>
          </ul>
        </div>
      </div>
      <div class="big-box">
        <img src="./picture/big_1.jpg" alt="#" />
      </div>
    </div>
  </div>
</template>

<script>
require("../../utils/magnifier.js");

export default {
  mounted() {
    $("#magnifier").magnifier();
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}

#magnifier {
  position: relative;
  width: 450px;
  margin: 54px 0 0 70px;
}
.small-box {
  position: relative;
  width: 450px;
  height: 450px;
  margin-bottom: 20px;
  border: 1px solid #eee;
}
.small-box table td {
  width: 450px;
  height: 450px;
}
.small-box img {
  width: auto;
  height: auto;
  max-height: 450px;
  max-width: 450px;
}
.small-box .hover {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  border: 1px solid #aaa;
  background: #0099ff;
  opacity: 0.5;
  filter: alpha(opacity: 50);
  cursor: move;
}
.thumbnail-box {
  position: relative;
  width: 100%;
}
.thumbnail-box .btn {
  position: absolute;
  top: 50%;
  width: 22px;
  height: 32px;
  margin-top: -16px;
}
.thumbnail-box .btn-prev {
  left: 0;
  background: url(./images/btn_prev.png) no-repeat;
}
.thumbnail-box .btn-prev.btn_prev_disabled {
  background: url(./images/btn_prev_disabled.png) no-repeat;
  cursor: not-allowed;
}
.thumbnail-box .btn-next {
  right: 0;
  background: url(./images/btn_next.png) no-repeat;
}
.thumbnail-box .btn-next.btn_next_disabled {
  background: url(./images/btn_next_disabled.png) no-repeat;
  cursor: not-allowed;
}
.thumbnail-box .list {
  overflow: hidden;
  width: 390px;
  margin: 0 auto;
}
.thumbnail-box .wrapper {
  width: 100000px;
}
.thumbnail-box .list .item {
  float: left;
  margin: 0 10px;
}
.thumbnail-box .list .item-cur {
}
.thumbnail-box .list .item img {
  border: 2px solid #a9a9a9;
  width: 54px;
  height: 54px;
}
.thumbnail-box .list .item-cur img {
  border: 2px solid #e53e41;
}
.big-box {
  display: none;
  overflow: hidden;
  position: absolute;
  left: 451px;
  top: 0;
  width: 540px;
  height: 540px;
  border: 1px solid #e4e4e4;
}
.big-box img {
  display: block;
}
</style>
