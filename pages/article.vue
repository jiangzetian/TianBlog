<template>
  <div id="article" class="container">
    <section class="categoryList">
      <div class="list">
        <div class="item">
          <span @click="selectChange('')" :class="category?'':'active'">全部</span>
        </div>
        <div class="item" v-for="(item,index) in categoryData" :key="index">
          <span @click="selectChange(index)" :class="index===category?'active':''">{{item.name}}</span>
        </div>
      </div>
    </section>
    <section class="pageList">
      <el-pagination
        :page-size="page.pageSize"
        :pager-count="5"
        :total="page.total"
        :hide-on-single-page="true"
        layout="prev, pager, next"
        @current-change="currentChange"
      >
      </el-pagination>
    </section>
    <div class="articlelist">
      <div class="item" v-for="(item,index) in list.data" :key="item.id" @click="navToDetails(item.id)">
        <img :src="item.url" alt="">
        <div class="textBox">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <div class="date">
            <div>
              <i class="el-icon-view"></i>
              {{item.visits}}
            </div>
            <div>
              <i class="el-icon-time"></i>
              {{item.date}}
            </div>
          </div>
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
      categoryData:[],
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
      pageSize:5,
      currentPage:1,
      total:6,
    };
    let listGetData = {
      pageSize:page.pageSize,
      currentPage:page.currentPage,
      category:'',
    };
    let listData = await articleAPI.list(listGetData);
    let categoryData = await articleAPI.category({});
    page.total = listData.total;
    return {
      page:page,
      list:listData,
      categoryData:categoryData,
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
    navToDetails(e){
      this.$router.push({
        path:'/articleDetails',
        query:{
          id:e
        }
      });
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
    },
  },
  created() {
  },
  mounted() {
  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/page/article.scss";
</style>
