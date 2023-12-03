<template>
  <div id="about" class="container">
    <section class="RadarBox">
      <p>技能雷达图</p>
      <div id="Radar"></div>
    </section>
    <section class="myBox">
      <no-ssr>
        <mavon-editor
          v-cloak
          :toolbarsFlag="false"
          :codeStyle="codeStyle"
          :subfield="false"
          :boxShadow="false"
          :ishljs = "true"
          :scrollStyle="true"
          :previewBackground="'unset'"
          :defaultOpen="'preview'"
          class="editor"
          v-model="resumeData.content"/>
      </no-ssr>
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
        codeStyle:'monokai',//代码高亮主题
      }
    },
    async asyncData(context){
      let radarData = await aboutAPI.getRadar({name:'aboutRadar'});
      let resumeData = await aboutAPI.getResume();
      return {
        radarData,
        resumeData
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
