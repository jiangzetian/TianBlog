<template>
  <div id="layout">
    <el-container>
      <!--头部-->
      <el-header id="header">
        <div  class="container">
          <div class="logobox">
            <img class="logo" src="https://via.placeholder.com/200x200?text=logo" alt="">
            <h1>TianXiaoTian.xyz</h1>
          </div>
<!--          <el-input placeholder="请输入内容" style="width:200px">-->
<!--            <el-button slot="append" icon="el-icon-search"></el-button>-->
<!--          </el-input>-->
        </div>
      </el-header>
      <!--内容-->
      <el-main>
        <div id="Main">
          <nuxt/>
        </div>
      </el-main>
    </el-container>
    <pc-menu></pc-menu>
  </div>
</template>
<script>
import PcMenu from '@/components/Pc-Menu'
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
    'pc-menu':PcMenu,
  },
  methods:{
  },
  watch:{

  },
  created() {},
  mounted() {
    window.document.documentElement.setAttribute( "data-theme", 'light' );
  },
}
</script>
<style lang="scss">
  @import "assets/css/layout/layout";
</style>
