<template>
  <el-card class="box-card">
    <div class="header">
      <h1 @click='dianji(scope.row,scope.$index)'>购物车</h1>
    </div>
    <!-- 表格 -->
    <el-table :data="carlist" style="width: 100%">

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
        label="单价"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column
        prop="number"
        width="500"
        label="数量"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <el-button type="primary" round @click="numadd(scope.row,scope.$index)"
            >添加数量</el-button
          >
          {{ scope.row.number }}
          <el-button type="primary" round @click="numremove(scope.row,scope.$index)"
            >减少数量</el-button
          >
          <el-button type="primary" round @click="del(scope.row, scope.$index)"
            >删除商品</el-button
          >
        </template>
      </el-table-column>

 <el-table-column
        prop="zongjia"
        width="120"
        label="总价"
        
        show-overflow-tooltip
      >
     
      </el-table-column>

    </el-table>
    <!-- 底部 -->
    <div class="footer">
      <h1 @click='get'>总价格:{{this.num}}</h1>
    </div>
  </el-card>
</template>

<script>
// import {a,b} from '../../store/ceshi'
import local from '../../fengzhuang/local.js'
export default {
  data() {
    return {
      num:0 ,
      carlist: [],
      
    };
  },
  created() {
    this.init();
  },
//    updated(){
//  this.del()
//    },
  methods: {
    init() {
      // 尝试使用封装的的方法
        // let list = local.get("carlist");
      let list = localStorage.getItem("carlist");
      if (list) {
        this.carlist = JSON.parse(list);
      } else {
        this.carlist = [];
      }
    },
    del(row, index) {
      let list = localStorage.getItem("carlist");
      if (list) {
        list = JSON.parse(list);
        list.splice(index, 1);
        localStorage.setItem("carlist", JSON.stringify(list));
        this.init();
   
    // 计算总价格的方法
     let zongjialist = JSON.parse(localStorage.getItem("carlist"))
    let aaaa = 0
      zongjialist.forEach(item => {
         console.log(item.zongjia);
         aaaa = aaaa+parseInt(item.zongjia)
      })
     this.num = aaaa


      }
    },
    get(){
    // 计算总价格的方法     
      let zongjialist = JSON.parse(localStorage.getItem("carlist"))
      let aaaa = 0
      zongjialist.forEach(item => {
         console.log(item.zongjia);
         aaaa = aaaa+parseInt(item.zongjia)
          // localStorage.setItem('carlis t',item.zongjia)
      })
     this.num = aaaa
    },
    // 减少数量 计算单项总价
    numremove(row){
      let zongjialist = JSON.parse(localStorage.getItem("carlist"))
        zongjialist.forEach(item => {
          // item.zongjia = row.number * row.price
            
      })
      if(row.number<=1){
                   row.number = 1
             }else{
              row.number --
             }
    
      row.zongjia = row.number * row.price
    localStorage.setItem('carlist',JSON.stringify(this.carlist))
      this.num = 0
     if(this.carlist && this.carlist.length>0){
          this.carlist.forEach(item => {
            this.num +=  Number(item.zongjia)
          })
     }
    },
     // 增加数量 计算单项总价
    numadd(row){
     row.number++
     row.zongjia = row.number * row.price
     localStorage.setItem('carlist',JSON.stringify(this.carlist))
     this.num = 0
     if(this.carlist && this.carlist.length>0){
          this.carlist.forEach(item => {
            this.num += Number(item.zongjia)
          })
     }
     
    }
    
  },
  computed:{
   
  },
  watch:{

  }
};
</script>

<style lang="less" scoped>
.header{
  height: 80px;
  background: #f2f2f2;
  width: 100%;
  text-align: center;
  color: rebeccapurple;
  line-height: 80px;
}
.footer{
   height: 80px;
  background: #f2f2f2;
  width: 100%;
 h1{
    color: rebeccapurple;
  line-height: 80px;
  text-align: right;
  margin-right: 200px;
 }
}
img {
  height: 50px;
}
</style>
