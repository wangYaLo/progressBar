<template>
    <div class="uploadback">
        <div class="uploadprogress">
        <div class="uploadheader">
            <p class="filename">{{!filename ? 'XXXXXXXXXXXXXXXXXXXXXXXX' : filename}}</p>
            <p class="filesize">{{!filesize ? '(0.00MB)' : filesize}}</p>
        </div>
        <div class="uploadbody">
            <div class="loadwidth1">
                <div class="loadwidth2" :style="'width:' + percentage + '%;'">
                    
                </div>
            </div>
        </div>
        <div class="uploadfooter">
            <p>{{percentage}}%</p>
            <p>{{uploadSpeed}}kb/s</p>
        </div>
        <button  :class="uploaded ? 'cancelupload' : 'cancelupload1' " @click="canelupload">
                {{uploaded == true ? ($i18n.locale == 'zh'? '取消上传': 'Cancel Upload') : ($i18n.locale == 'zh'? '图片加载中': 'image loading')}}
        </button>
    </div>
    </div>
</template>

<script>
  export default {
    name: "uploadprogress",
    data() {
      return {
          newuploaded:true
      }
    },
    props: {
      filename:{//文件名称
          type:String,
          default: '未找寻到文件'
      },
      filesize:{//文件名称
          type:String,
          default: '未找寻到文件'
      },
      uploadSpeed:{//上传速度
          type:Number,
          default: 0
      },
      percentage:{//上传进度
          type:Number,
          default: 0
      },
      uploaded:{//图片上传完毕
          type:Boolean,
          default:true
      }

    },
    created() {
        // console.log(this.$i18n.locale);
        
    },
    mounted(){
        // console.log(this.uploaded);
    },
    beforeDestroy(){
    },
    methods:{
        canelupload(){
            this.$emit('cancelupload')
        },
    }
  }
</script>

<style lang="scss" scoped>
.uploadback{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00aaff;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);;
    display: flex;
    justify-content: center;
    align-items: center;
}
  .uploadprogress{
    width: 354px;
    height: 206px;
    opacity: 1;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 9px 28px 0px rgba(0,0,0,0.10); 
    display: flex;
    flex-direction: column;
    align-items: center;
    .uploadheader{
        width: 290px;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 600;
        text-align: left;
        color: rgba(0,0,0,0.85);
        line-height: 24px;
        margin-top: 46px;
        display: flex;
        justify-content: space-between;
        .filename{
            width: 70%;
            height: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
        }
        .filesize{
            text-align: right;
            width: 30%;
            height: 100%;
        }
    }
    .uploadbody{
        width: 290px;
        margin-top: 16px;
        margin-bottom: 4px;
        .loadwidth1{
            width: 290px;
            height: 2px;
            background: rgba(0,0,0,0.06)
        }
        .loadwidth2{
            height: 2px;
            background: #00aaff;
            border-radius: 32px;
            transition: 0.5s All;
        }

    }
    .uploadfooter{
        width: 290px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: right;
        color: #333333;
        line-height: 24px;
    }
    .cancelupload{
        width: 126px;
        height: 36px;
        opacity: 1;
        background: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
        line-height: 36px;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #666666;
        margin-top: 30px;
        &:hover{
            border: 1px solid #000;
        }
    }
    .cancelupload1{
        width: 126px;
        height: 36px;
        opacity: 1;
        background: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
        line-height: 36px;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #cccccc;
        margin-top: 30px;
       
    }

  }
  
</style>
