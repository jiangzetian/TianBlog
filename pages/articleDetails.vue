<template>
  <div id="articleDetails">
    <no-ssr>
      <mavon-editor
        :toolbarsFlag="false"
        :subfield="false"
        :boxShadow="false"
        :ishljs = "true"
        :scrollStyle="true"
        :previewBackground="'unst'"
        :defaultOpen="'preview'"
        class="editor container"
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
/*@import "@/assets/css/common/common";*/
/deep/.editor{
  border: none;
  background: unset !important;
}
/deep/ pre,/deep/ .hljs{
  background: #fcf8e8 !important;
}
</style>
