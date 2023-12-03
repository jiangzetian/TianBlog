<template>
  <div id="articleDetails" class="container">
    <no-ssr>
      <mavon-editor
        v-cloak
        :toolbarsFlag="false"
        :codeStyle="codeStyle"
        :subfield="false"
        :boxShadow="false"
        :ishljs = "true"
        :scrollStyle="true"
        :previewBackground="'unset'"
        :defaultOpen="'preview'"
        class="editor"
        v-model="detailData.content"/>
    </no-ssr>
  </div>
</template>

<script>
  import articleDetailsAPI from '@/api/modul/articleDetails';
  export default {
    name: "articleDetails",
    data(){
      return{
        id:'',
        detailData:{},
        codeStyle:'monokai',//代码高亮主题
      }
    },
    methods:{
      async getDetail(){
        let res = await articleDetailsAPI.detail({id:this.id});
        if(res){
          this.detailData = res;
          await articleDetailsAPI.addVisits({id:this.id});
        }else {
          this.$router.push('/article');
        }
      }
    },
    created() {
      if (this.$route.query.id){
        this.id = this.$route.query.id;
        this.getDetail();
      }else {
        this.$router.push('/article');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/page/article/details";
</style>
