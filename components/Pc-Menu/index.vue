<template>
  <div id="pcMenu">
    <div :class="menuShow?'open':'menu'" @click="openMenu">
      <div class="item" @click="navToPage('/')">
        <i class="el-icon-s-home"></i>
      </div>
      <div class="item" @click="navToPage('/article')">
        <i class="el-icon-document"></i>
      </div>
      <div class="item">
        <i class="el-icon-chat-dot-round"></i>
      </div>
      <div class="item">
        <i class="el-icon-user-solid"></i>
      </div>
      <div class="item" @click="openDark">
        <i :class="dark?'el-icon-moon':'el-icon-sunny'"></i>
      </div>
    </div>
    <div class="bottom">
      <div class="item" @click="openMenu">
        <i class="el-icon-more"></i>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return {
          dark:false,
          menuShow:false,
        }
      },
      methods:{
        navToPage(path){
          this.$router.push({path})
        },
        openMenu(){
          this.menuShow = !this.menuShow;
          navigator.vibrate(60);
        },
        openDark(){
          this.dark = !this.dark;
          if(this.dark){
            window.document.documentElement.setAttribute( "data-theme", 'dark' );
          }else{
            window.document.documentElement.setAttribute( "data-theme", 'light' );
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "./index";
</style>
