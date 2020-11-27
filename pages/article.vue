<template>
  <div id="article" class="page-container">
    <el-row type="flex" justify="center" :gutter="20">
      <div class="header">
        <el-select value="0" placeholder="请选择文章分类">
          <el-option label="全部" value="0"></el-option>
          <el-option label="日常文章" value="1"></el-option>
          <el-option label="前端开发" value="2"></el-option>
          <el-option label="后端开发" value="3"></el-option>
        </el-select>
      </div>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :md="20" :xs="24">
          <el-col :md="8" :sm="12" :xs="24" v-for="(o, index) in 6" :key="o">
            <el-card class="article-item" :body-style="{ padding: '0px' }" shadow="hover">
              <nuxt-link class="link" to="/">
                <el-image
                  style="width:100%; height:200px"
                  src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
                  fit="cover"></el-image>
                <div class="cont">
                  <h2>无用户登录状态网站的购物车功能实现方案</h2>
                  <p>最近遇到一个项目，值得写篇文章进行分析探讨和深入学习交流，所以决定写这篇文章，连续爆肝一下午，写出了Demo，晚上在整理写文章。（非主流无用户登录状态的购物车功能解决方案，不带第三方支付功能）</p>
                </div>
              </nuxt-link>
              <div class="bottom clearfix">
                <time class="time">2020年08月14日</time>
                <el-row>
                  <el-col :span="5">
                    <i class="el-icon-view"></i>
                    <span>999</span>
                  </el-col>
                  <el-col :span="5">
                    <i class="el-icon-thumb"></i>
                    <span>999</span>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="center" class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :pager-count="5"
        :page-size="6"
        :total="100">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import articleAPI from '@/api/article';
export default {
  data(){
    return{
      value:'',
      value1:'',
      list:[]
    }
  },
  head () {
    return {
      title:'文章 | 天小天',
    }
  },
  async asyncData(){
    let listData = await articleAPI.list({});
    return {
      list:listData.data,
    }
  },
  methods:{
  },
  mounted() {
    console.log(this.list)
  },
  created() {
    // console.log(this.list)
  }
}
</script>

<style scoped>
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
