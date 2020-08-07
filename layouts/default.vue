<template>
  <div id="layout">
    <div id="paper-window" :class="{'open-menu':menuShow}" >
      <div id="paper-back">
        <nav @click="hidden">
          <div class="close-btn" @click="hidden">
            <i class="el-icon-close"></i>
          </div>
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/article">文章</nuxt-link>
        </nav>
      </div>
      <div id="paper-front">
        <div class="page-header">
          <span @click="open" class="open-btn Danger">
            <i class="el-icon-s-unfold"></i>
          </span>
        </div>
        <div id="container">
            <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      menuShow:false,
    }
  },
  methods:{
    hidden(){
      this.menuShow = false;
    },
    open(){
      navigator.vibrate(1000);
      this.menuShow = true;
    },
  },
  head () {
    return {
      title:'天小天',
      meta: [
        { hid: 'description', name: '天小天', content: '天小天个人网,前端工程师天小天的个人网站,致力于前端技术交流学习。' }
      ]
    }
  },
  mounted() {
  },
}
</script>
<style>
@import "assets/css/font.css";
*{
  margin: 0;
  padding: 0;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color: transparent;
}
/*整体窗口*/
#paper-window {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
/*导航层*/
#paper-back {
  z-index:2;
  width: 100vw;
  height: 100vh;
  background-color: #243040;
  position: fixed;
  top: 0;
  left: 0;
}

#paper-back nav {
  padding: 30px 0 0 0;
  max-width: 100px;
  text-align: center;
}
#paper-back nav .close-btn{
  font-size: 45px;
  cursor: pointer;
  margin-bottom: 30px;
  font-weight: 500;
  color: #F56C6C;
}
#paper-back nav a {
  display: block;
  margin: 20px 0;
  text-decoration: none;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
}
#paper-back nav a:hover{
  color: rgba(255, 255, 255,1);
}

/*内容层*/
#paper-front {
  z-index: 3;
  pointer-events: auto;
  position: relative;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  min-height: 100vh;
}
#paper-front .container{
  width: 100%;
}
#paper-front .page-header{
  box-sizing: border-box;
  padding: 0 10px;
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
}
#paper-front .open-btn{
  font-size: 45px;
  cursor: pointer;
}

/*展开效果*/
#paper-window.open-menu {
  overflow: hidden;
}
#paper-window.open-menu #paper-front {
  pointer-events: none;
  -webkit-transform: rotate(12deg) translate(0);
  transform: rotate(12deg) translate(0);
}
</style>
