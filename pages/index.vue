<template>
  <div>
    <div class="container">
      <section class="s1">
        <div class="radarBox" id="Radar"></div>
        <div class="contactBox">
          <el-carousel :interval="4000" arrow="always" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <div class="contact">
                <img src="https://via.placeholder.com/80" alt="">
                <div class="text">
                  <p>天小天个人网</p>
                </div>
                <div>
                  <a href="">点击跳转</a>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </section>
      <section class="s2">
        <div class="aboutBox">
          <div class="avatar">
            <el-avatar src="https://via.placeholder.com/300" :size="100"></el-avatar>
          </div>
          <div class="text">
            <h2>天小天</h2>
            <p>个人描述个人描述</p>
          </div>
          <div class="content">
            个人描述个人描述个人描述个人描述个人描述个人描述,个人描述个人描述个人描述个人描述,个人描述个人描述个人描述个人描述个人描述个人描述,个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述.
          </div>
        </div>
        <div class="articleBox">
          <el-timeline >
            <el-timeline-item timestamp="2018/4/12" placement="top" v-for="(item,index) in 3" key="index">
              <div class="img">
                <img class="logo" src="https://via.placeholder.com/900x383" alt="">
              </div>
              <div class="text">
                <h2>文章标题文章标题文章标题文章标题</h2>
                <p>文章描述文章描述文章描述，文章描述文章描述，文章描述。</p>
              </div>
              <div class="bottom"></div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Logo from '../components/Logo';
  import TianCard from '@/components/Tian-Card';
  var echarts = require('echarts');
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
      return{}
    },
    methods:{
      initRadar(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('Radar'));
        // 绘制图表
        myChart.setOption({
          title: {},
          tooltip: {},
          legend: {
            show:false
          },
          radar: {
            shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: 'JS', max: 100},
              { name: 'Vue', max: 100},
              { name: 'Git', max: 100},
              { name: 'PHP', max: 100},
              { name: 'H5', max: 100},
              { name: 'PS', max: 100},
              { name: '小程序', max: 100}
            ]
          },
          series: [{
            name: '技能雷达图',
            type: 'radar',
            areaStyle: {normal: {}},
            data: [
              {
                value: [95, 99, 90, 98, 97, 80,100],
                name: '技能雷达图'
              }
            ]
          }]
        });
      }
    },
    created() {

    },
    mounted() {
      this.initRadar()
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/page/index.scss";
</style>
