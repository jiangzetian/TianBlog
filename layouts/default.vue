<template>
  <el-container id="layout">
    <el-header class="hidden-xs-only">
      <header-template/>
    </el-header>
    <el-main id="Main">
      <nuxt/>
    </el-main>
    <el-footer class="hidden-sm-and-up">
      <footer-template/>
    </el-footer>
  </el-container>
</template>
<script>
import appAPI from '@/api/modul/app';
import Header from '@/layouts/modul/Header'
import Footer from '@/layouts/modul/Footer'
import 'element-ui/lib/theme-chalk/display.css';
export default {
  components:{
    'header-template':Header,
    'footer-template':Footer,
  },
  data(){
    return {
      menuShow:false,
      addVisitsRes:'',
    }
  },
  head () {
    return {
      title:'天小天',
      meta: [
        {
          name: 'Description',
          hid: 'description',
          content: '天小天个人网,前端工程师天小天的个人网站,致力于前端技术交流学习。'
        },
        {
          name: 'Keywords',
          hid: 'keywords ',
          content: '天小天，天小天个人网，it天小天，天小天开发，前端天小天，前端，html，css，JavaScript，技术，学习'
        },
      ]
    }
  },
  methods:{
    async addVisits() {
      let addVisitsRes =  await appAPI.addVisits({});
      return {
        addVisitsRes
      }
    },
    initTheme(){
      window.document.documentElement.setAttribute( "data-theme", 'light' );
    },
  },
  created() {
  },
  mounted() {
    this.addVisits();
    this.initTheme();
  },
}
</script>
<style lang="scss">
  @import "assets/css/layout/layout";
</style>
