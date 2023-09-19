<template>
  <div style="padding: 10px">
    <ul class="top1">
      <li>
        <div
          style="
            width: 30px;
            height: 30px;
            background-color: #1079ea;
            margin-right: 10px;
            text-align: center;
            line-height: 30px;
          "
        >
          <el-icon color="#fff"><UserFilled /></el-icon>
        </div>
        <div>
          <p>30</p>
          <p>关注人数(个)</p>
        </div>
      </li>
      <li>
        <div
          style="
            width: 30px;
            height: 30px;
            background-color: #319f49;
            margin-right: 10px;
            text-align: center;
            line-height: 30px;
          "
        >
          <el-icon color="#fff"><WalletFilled /></el-icon>
        </div>
        <div>
          <p>120</p>
          <p>订单个数(笔)</p>
        </div>
      </li>
      <li>
        <div
          style="
            width: 30px;
            height: 30px;
            background-color: #cc3c4a;
            margin-right: 10px;
            text-align: center;
            line-height: 30px;
          "
        >
          <el-icon color="#fff"><List /></el-icon>
        </div>
        <div>
          <p>4183.80</p>
          <p>今日订单总金额(元)</p>
        </div>
      </li>
      <li>
        <div
          style="
            width: 30px;
            height: 30px;
            background-color: #ebb515;
            margin-right: 10px;
            text-align: center;
            line-height: 30px;
          "
        >
          <el-icon color="#fff"><Histogram /></el-icon>
        </div>
        <div>
          <p>100</p>
          <p>本月销量(笔)</p>
        </div>
      </li>
    </ul>
    <div class="middle">
      <div class="left">
        <div class="top">
          <div
            style="
              display: flex;
              justify-content: space-between;
              padding: 15px;
              width: 100%;
              border-bottom: 1px solid #ccc;
            "
          >
            <div>店铺及商品提示</div>
            <div style="color: #1a7c7b">需要关注的店铺信息及待处理事件</div>
          </div>
          <div
            style="
              padding: 15px;
              display: flex;
              justify-content: space-between;
              text-align: center;
            "
          >
            <div style="padding: 10px 40px; background-color: #e5e5e5">
              <p style="font-weight: 700; font-size: 20px">64</p>
              <p>出售中</p>
            </div>
            <div style="padding: 10px 40px; background-color: #e5e5e5">
              <p style="font-weight: 700; font-size: 20px">10</p>
              <p>待回复</p>
            </div>
            <div style="padding: 10px 40px; background-color: #e5e5e5">
              <p style="font-weight: 700; font-size: 20px">0</p>
              <p>库存预警</p>
            </div>
            <div style="padding: 10px 40px; background-color: #e5e5e5">
              <p style="font-weight: 700; font-size: 20px">3</p>
              <p>仓库中</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="top">
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding: 15px;
                width: 100%;
                border-bottom: 1px solid #ccc;
              "
            >
              <div>交易提示</div>
              <div style="color: #1a7c7b">需要立即处理的交易订单</div>
            </div>
            <div
              style="
                padding: 15px;
                display: flex;
                justify-content: space-between;
                text-align: center;
              "
            >
              <div style="padding: 10px 20px; background-color: #e5e5e5">
                <p style="font-weight: 700; font-size: 20px">0</p>
                <p>代付款</p>
              </div>
              <div style="padding: 10px 20px; background-color: #e5e5e5">
                <p style="font-weight: 700; font-size: 20px">10</p>
                <p>代发货</p>
              </div>
              <div style="padding: 10px 20px; background-color: #e5e5e5">
                <p style="font-weight: 700; font-size: 20px">0</p>
                <p>已发货</p>
              </div>
              <div style="padding: 10px 20px; background-color: #e5e5e5">
                <p style="font-weight: 700; font-size: 20px">3</p>
                <p>已收货</p>
              </div>
              <div style="padding: 10px 20px; background-color: #e5e5e5">
                <p style="font-weight: 700; font-size: 20px">3</p>
                <p>退款中</p>
              </div>
              <div style="padding: 10px 20px; background-color: #e5e5e5">
                <p style="font-weight: 700; font-size: 20px">3</p>
                <p>待售后</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box"></div>
    </div>
    <div class="bottom1">
      <div class="left">
        <div
          style="
            display: flex;
            justify-content: space-between;
            padding: 15px;
            width: 100%;
            border-bottom: 1px solid #ccc;
          "
        >
          <div>店铺及商品提示</div>
          <div style="color: #1a7c7b">需要关注的店铺信息及待处理事件</div>
        </div>
        <div style="padding: 15px">
          <div style="width: 100%; display: flex; border: 1px solid #ccc">
            <div
              style="
                background-color: #e5e5e5;
                padding: 10px;
                width: 100px;
                line-height: 50px;
                border-right: 1px solid #ccc;
              "
            >
              昨日销量
            </div>
            <div style="width: 100%">
              <p
                style="
                  width: 100%;
                  height: 50%;
                  line-height: 38px;
                  border-bottom: 1px solid #ccc;
                  padding-left: 15px;
                "
              >
                订单金额(元)12
              </p>
              <p
                style="
                  width: 100%;
                  height: 50%;
                  line-height: 38px;
                  border-bottom: 1px solid #ccc;
                  padding-left: 15px;
                "
              >
                订单量(件)12
              </p>
            </div>
          </div>
          <div
            style="
              width: 100%;
              display: flex;
              border: 1px solid #ccc;
              margin-top: 10px;
            "
          >
            <div
              style="
                background-color: #e5e5e5;
                padding: 10px;
                width: 100px;
                line-height: 50px;
                border-right: 1px solid #ccc;
              "
            >
              本月销量
            </div>
            <div style="width: 100%">
              <p
                style="
                  width: 100%;
                  height: 50%;
                  line-height: 38px;
                  border-bottom: 1px solid #ccc;
                  padding-left: 15px;
                "
              >
                订单金额(元)12
              </p>
              <p
                style="
                  width: 100%;
                  height: 50%;
                  line-height: 38px;
                  border-bottom: 1px solid #ccc;
                  padding-left: 15px;
                "
              >
                订单量(件)12
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div
          style="
            display: flex;
            justify-content: space-between;
            padding: 15px;
            width: 100%;
            border-bottom: 1px solid #ccc;
          "
        >
          <div>单品销售排行</div>
          <div style="color: #1a7c7b">按周期统计商家店铺的订单量和订单金额</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="#" width="60px" />
          <el-table-column prop="name" label="商品信息" width="485px" />
          <el-table-column prop="num" label="销量" width="110px" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  UserFilled,
  List,
  WalletFilled,
  Histogram,
} from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
onMounted(() => {
  var chartDom = document.getElementById("box");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  option && myChart.setOption(option);
});
const tableData = ref([
  { id: 1, name: "小天鹅(LittleSwan)滚筒洗衣机...", num: 9 },
  { id: 2, name: "小天鹅(LittleSwan)滚筒洗衣机...", num: 9 },
  { id: 3, name: "小天鹅(LittleSwan)滚筒洗衣机...", num: 9 },
]);
</script>

<style lang="scss" scoped>
.top1 {
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-between;
  li {
    background-color: #eaeaea;
    border: 1px solid #ccc;
    padding: 15px 160px 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.middle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .left {
    width: 47.9%;
    background-color: #eaeaea;
    .top {
      width: 100%;
      border: 1px solid #ccc;
    }
    .bottom {
      margin-top: 15px;
    }
  }
  #box {
    width: 51.4%;
    height: 310px;
    background-color: #eaeaea;
  }
}
.bottom1 {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 47.9%;
    background-color: #eaeaea;
    border: 1px solid #ccc;
  }
  .right {
    width: 51.4%;
    background-color: #eaeaea;
    border: 1px solid #ccc;
  }
}
::v-deep .el-table--fit {
  background-color: #eaeaea;
}
</style>
