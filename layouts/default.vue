<template>
  <el-container id="layout">
    <el-header class="hidden-xs-only">
      <header-template/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer class="hidden-sm-and-up">
      <footer-template/>
    </el-footer>
  </el-container>
</template>
<script>
import Header from '@/layouts/modul/Header'
import Footer from '@/layouts/modul/Footer'
import 'element-ui/lib/theme-chalk/display.css';
export default {
  data(){
    return {
      menuShow:false,
      routeData:'',
    }
  },
  head () {
    return {
      title:'天小天',
      meta: [
        { hid: 'description', name: '天小天', content: '天小天个人网,前端工程师天小天的个人网站,致力于前端技术交流学习。' }
      ]
    }
  },
  components:{
    'header-template':Header,
    'footer-template':Footer,
  },
  methods:{
  },
  watch:{

  },
  created() {},
  mounted() {
    window.document.documentElement.setAttribute( "data-theme", 'light' );
    // window.document.documentElement.setAttribute( "data-theme", 'dark' );
  },
}
</script>
<style lang="scss">
  @import "assets/css/layout/layout";

</style>
