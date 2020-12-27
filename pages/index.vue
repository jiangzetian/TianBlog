<template>
  <div id="index">
    <div class="avatar">
      <el-avatar src="https://image.tianxiaotian.xyz/2020/08/10/48e4cc3e78a6d.jpg" :size="160"></el-avatar>
    </div>
    <div class="text">
      <h2>天小天</h2>
      <p>天小天一名年轻且充满活力的前端工程师！</p>
    </div>
    <div class="contact">
      <div v-for="(item) in contactData" :key="item.id" @click="navToUrl(item.url)">
        <img :src="item.img" alt="">
      </div>
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
        // var myChart = echarts.init(document.getElementById('Radar'));
        // 绘制图表
        // myChart.setOption(this.radarOption);
      },
      navToUrl(url){
        window.open(url);
      },
    },
    created() {
    },
    mounted() {
      this.initRadar();
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/page/index.scss";
</style>
