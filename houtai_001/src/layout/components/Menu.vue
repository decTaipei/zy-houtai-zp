<template>
  <div class="menu">
    <div class="title">后台管理系统</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    >
    <!-- 商品列表 -->
      <el-submenu index="1">

        <template slot="title">
          <i class="icon icon-shangpin" ></i>
          <span>商品</span>
        </template>

        <el-menu-item-group>
         
          <el-menu-item index="1-1" @click='goods'>商品列表</el-menu-item>
           <el-menu-item index="1-2" @click='car'>购物车</el-menu-item>
        </el-menu-item-group>

      </el-submenu>

         <!-- 用户列表 -->
       <el-submenu index="2">
        
        <template slot="title">
          <i class="icon icon-yonghu"></i>
          <span>用户</span>
        </template>

        <el-menu-item-group>
           <el-menu-item index="1-1" @click='biaoge'>用户列表</el-menu-item>
         <el-menu-item index="1-2" @click='yhadd'>用户添加</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    <!-- 地图列表 -->
  <el-submenu index="3">

        <template slot="title">
          <i class="icon icon-weizhixiangqing"></i>
          <span>位置地图</span>
        </template>

        <el-menu-item-group>
         
          <el-menu-item index="1-1" @click='shangpu'>商铺位置</el-menu-item>
           <el-menu-item index="1-2" @click='mapfanwei'>配送范围</el-menu-item>
          
        </el-menu-item-group>

      </el-submenu>
   <!-- 图标 -->
    <el-submenu index="4">

        <template slot="title">
          <i class="icon icon-shuju01"></i>
          <span>数据分析</span>
        </template>

        <el-menu-item-group>
         
          <el-menu-item index="1-1" @click='tuone'>数据报表</el-menu-item>
          <el-menu-item index="1-2" @click='tutwo'>数据趋势图</el-menu-item>
         
          
        </el-menu-item-group>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  methods:{
    goods(){
      this.$router.push('/goods/goodlist');
    },
    biaoge(){
      this.$router.push('/order/list');
    },
    car(){
       this.$router.push('/gouwuche/gouwuchecar');
    },
    // yanzheng(){
    //   this.$router.push('/yz/yanzheng.vue');
    // }
    yhadd(){
       this.$router.push('/yh/yhadd');
    },



    shangpu(){
       this.$router.push('/giss/map');
    },
    mapfanwei(){
       this.$router.push('/giss/mapfanwei');
    },
    tuone(){
       this.$router.push('/tubiao/tuone');

    },
    tutwo(){
       this.$router.push('/tubiao/tutwo');

    },
  }
};
</script>

<style lang="less" scoped>

.menu {
  .title {
    height: 60px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 16px;
  }
  /deep/.el-menu {
    border-right: 0;
  }
}
i{
  margin-right: 20px;
}
</style>
