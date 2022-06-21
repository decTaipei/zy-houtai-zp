<template>
 <el-form ref="form" :model="form" label-width="80px">

     <el-form-item label="用户头像">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>

  <el-form-item label="组件传值">
    <el-input v-model="form.name" class="el-input-width"></el-input>
  </el-form-item>

  <el-form-item label="用户地址">
    <el-input v-model="form.dizhi" class="el-input-width"></el-input>
  </el-form-item>

  <el-form-item label="用户电话">
    <el-input v-model="form.phone" class="el-input-width"></el-input>
  </el-form-item>

  <el-form-item label="用户权限">
    <el-select v-model="form.region" placeholder="请选择用户权限">
      <el-option label="普通用户" value="qutong"></el-option>
      <el-option label="高级用户" value="gaoji"></el-option>
      <el-option label="管理员" value="guanli"></el-option>
    </el-select>
  </el-form-item>


  <el-form-item label="添加类型">
    <el-radio-group v-model="form.resource">
      <el-radio label="用户"></el-radio>
      <el-radio label="管理员"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="其他备注">
    <el-input type="textarea" v-model="form.desc" class="el-input-width2"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
     export default {
    data() {
      return {
           imageUrl: '',
        form: {
          name: '',
          dizhi:'',
          phone:'',
          region:'',
          resource:'',
          desc:'',
          type: [],
         
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

    }
  }
</script>

<style lang="less" scoped>
.el-input-width{
    width: 320px;
}
.el-input-width2{
    width: 400px;
    
}

 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid gray;
  }
  .avatar {
    width:80px;
    height: 80px;
    display: block;
  }
</style>