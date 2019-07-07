<template>
  <div class="upload">
    <bread-crumb></bread-crumb>
    <div class="container">
      <h5>拖拽上传</h5>
      <div class="plugins-tips">
        Element UI自带上传组件。
        访问地址：
        <a
          href="http://element.eleme.io/#/zh-CN/component/upload"
          target="_blank"
        >Element UI Upload</a>
      </div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <h5>上传裁剪</h5>
      <div class="plugins-tips">
        vue-cropperjs 访问地址:
        <a
          href="https://github.com/Agontuk/vue-cropperjs"
          target="_blank"
        >vue-cropperjs</a>
      </div>
      <div class="crop-img">
        <img :src="cropImg">
        <div class="crop-btn">
          选择图片
          <input @change="setImg" type="file">
        </div>
      </div>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <vue-cropper
          ref="cropper"
          :src="imgSrc"
          :cropmove="cropImage"
          style="width:100%;height:300px;"
          :ready="cropImage" 
          :zoom="cropImage" 
        ></vue-cropper>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelCrop">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      
    </div>
  </div>
</template>
<script>
import breadCrumb from "./breadcrumb";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  components: {
    breadCrumb,
    VueCropper
  },
  data() {
    return {
      imgSrc: "",
      dialogVisible: false,
      cropImg: '',
      defaultSrc: require('../../assets/images/avator.jpg')
    };
  },
  methods: {
    setImg(ev) {
      const file = ev.target.files[0];
      //判断上传的是否为图片
      if (!file.type.includes("image/")) {
        return;
      }
      //实例化FileReader对象
      const reader = new FileReader();
      reader.onload = (event) => {
        this.dialogVisible = true;
        //存储选择的图片
        this.imgSrc = event.target.result;
        console.log(this.$refs.cropper)
        //replace: 替换图像的src并重建裁剪器。
        this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
      };

      //将传进来的图片转换成base64编码的字符串
      reader.readAsDataURL(file);
    },
    cancelCrop(){
      this.dialogVisible = false;
      this.cropImg = this.defaultSrc;
    },
    cropImage() {
      //getCroppedCanvas: 获取绘制裁剪图像的画布
       console.log(this.cropImg);
       //toDataURL: 将图片转换成base64编码的字符串
       this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      
    },
  },
  created() {
    this.cropImg = this.defaultSrc;
  }
};
</script>
<style>
h5 {
  font-size: 22px;
  margin: 10px 0;
  font-weight: normal;
}
.crop-img {
  display: flex;
  align-items: flex-end;
}
.crop-img img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.crop-img .crop-btn {
  margin-left: 30px;
  position: relative;
  background: #409eff;
  width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.crop-img .crop-btn input {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
  white-space: nowrap;
}
</style>


