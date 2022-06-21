<template>
<div>
<div id="header">
    <div class="header-div">
       <span>销售榜</span>
         <p>商品名称:西瓜</p>
         <p>数量：1000千克</p>
    </div>
    <div class="header-div">
       <span>增速榜</span>
         <p>商品名称:哈密瓜</p>
         <p>增长率：30%</p>
    </div>
    <div class="header-div">
       <span>好评榜</span>
         <p>商品名称:西瓜</p>
         <p>好评率：98.6%</p>
    </div>
</div>
<div id="main"></div>


</div>


  
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    let option = {
      title: {
        text: "每月商品销售趋势图",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["西瓜", "橘子", "橙子", "荔枝", "哈密瓜"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "西瓜",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 600, 700, 980],
        },
        {
          name: "橘子",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "橙子",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "荔枝",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 800, 606, 400, 320],
        },
        {
          name: "哈密瓜",
          type: "line",
          stack: "Total",
          data: [200, 400, 450, 500, 700, 1330, 1000],
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>

#main {
  height: 500px;
  width: 1200px;
  margin: 40 auto;
 
}
#header{
  height: 200px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
   .header-div{
     flex: 1;
     margin: 20px 50px;
   
     background: #FFDAB9;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     border-radius: 20px;
     span{
       flex: 1;
       margin-top: 12px;
       font-size: 32px;
       color: #8B4726;
       font-weight: 700;
     }
     p{
       flex: 1;
       margin-top: 12px;
       font-size: 22px;

     }
   }
}
</style>
