<template>
  <transition name="fade">
    <div class="tipsBox" v-show="flag">
      <div class="msg">{{msg}}</div>
    </div>
  </transition>
</template>

<script>
const env = process.env.NODE_ENV;
export default {
  name: 'Toast',
  data () {
    return {
      msg: '',
      flag: false,
    }
  },
  props: {},
  mounted(){},
  methods: {
    showToast(msg){
      this.msg = msg
      this.flag = true
      setTimeout(()=>{
        this.msg = ''
        this.flag = false
      },2000)
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "src/styles/sassCore/_base.scss";
  	.tipsBox{
      position: fixed;
      padding: pxToRem(12) pxToRem(24);
      background-image: url('../../static/toast_bg.png');
      background-repeat: repeat;
      border-radius: pxToRem(4);
      overflow: hidden;
      left: 50%;
      top: 50%;
      z-index: 99;
      transform: translate(-50%,-50%);
      text-align: center;
      width: 60%;
      .msg{
        line-height: pxToRem(32);
        font-family: PingFangSC-Regular;
        font-size: pxToRem(24);
        color: #FFFFFF;
        text-align: center;
      }
      &.fade-enter-active, &.fade-leave-active{
        transition: all 0.3s;
        -webkit-transition: all 0.3s;
      }
      &.fade-enter, &.fade-leave-active{
        opacity: 0;
        background: rgba(7, 17, 27, 0)
      }
    }
</style>
