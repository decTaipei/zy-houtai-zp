<template>
  <div id="login">
    <div class="box">
     <h1>用户登录</h1>
     <p>账号：<input type="text" v-model="name"></p>
     <p>密码：<input type="password" v-model="password"></p>
     <p>
         <button @click="login">登录</button>
         <button>注册</button>
     </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      
    };
  },
  methods: {
    login() {
      if(!this.name == "" && !this.password == ""){
          localStorage.setItem('token2','1')
         this.$router.push("/order/list");
       
      }else{
             alert("请输入账号密码");
      }
    },    
  },
//   路由守卫
  // beforeRouteLeave(to, from, next) {
  //   if (!this.name == "" && !this.password == "") {
  //       localStorage.setItem('token2','123123')
  //       console.log('aaa');
  //     //   放行
  //     next();
  //   } else {
  //     alert("请输入账号密码");
  //     next("/");
  //   }
  // },
};
</script>

<style lang="less" scoped>
#login {
  background: url('../../../public/img/bj.jpg') no-repeat;
  background-size: 100% 100%;
  
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .box {
    height: 500px;
    width: 800px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    h1{
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        margin: 40px 0 30px 0 ;
        color: white;

    }
    p{
        text-align: center;
        font-size: 22px;
        margin: 15px 0 15px 0;
        color: white;
      input{
          height: 30px;
          width: 260px;
      }
      button{
        text-align: center;
        margin: 20px 15px ;
        height: 35px;
        width: 90px;
    }
    }
    
  }
}
</style>
