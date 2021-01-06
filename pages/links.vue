<template>
  <div id="links" class="container">
    <div class="linksList">
      <div class="item" v-for="(item,index) in linksData" @click="navToUrl(item.url)">
        <img class="logo" :src="item.img" >
        <div class="text">
          <p class="title">{{item.name}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
    <p class="ad">欢迎互换友情链接</p>
  </div>
</template>

<script>
    import linksAPI from '@/api/modul/links';
    export default {
      name: "links",
      components:{},
      head () {
        return {
          title:'天小天',
        }
      },
      data(){
        return{
          linksData:[],
        }
      },
      async asyncData(context){
        let linksData = await linksAPI.getContact();
        return {
          linksData,
        }
      },
      methods:{
        navToUrl(url){
          window.open(url);
        },
      },
      created() {
      },
      mounted() {
        console.log(this.linksData)
      },
    }
</script>

<style lang="scss" scoped>
@import "@/assets/css/page/links.scss";
</style>
