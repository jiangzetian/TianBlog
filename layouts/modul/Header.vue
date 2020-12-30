<template>
    <div id="header" class="container">
        <div class="logo">
            <nuxt-link to="/">天小天的个人博客</nuxt-link>
        </div>
        <div class="menu">
             <nuxt-link to="/">主页</nuxt-link>
             <nuxt-link to="/article">文章</nuxt-link>
             <nuxt-link to="/about">关于</nuxt-link>
             <nuxt-link to="/links">友链</nuxt-link>
             <span :class="!dark?'active item':'item'" @click="closeDark">
                 <i class="el-icon-sunny"></i>
             </span>
             <span :class="dark?'active item':'item'" @click="openDark">
                 <i class="el-icon-moon"></i>
             </span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data(){
        return {
          dark:false,
          menuShow:false,
        }
      },
      methods:{
        openDark(){
            this.dark = true;
            window.document.documentElement.setAttribute( "data-theme", 'dark' );
        },
        closeDark(){
            this.dark = false;
             window.document.documentElement.setAttribute( "data-theme", 'light' );
        }
    }
}
</script>
<style scoped lang="scss">
 @import "assets/css/layout/header";
</style>
