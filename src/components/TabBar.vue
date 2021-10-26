<template>
  <div>
    <!-- 顶部开始 -->
    <div class="head">
      <div class="container">
        <h1 class="logo">
          <a href="#">
            <img src="@/assets/image/qxlogo.png" />
          </a>
        </h1>
        <!--导航开始-->
        <div class="nav">
          <ul>
            <li>
              <a href="./index.html" class="active">
                <span>首页</span>
                <span class="line"></span>
              </a>
            </li>
            <li>
              <a href="./game-hub.html">
                <span>游戏中心</span>
                <span class="line"></span>
              </a>
            </li>
            <li>
              <a href="./about.html">
                <span>关于我们</span>
                <span class="line"></span>
              </a>
            </li>

            <li>
              <a href="./product-news.html">
                <span>品牌动态</span>
                <span class="line"></span>
              </a>
            </li>
            <li>
              <a href="./join-us.html">
                <span>人才招聘</span>
                <span class="line"></span>
              </a>
            </li>
          </ul>
        </div>
        <!--导航结束-->
      </div>
    </div>
    <!-- 顶部结束 -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
/*顶部样式开始*/
.head {
  height: 80px;
  background: rgba(5, 2, 2, 0.2);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99ffffff,endColorstr=#99ffffff);
  position: absolute;
  z-index: 9;
  width: 100%;
  // min-width:1200px;
  // position: relative;
  h1.logo {
    float: left;
  }
  /*导航样式开始*/
  .nav {
    height: 90px;
    position: absolute;
    top: 0;
    right: 0;
    ul li {
      float: left;
      a {
        width: 162px;
        height: 90px;
        line-height: 90px;
        text-decoration: none;
        color: #313131;
        text-align: center;
        font-size: 18px;
        display: block;
        float: left;
        border-radius: 0 0 8px 8px;
        position: relative;
        &.active {
          background: #f9bc1f;
          span.line {
            width: 32px;
          }
        }
        &:hover {
          background: #f9bc1f;
          span.line {
            width: 30px;
          }
        }
        span.line {
          position: absolute;
          bottom: 25px;
          left: 50%;
          margin-left: -15px;
          width: 0px;
          height: 2px;
          display: inline-block;
          transition: 0.1s width cubic-bezier(0.46, 1, 0.23, 0.46);
          background-color: #313131;
          box-sizing: border-box;
        }
      }
    }
  }
  /*导航样式结束*/
}
</style>
