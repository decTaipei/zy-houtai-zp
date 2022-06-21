import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../layout/index.vue";


import Order from "../views/order/index.vue";
import OrderList from "../views/order/orderList.vue";


import Goods from '../views/goods/index.vue';
import Goodlist from '../views/goods/goodlist.vue'

import Gouwuche from '../views/gouwuche/index.vue'
import gouwuchecar from '../views/gouwuche/car.vue'


import Giss from '../views/giss/index.vue'
import map from '../views/giss/map.vue'
import mapfanwei from '../views/giss/mapfanwei.vue'

import Yh from '../views/yh/index.vue'
import Yhadd from '../views/yh/yhadd.vue'

import Tubiao from '../views/tubiao/index.vue'
import Tuone from '../views/tubiao/tuone.vue'
import Tutwo from '../views/tubiao/tutwo.vue'




import logina from '../views/login/login.vue'


Vue.use(VueRouter);

const routes = [
  
  {
   
    path:'/login',
    component:logina,
   
  },
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/order/list",
    children: [
      {
        path: "/order",
        component: Order,
        children: [
          {
            path: "/order/list",
            component: OrderList,
          },
        
        ],
      },
      {
        path:'/goods',
        component:Goods,
        children:[
         {
          path:'/goods/goodlist',
          component:Goodlist,
         
         }
        ]
      },
      {
        path:'/gouwuche',
        component:Gouwuche,
        children:[
         {
          path:'/gouwuche/gouwuchecar',
          component:gouwuchecar
         }
        ]
      },
      {
        path:'/giss',
        component:Giss,
        children:[
         {
          path:'/giss/map',
          component:map
         },
         {
          path:'/giss/mapfanwei',
          component:mapfanwei
         }
        ]
      },
      {
        path:'/yh',
        component: Yh,
        children:[
          {
            path:'/yh/yhadd',
            component: Yhadd,
          }
        ]
      },
      {
        path:'/tubiao',
        component: Tubiao,
        children:[
          {
            path:'/tubiao/tuone',
            component: Tuone,
          },
          {
            path:'/tubiao/tutwo',
            component: Tutwo,
          },
        ]
      },
    
    ],
  },
 

];

const router = new VueRouter({
  mode:'hash',
  routes,
});


// router.beforeEach((to, from, next) => {
//   let token2 = localStorage.getItem("token2");
//   if (token2) {
//     next();
//   } else if(to.path === "/login"){
//     next();
//   } else{
//     next("/login");
//   }
  
// });



router.beforeEach((to, from, next) => {
  let token2 = localStorage.getItem("token2");
  if (token2) {
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
