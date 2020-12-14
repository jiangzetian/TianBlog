<template>
  <div>
    <div class="container">
        <h1>Welcome to home</h1>
    </div>
  </div>
</template>

<script>
  import Logo from '../components/Logo'
  import TianCard from '@/components/Tian-Card'
  export default {
    components:{
      "Logo":Logo,
      'Tian-Card':TianCard
    },
    head () {
      return {
        title:'首页 | 天小天',
      }
    },
    data(){
      return{

      }
    },
    methods:{
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/page/index.scss";
</style>
