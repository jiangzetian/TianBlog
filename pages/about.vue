<template>
  <div id="about" class="container">
    <section class="myBox">
      <p>简单介绍</p>
      <div class="content">
        <ul class="list">
          <li v-for="(item,index) in aboutData" :key="item.title">
            <span>{{item.title}}</span><span>{{item.content}}</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="RadarBox">
      <p>技能雷达图</p>
      <div id="Radar"></div>
    </section>
  </div>
</template>

<script>
  import aboutAPI from '@/api/modul/about';
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
        title:'关于 | 天小天',
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
        aboutData:[
          {
            title:'姓名：',
            content:'天小天',
          },
          {
            title:'性别：',
            content:'男',
          },
          {
            title:'出生：',
            content:'1999年09月',
          },
          {
            title:'现居：',
            content:'广东省广州市',
          },
          {
            title:'职业：',
            content:'前端开发工程师',
          },
          {
            title:'爱好：',
            content:'吉他、音乐、篮球、coding',
          },
        ]
      }
    },
    async asyncData(context){
      let radarData = await aboutAPI.getRadar({name:'aboutRadar'});
      return {
        radarData,
      }
    },
    methods:{
      initRadar(){
        //格式化数据
        let indicator=[];
        let seriesData=[];
        (this.radarData).forEach((item,index)=>{
          indicator.push({name:item.name,max:item.max});
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
    },
    created() {
    },
    mounted() {
      this.initRadar()
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/page/about.scss";
</style>
