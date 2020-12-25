<template>
    <div id="footer">
        <div class="menu">
             <nuxt-link to="/">主页</nuxt-link>
             <nuxt-link to="/article">文章</nuxt-link>
             <nuxt-link to="/about">关于</nuxt-link>
             <nuxt-link to="/link">友链</nuxt-link>
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
    name: "Footer",
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
 @import "assets/css/layout/footer.scss";
</style>