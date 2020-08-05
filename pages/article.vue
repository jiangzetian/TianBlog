<template>
  <div id="article" class="page-container">
    <el-row type="flex" justify="center" align="center">
      <el-col :span="18" :xs="24">
        <el-form  inline class="demo-form-inline">
          <el-form-item label="分类选择：">
            <el-select value="0" placeholder="请选择文章分类">
              <el-option label="全部" value="0"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" size="mini">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="18" :xs="24">
        <nuxt-link class="link" to="/">
          <el-card class="article-item" shadow="hover" v-for="item in 10" :key="item.index">
            <el-row :gutter="20">
              <el-col :span="8" :xs="24">
                <el-image fit="cover" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" class="image"></el-image>
              </el-col>
              <el-col :span="16" :xs="24">
                <h2>这里是文章的标题！这里是文章的标题！这里是文章的标题！</h2>
                <p>这是一段很长的描述文字，这是一段很长的描述文字，这是一段很长的描述文字，这是一段很长的描述文字，这是一段很长的描述文字。</p>
              </el-col>
            </el-row>
            <el-row>
              <div class="bottom">
                <span class="time">
                  2020年08月05日
                </span>
              </div>
            </el-row>
          </el-card>
        </nuxt-link>
        <el-row  type="flex" justify="center" class="pages">
          <el-pagination
            background
            layout="prev, pager, next"
            :pager-count="5"
            :page-size="5"
            :total="100">
          </el-pagination>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:'',
      value1:''
    }
  },
  head () {
    return {
      title:'文章 | 天小天',
    }
  },
  methods:{
    articleShow(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>
.page-container{
  box-sizing: border-box;
  padding: 60px 10px 30px 10px;
  max-height: 100vh;
  overflow-y: auto;
}
.page-container .link{
  text-decoration: none;
}
.article-item{
  margin: 10px 0;
  cursor: pointer;
}
.article-item .image{
  height: 100%;
}
.article-item h2{
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #303133;
}
.article-item p{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #606266;
}
.article-item .bottom{
  /*margin-top: 30px;*/
}
.article-item .time{
  color: #909399;
  width: 100%;
  display: block;
  text-align: right;
}
.pages{
  margin: 40px 0 10px 0;
}
</style>
