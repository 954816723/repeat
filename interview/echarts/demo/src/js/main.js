import '../css/style.less'

let echarts = require('echarts');

let bar = echarts.init(document.getElementById('bar'));
bar.setOption({
    title: {
        text: 'bar'
    },
    // tooltip: {},
    legend: {
        data: ['呵呵'] //标题,需跟series的name一致才显示
    },
    xAxis: {
        data: ['1', '2', '3', '4']
    },
    yAxis: {},
    series: [{
        name: "呵呵",
        type: 'bar', //柱状图
        data: ['2', '4', '12', '7']
    }]
}, )

let pie = echarts.init(document.getElementById('pie'));
pie.setOption({
    backgroundColor: '#2c343c',
    visualMap: {
        // 不显示 visualMap 组件，只用于明暗度的映射
        show: false,
        // 映射的最小值为 80
        min: 80,
        // 映射的最大值为 600
        max: 600,
        inRange: {
            // 明暗度的范围是 0 到 1
            colorLightness: [0, 1]
        }
    },
    // 全局设置文本的样式
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    },
    title:{
        text:'pie'
    },
    // tooltip:{},
    legend:{
        data: ['访问来源'] //标题
    },
    series:[
        {
            name:'访问来源',
            type:'pie', //饼状图
            radius:'55%',
            roseType: 'angle', //南丁格尔图
            data:[
                {value:250,name:'1'},
                {value:370,name:'2'},
                {value:188,name:'3'},
                {value:300,name:'4'},
                {value:420,name:'5'},
            ], 
            // 也可以每个系列分别设置
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            // 将标签的视觉引导线的颜色设为浅色
            labelLine: {
                normal:{
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal:{
                    // 阴影大小
                    shadowBlur: 200,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0,0,0,0.5)',
                    // 设置扇形颜色
                    color: '#c23531',
                },
                emphasis: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 1)'
                }
            },
        }
    ]
})