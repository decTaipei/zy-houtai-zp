<template>
  <div id="main"></div>
</template>

<script>
// 全局引入
import * as echarts from 'echarts';

export default {
  created() {
    // 注册必须的组件
    // echarts.use([
    //   TitleComponent,
    //   TooltipComponent,
    //   GridComponent,
    //   DatasetComponent,
    //   TransformComponent,
    //   BarChart,
    //   LabelLayout,
    //   UniversalTransition,
    //   CanvasRenderer,
    // ]);
  },
  mounted() {
    // 接下来的使用就跟之前一样，初始化图表，设置配置项
    var myChart = echarts.init(document.getElementById("main"));
    let option = {
     title: {
    text: '本月商品销售报表'
  },
  tooltip: {},
  xAxis: {
    data: ['西瓜', '荔枝', '苹果', '橘子', '橙子', '哈密瓜']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
    }
    myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>
#main{
    height: 800px;
    width: 1200px;
    margin: 40 auto;
}
</style>
