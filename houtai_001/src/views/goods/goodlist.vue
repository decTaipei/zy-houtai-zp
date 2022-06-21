<template>
  <el-card class="box-card">
    <div class="header">
      <h1>商品列表</h1>
    </div>
    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column label="生产日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>

      <el-table-column prop="img" label="商品图片" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
        </template>
      </el-table-column>

      <el-table-column prop="name" label="商品名称" width="120">
      </el-table-column>

      <el-table-column
        prop="address"
        width="300"
        label="产地"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column
        prop="price"
        width="120"
        label="价格"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column label="添加商品" width="500">
        <template slot-scope="scope">
          <el-button type="primary" round @click="addcar(scope.row)"
            >添加到购物车</el-button
          >
          <el-button type="success" round @click="del(scope.row, scope.$index)"
            >删除商品</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <!-- 测试本地存储 -->
    <div @click='get'>
      得到数据
    </div>
  </el-card>
  
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "苹果",
          address: "湖北",
          price: "100",
          img: require("../../image/aaa.jpg"),
          number:1,
          zongjia:'100'
        },
        {
          date: "2016-05-03",
          name: "橘子",
          address: "浙江",
          price: "12",
          img: require("../../image/aaa.jpg"),
          number:1,
           zongjia:'12'
        },
        {
          date: "2016-05-04",
          name: "西瓜",
          address: "海南",
          price: "55",
          img: require("../../image/aaa.jpg"),
           number:1,
           zongjia:'55'
        },
        {
          date: "2016-05-01",
          name: "橙子",
          address: "海南",
          price: "60",
          img: require("../../image/aaa.jpg"),
           number:1,
           zongjia:'60'
        },
        {
          date: "2016-05-08",
          name: "荔枝",
          address: "湖北",
          price: "50",
          img: require("../../image/aaa.jpg"),
           number:1,
           zongjia:'50'
        },
        {
          date: "2016-05-06",
          name: "菠萝",
          address: "海南",
          price: "70",
          img: require("../../image/aaa.jpg"),
           number:1,
           zongjia:'70'
        },
        {
          date: "2016-05-07",
          name: "哈密瓜",
          address: "新疆",
          price: "200",
          img: require("../../image/aaa.jpg"),
           number:1,
           zongjia:'200'
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    del(row, index) {
      console.log(row);
      this.tableData.splice(index, 1);
    },
    //添加购物车事件
    addcar(row) {
      let carlist = localStorage.getItem("carlist");
      console.log(carlist, "carlist");
      
      if (carlist) {
        carlist = JSON.parse(carlist);
        carlist.push(row);
          localStorage.setItem("carlist", JSON.stringify(carlist));
      } else {
        carlist = [row];
        localStorage.setItem("carlist", JSON.stringify(carlist));
      }
    },
    // 本地存储读数据
    get(){
      let get=[];
      get.push(localStorage.getItem("存储的数据"))
       console.log(localStorage.getItem("存储的数据")); 
       console.log(get)
    }
  },
};
</script>

<style lang="less" scoped>
/deep/el-table-column {
  height: 100;
}
img {
  height: 50px;
}
.header{
  height: 80px;
  background: #f2f2f2;
  width: 100%;
  text-align: center;
  color: rebeccapurple;
  line-height: 80px;
  h1{
    color: rebeccapurple;
  line-height: 80px;
  text-align: center;
  margin-right: 200px;
 }
}
</style>
