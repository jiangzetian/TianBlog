<template>
  <div>
    <div class="container">
      <section class="s1">
        <div class="radarBox" id="Radar"></div>
        <div class="contactBox">
          <el-carousel :interval="3000" arrow="always" type="card" height="200px">
            <el-carousel-item v-for="item in contactData" :key="item.id">
              <div class="contact" :style="'background:'+item.color">
                <img class="img" :src="item.img" alt="">
                <div class="text">
                  <h4>{{item.name}}</h4>
                  <p>{{item.desc}}</p>
                  <a @click="navToUrl(item.url)" target="_blank">点击跳转</a>
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
            <el-timeline-item timestamp="2018/4/12" placement="top" v-for="(item,index) in articleData" :key="item.id">
              <div class="img">
                <img class="logo" :src="item.url" alt="">
              </div>
              <div class="text">
                <h2>{{item.title}}</h2>
                <p>{{item.desc}}</p>
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
  import indexAPI from '@/api/modul/index';
  import articleAPI from '@/api/modul/article';
  //雷达图库
  let echarts = require("echarts/lib/echarts");
  require("echarts/lib/chart/radar");
  require("echarts/lib/component/title");
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/legend");
  export default {
    components:{},
    head () {
      return {
        title:'首页 | 天小天',
      }
    },
    data(){
      return{
        radarOption:{
          title: {},
          tooltip: {},
          legend: {
            show:false
          },
          radar: {
            shape: 'circle',
            axisName: {},
            //indicator示例数据
            indicator: []
          },
          series: [
            {
              name: '技能雷达图',
              type: 'radar',
              areaStyle: {},
              data: [
                {
                  //value示例值数据
                  value: [],
                  name: '技能雷达图'
                }
              ]
            },
          ]
        },
        radarData:[],
        articleData:[],
        contactData:[],
      }
    },
    async asyncData(context){
      let listGetData = {
        pageSize:3,
        currentPage:1,
        category:'',
      };
      let radarData = await indexAPI.getRadar({name:'aboutRadar'});
      let contactData = await indexAPI.getContact({name:'aboutRadar'});
      let articleData = await articleAPI.list(listGetData);
      return {
        radarData,
        contactData,
        articleData:articleData.data,
      }
    },
    methods:{
      initRadar(){
        //格式化数据
        let indicator=[];
        let seriesData=[];
        (this.radarData).forEach((item,index)=>{
          indicator.push({
            name:item.name,
            max:item.max,
          });
          seriesData.push(item.value)
        });
        //修改数据
        this.radarOption.radar.indicator = indicator;
        this.radarOption.series[0].data[0].value = seriesData;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('Radar'));
        // 绘制图表
        myChart.setOption(this.radarOption);
      },
      navToUrl(url){
        window.open(url);
      },
    },
    created() {
    },
    mounted() {
      console.log(this.articleData);
      this.initRadar();
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/page/index.scss";
</style>
