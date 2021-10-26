<template>
  <div>
    <div class="col-vis">
      <div class="title">常用自定义列</div>

      <ul>
        <template>
          <el-popover
            placement="right"
            :title="title"
            width="200"
            trigger="click"
            :content="content"
          >
            <li slot="reference">
              <span> <i class="el-icon-check"></i> 小游戏看板</span>
              <span class="function"
                ><i class="el-icon-edit"></i><i class="el-icon-delete"></i
              ></span>
            </li>
          </el-popover>

          <el-popover
            placement="right"
            :title="title"
            width="200"
            trigger="click"
            :content="content"
          >
            <li slot="reference">
              <span> <i class="el-icon-check"></i> 小游戏看板</span>
              <span class="function"
                ><i class="el-icon-edit"></i><i class="el-icon-delete"></i
              ></span>
            </li>
          </el-popover>
        </template>
      </ul>

      <div class="footer">
        <span>自定义</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          isHover: false,
          isClick: false,
          text: "小游戏看板"
        },
        {
          isHover: false,
          isClick: false,
          text: "APP看板"
        },
        {
          isHover: false,
          isClick: false,
          text: "导数"
        }
      ],
      tableIndex: "",
      title: "共21个指标",
      content:
        "花费，花费，花费，花费，花费，花费，花费，花费，花费，花费，花费，花费，花费，花费，花费，"
    };
  },
  methods: {
    //鼠标经过
    mouseover(item) {
      item.isHover = true;
    },

    // 鼠标离开
    mouseleave(item) {
      item.isHover = false;
    },

    // 点击事件
    handleClick(item, index) {
      this.tableIndex = index;
    }
  }
};
</script>

<style scoped>
.col-vis {
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: absolute
}
.col-vis .title {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
}
.col-vis .footer {
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}
.col-vis ul {
  padding: 10px 0;
  text-align: left;
 
}
.col-vis ul li {
  position: relative;
  padding: 10px;
  cursor: pointer;
   padding-left: 45px;
  
}
.col-vis ul li:hover {
  background-color: #eee;
}
.col-vis .function {
  position: absolute;
  right: 20px;
}
.col-vis .el-icon-edit {
  margin-right: 10px;
}
.col-vis .el-icon-check {
  position: absolute;
  left: 10px;
  font-size: 20px;
  color: #009ff3;
}
</style>
