<template>
    <div class="content">
        <div id="myChart" class="chart-container" >
     </div>   
    </div>
</template>

<script>
//let echarts = require('echarts/lib/echarts');
//require('echarts/lib/chart/line');
//require('echarts/lib/component/tooltip');
//require('echarts/lib/component/toolbox');
//require('echarts/lib/component/legend');
//require('echarts/lib/component/markLine');

export default {
  data () {
    return {
      year :[],
      data1 :[],

    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    async drawLine(){
        /** 请求图表数据 */
        const { data } = await this.$axios.get("/testdata");
        this.year = data.testdata.index;
        this.data1 = data.testdata.data;
        console.log(this.year);
        console.log(this.data1);
        let data1max = Math.max.apply(null, this.data1);
        console.log(data1max);
        // 基于准备好的dom，初始化echarts实例
        let Chart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        Chart.setOption({
              title : {
                x: 'center',
                align: 'right'
            },
            grid: {
                bottom: 80,
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['bar'],
                        
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                },
                right : '15%',
                top:'5%',
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            legend: {
                data:name,//设置图例
                x: '20%',
                y:'5%'
            },
            dataZoom: [
                {
                    show: true,
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 100
                },
                  {
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    start: 40,
                    end: 100
                },
            ],
           xAxis : [
                {
                    name: '年份',
                    nameLocation:'start',
                    type : 'category',
                    boundaryGap : false,
                    axisLine: {onZero: false},
                    data:this.year,//设置x轴
                }
            ],
          yAxis: [
                {
                    name: '专利数量',                
                    max:data1max,//设置y轴最大值
                    type: 'value',
                  
                },
                
            ],
          series: [
                {
                    name:"专利数量",
                    type:'line',
                    animation: false,
                    areaStyle: {
                        normal: {}
                    },
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data:this.data1,//设置y轴

                },   
            ],
          color:["#001852"]
},true);
    }
  }
};
</script>

<style lang='less' scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    border: 1px solid #efefef;
    padding: 20px;

    a {
        padding: 0 0.5em;
    }
}

.chart-container {
    height:100%;
    width: 100%;
}
</style>