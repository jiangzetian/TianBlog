<template>
  <div id="article" class="container">
    <div class="categoryList">
      <div class="item" v-for="(item,index) in categoryDate" :key="index">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="articlelist">
      <div class="item" v-for="(item,index) in list.data" :key="item.id">
        <img :src="item.url" alt="">
        <div class="textBox">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <p class="date">{{item.date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleAPI from '@/api/modul/article';
export default {
  data(){
    return{
      value:'',
      value1:'',
      page:{},
      list:[],
      categoryDate:[],
      category:'',
    }
  },
  head () {
    return {
      title:'文章 | 天小天',
    }
  },
  async asyncData(context){
    let page = {
      pageSize:6,
      currentPage:1,
      total:6,
    };
    let listGetData = {
      pageSize:page.pageSize,
      currentPage:page.currentPage,
      category:'',
    };
    let listData = await articleAPI.list(listGetData);
    let categoryDate = await articleAPI.category({});
    page.total = listData.total;
    return {
      page:page,
      list:listData,
      categoryDate:categoryDate,
    }
  },
  methods:{
    currentChange(e){
      this.page.currentPage = e;
      this.getList();
    },
    selectChange(e){
      this.category = e;
      this.page.currentPage = 1;
      this.page.total = 6;
      this.getList();
    },
    async getList(){
      let listPostData = {
        pageSize:this.page.pageSize,
        currentPage:this.page.currentPage,
        category:this.category,
      };
      let listData = await articleAPI.list(listPostData);
      this.page.total = listData.total;
      this.list=listData;
    }
  },
  mounted() {
    console.log(this.list)
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/page/article.scss";
</style>
