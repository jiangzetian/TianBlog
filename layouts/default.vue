<template>
  <div id="layout">
    <div id="Main">
      <nuxt/>
    </div>
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
