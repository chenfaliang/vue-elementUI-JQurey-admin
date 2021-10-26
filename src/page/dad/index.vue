<template>
  <div>
    <h3>1 水平拖拽（带回调函数）</h3>
    <div class="jq1">
      <div class="item item1"><span>1</span></div>
      <div class="item item2"><span>2</span></div>
      <div class="item item3"><span>3</span></div>
      <div class="item item4"><span>4</span></div>
      <div class="item item5"><span>5</span></div>
    </div>

    <h3 class="mb15">2 垂直拖放（允许/禁止拖放）</h3>
    <div>
      <el-button type="success" @click="activate">允许</el-button>
      <el-button type="warning" @click="deactivate">禁止</el-button>
    </div>
    <div class="jq2">
      <div class="item item1"><span>1</span></div>
      <div class="item item2"><span>2</span></div>
      <div class="item item3"><span>3</span></div>
      <div class="item item4"><span>4</span></div>
      <div class="item item5"><span>5</span></div>
    </div>

    <h3>3 多行拖放</h3>

    <div class="jq3">
      <div class="item item1"><span>1</span></div>
      <div class="item item2"><span>2</span></div>
      <div class="item item3"><span>3</span></div>
      <div class="item item4"><span>4</span></div>
      <div class="item item5"><span>5</span></div>
      <div class="item item6"><span>6</span></div>
      <div class="item item7"><span>7</span></div>
      <div class="item item8"><span>8</span></div>
    </div>

    <h3>4 指定拖动区域(标题部分才可以拖放)</h3>

    <div class="jq4">
      <div class="item item1">
        <h4>标题</h4>
        <span>1</span>
      </div>
      <div class="item item2">
        <h4>标题</h4>
        <span>2</span>
      </div>
      <div class="item item3">
        <h4>标题</h4>
        <span>3</span>
      </div>
      <div class="item item4">
        <h4>标题</h4>
        <span>4</span>
      </div>
      <div class="item item5">
        <h4>标题</h4>
        <span>5</span>
      </div>
      <div class="item item6">
        <h4>标题</h4>
        <span>6</span>
      </div>
      <div class="item item7">
        <h4>标题</h4>
        <span>7</span>
      </div>
      <div class="item item8">
        <h4>标题</h4>
        <span>8</span>
      </div>
    </div>

    <h3>5 仿垃圾篓(拖放到右边删除)</h3>

    <div class="wrap">
      <div class="jq5">
        <div class="item item1"><span>1</span></div>
        <div class="item item2"><span>2</span></div>
        <div class="item item3"><span>3</span></div>
        <div class="item item4"><span>4</span></div>
      </div>

      <div class="dropzone"></div>
    </div>

    
  </div>
</template>

<script>
require("../../dad/jquery.dad.min");
export default {
  data() {
    return {
      jq2: ""
    };
  },
  mounted() {
    //水平拖拽（带回调函数）
    $(".jq1").dad({
      callback: function() {
        alert("拖放成功");
      }
    });

    // 垂直拖拽
    this.jq2 = $(".jq2").dad();

    // 多行拖拽
    $(".jq3").dad();

    // 指定拖动区域
    $(".jq4").dad({
      draggable: "h4"
    });

    //仿垃圾篓
    var d = $('.jq5').dad();
	d.addDropzone('.dropzone', function(e){
		e.remove();
    });
    
  },
  methods: {
    //允许
    activate() {
      this.jq2.activate();
    },

    // 禁止
    deactivate() {
      this.jq2.deactivate();
    }
  }
};
</script>

<style>
/* 必须样式 */
@import url("../../dad/jquery.dad");

/* 水平拖拽 */
.jq1 {
  width: 1000px;
  margin: 10px;
  font-family: arial, SimSun;
  font-size: 0;
}
.jq1 .item {
  display: inline-block;
  width: 180px;
  height: 100px;
  margin-right: 20px;
  *display: inline;
  *zoom: 1;
}
.jq1 .item1 {
  background-color: #1faeff;
}
.jq1 .item2 {
  background-color: #ff2e12;
}
.jq1 .item3 {
  background-color: #00c13f;
}
.jq1 .item4 {
  background-color: #e1b700;
}
.jq1 .item5 {
  background-color: #7200ac;
}
.jq1 span {
  display: block;
  height: 100px;
  line-height: 100px;
  font-size: 32px;
  text-align: center;
  color: #fff;
}

/* 垂直拖放 */
.jq2 {
  width: 1000px;
  margin: 10px;
  font-family: arial, SimSun;
  font-size: 0;
}
.jq2 .item {
  width: 100%;
  margin-bottom: 20px;
}
.jq2 .item1 {
  background-color: #1faeff;
}
.jq2 .item2 {
  background-color: #ff2e12;
}
.jq2 .item3 {
  background-color: #00c13f;
}
.jq2 .item4 {
  background-color: #e1b700;
}
.jq2 .item5 {
  background-color: #7200ac;
}
.jq2 span {
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}

/* 多行拖拽 */
.jq3 {
  width: 1000px;
  margin: 10px;
  font-family: arial, SimSun;
  font-size: 0;
}
.jq3 .item {
  display: inline-block;
  width: 230px;
  height: 100px;
  margin: 0 20px 20px 0;
  background-color: #ccc;
}
.jq3 .item1 {
  background-color: #1faeff;
}
.jq3 .item2 {
  background-color: #ff2e12;
}
.jq3 .item3 {
  background-color: #00c13f;
}
.jq3 .item4 {
  background-color: #e1b700;
}
.jq3 .item5 {
  background-color: #7200ac;
}
.jq3 .item6 {
  background-color: #ff76bc;
}
.jq3 .item7 {
  background-color: #001e4e;
}
.jq3 .item8 {
  background-color: #632f00;
}
.jq3 span {
  display: block;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}

/* 指定区域 */
.jq4 {
  width: 1000px;
  margin: 10px;
  font-family: arial, SimSun;
  font-size: 0;
}
.jq4 .item {
  display: inline-block;
  width: 230px;
  margin: 0 20px 20px 0;
  background-color: #ccc;
}
.jq4 .item1 {
  background-color: #1faeff;
}
.jq4 .item2 {
  background-color: #ff2e12;
}
.jq4 .item3 {
  background-color: #00c13f;
}
.jq4 .item4 {
  background-color: #e1b700;
}
.jq4 .item5 {
  background-color: #7200ac;
}
.jq4 .item6 {
  background-color: #ff76bc;
}
.jq4 .item7 {
  background-color: #001e4e;
}
.jq4 .item8 {
  background-color: #632f00;
}
.jq4 h4 {
  margin: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: #fff;
}
.jq4 span {
  display: block;
  line-height: 100px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
/* 仿垃圾篓 */
.wrap {
  width: 1000px;
  height: 220px;
  margin: 10px;
  font-family: arial, SimSun;
  font-size: 0;
  overflow: hidden;
}
.jq5 {
  float: left;
  width: 400px;
}
.jq5 .item {
  display: inline-block;
  width: 180px;
  height: 100px;
  margin: 0 20px 20px 0;
}
.jq5 .item1 {
  background-color: #1faeff;
}
.jq5 .item2 {
  background-color: #ff2e12;
}
.jq5 .item3 {
  background-color: #00c13f;
}
.jq5 .item4 {
  background-color: #e1b700;
}
.jq5 .item5 {
  background-color: #7200ac;
}
.jq5 span {
  display: block;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}

.btns {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.dropzone {
  height: 220px;
  margin: 0 0 0 400px;
  background-color: #ccc;
}
</style>
