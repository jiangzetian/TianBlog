<template>
  <div id="about" class="container">
    <section class="myBox">
      <p>简单介绍</p>
      <div class="content">
<!--        <div class="avatar"><el-avatar src="https://image.tianxiaotian.xyz/2020/08/10/48e4cc3e78a6d.jpg" :size="120"></el-avatar></div>-->
        <ul class="list">
          <li v-for="(item,index) in 6" :key="index">
            <span>xxx:</span><span>xxxxxxx</span>
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
        articleData:[],
        contactData:[],
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
