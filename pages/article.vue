<template>
  <div id="article" class="page-container">
    <el-row type="flex" justify="center" :gutter="20">
      <div class="header">
        <el-select clearable :value="category" placeholder="请选择文章分类" @change="selectChange">
          <el-option v-for="(item,index) in categoryDate" :label="item.name" :value="item.id" :key="index"></el-option>
        </el-select>
      </div>
    </el-row>

    <keep-alive>
      <el-row type="flex" justify="center" :gutter="20">
      <el-col :md="20" :xs="24">
          <el-col :md="8" :sm="12" :xs="24" v-for="(item, index) in list.data" :key="item.id">
            <el-card class="article-item" :body-style="{ padding: '0px' }" shadow="hover">
              <nuxt-link class="link" to="/">
                <el-image
                  style="width:100%; height:200px"
                  :src="item.url"
                  fit="cover"></el-image>
                <div class="cont">
                  <h2>{{item.title}}</h2>
                  <p>{{item.desc}}</p>
                </div>
              </nuxt-link>
              <div class="bottom clearfix">
                <time class="time">{{item.date}}</time>
                <el-row>
                  <el-col :span="5">
                    <i class="el-icon-view"></i>
                    <span>{{item.visits}}</span>
                  </el-col>
<!--                  <el-col :span="5">-->
<!--                    <i class="el-icon-thumb"></i>-->
<!--                    <span>999</span>-->
<!--                  </el-col>-->
                </el-row>
              </div>
            </el-card>
          </el-col>
      </el-col>
    </el-row>
    </keep-alive>

    <el-row  type="flex" justify="center" class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="page.pageSize"
        :total="page.total"
        @current-change="currentChange"
      >
      </el-pagination>
    </el-row>
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
  mounted() {
    console.log(this.categoryDate)
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  box-sizing: border-box;
  padding: 10px 10px 30px 10px;
  max-height: 100vh;
  overflow-y: auto;
}
.header{
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
}
.page-container .link{
  text-decoration: none;
}
.article-item{
  margin: 10px 0;
  cursor: pointer;
}
.article-item img{
  display: block;
  width: 100%;
  margin: 0 auto;
}
.article-item .cont{
  padding: 10px;
}
.article-item .cont h2{
  font-size: 22px;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #303133;
}
.article-item .cont p{
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #606266;
}
.article-item .bottom{
  color: #909399;
  padding: 10px;
}
.article-item .bottom .time{
  width: 100%;
  display: block;
  text-align: right;
}
.pages{
  margin: 40px 0 10px 0;
}
</style>
