## 基础使用
```js
let pie = echarts.init(document.getElementById('pie'));
pie.setOption({
    title: {    //标题组件
        text: 'pie'     //主标题文本
    },
    color: ['#009CFC', '#2556B9', '#9145BD'], //调色盘颜色列表,不设定从默认值列表中循环获取
    tooltip: {  //提示框组件
        show: false,
        trigger: 'item',
        formatter: function(a) {
            return a.name + a.percent.toFixed(1) + "%"
        }
    },
    legend: {
        data: ['呵呵'], //标题,需跟series的name一致才显示
        formatter: function(params) {
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (option.series[0].data[i].value != 0) {
                    if (option.series[0].data[i].name == params) {
                        return params + " " + option.series[0].data[i].value + " 人";
                    }
                }
            }
        },
        // orient: "vertical",
        right: "-10",
        top: "0",
        itemGap: this.standSize / 50,
        itemWidth: this.standSize / 50,
        itemHeight: this.standSize / 200,
        textStyle: {
            color: "#fff",
            fontSize: "calc(30vh*100/1080)"
        }
    },
    grid: { //布局
        left: '3%',
        // right: '4%',
        bottom: '3%',
        containLabel: true
    },
    graphic: {
        type: "text",
        left: "center",
        top: "center",
        style: {
            text: count + '\n' + "人次",
            textAlign: "center",
            fill: "#fff",
            width: 30,
            height: 30
        }
    },
    xAxis: {
        data: ['1', '2', '3', '4']
    },
    yAxis: {},
    series: [{
        name: '',
        type: 'pie',
        radius: ['40%', '55%'],
        center: ['center', '60%'],
        minAngle: 20, // 设置每块扇形的最小占比
        avoidLabelOverlap: false,
        hoverAnimation: false,
        silent: true,
        label: {
            normal: {
                show: true,
                position: 'outer',
                // formatter: "{d}%"
                formatter: function(d) {
                    return d.percent.toFixed(1) + '%'
                }
            },
            textStyle: { //指示线外的文字
                fontSize: 'calc(30vh * 100 / 1080)',
                color: '#235894'
            }
        },
        labelLine: { // 触须 --指示线
            normal: {
                show: true,
                lineStyle: {
                    color: '#235894',
                },
                // smooth: 0.2,  // 平滑度
                length: this.standSize / 160, // 开始位置
                length2: this.standSize / 150, // 结束位置(两个需要同时写)
            }
        },
        data: [{
                value: opt.data[0].toFixed(2),
                name: 60 * opt.rfss / 100 + '分以下: ' + opt.data[0] + '人'
            }, {
                value: opt.data[1].toFixed(2),
                name: 60 * opt.rfss / 100 + '-' + 70 * opt.rfss / 100 + '分: ' + opt.data[1] + '人'
            }, {
                value: opt.data[2].toFixed(2),
                name: 70 * opt.rfss / 100 + '-' + 80 * opt.rfss / 100 + '分: ' + opt.data[2] + '人'
            }, {
                value: opt.data[3].toFixed(2),
                name: 80 * opt.rfss / 100 + '-' + 90 * opt.rfss / 100 + '分: ' + opt.data[3] + '人'
            }, {
                value: opt.data[4].toFixed(2),
                name: 90 * opt.rfss / 100 + '分以上: ' + opt.data[4] + '人'
            }]
    }]
}, )
```
```js
var myChart = echarts.init(opt.div);
    myChart.setOption({
        color: opt.color,
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow" //阴影，若需要为直线，则值为'line'
            }
        },
        grid: {
            left: "40%",
            right: "10%",
            top: "20%",
            bottom: "20%"
        },
        legend: {
            data: [opt.str1, opt.str2],
            orient: "vertical",
            left: "1%",
            top: "40%",
            icon: 'rect',
            itemGap: this.sw / 50,
            itemWidth: this.sw / 50,
            itemHeight: this.sw / 500,
            textStyle: {
                color: "#ddd",
                fontSize: this.sw / 50
            }
        },
        xAxis: [{
            min: 0,
            offset: this.sw / 100,
            boundaryGap: true,
            type: "category",
            data: opt.arr3,
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: "calc(35vh * 100 / 1080)" //坐标轴字体大小
                }
            },
            axisTick: {
                lineStyle: {
                    type: "dottod"
                }
            }
        }],
        yAxis: [{
            axisLine: {
                lineStyle: {
                    color: "rgba(221,221,221,.8)",
                    width: 0
                }
            },
            type: "value",
            min: 0,
            // max: 100,
            // interval: 20,
            axisLabel: {
                formatter: opt.formatterY,
                textStyle: {
                    // color: 'red',//坐标值得具体的颜色
                    fontSize: "calc(35vh * 100 / 1080)" //坐标轴字体大小
                }
            },
            axisTick: {
                //是否显示坐标轴的刻度
                show: false
            },
            splitLine: {
                // 区域内的线的颜色
                lineStyle: {
                    color: "rgba(28,40,63,1)"
                }
            }
        }],
        series: [{
            barWidth: "15%",
            name: opt.str1,
            type: "line",
            label: {
                normal: {
                    color: "#fff",
                    show: true,
                    position: "top",
                    distance: this.sw / 100,
                    textStyle: {
                        color: "#fff"
                    },
                    formatter: opt.formatterC
                }
            },
            data: opt.arr1
        }, {
            barWidth: "15%",
            name: opt.str2,
            type: "line",
            label: {
                normal: {
                    show: true,
                    position: "top",
                    distance: this.sw / 100,
                    textStyle: {
                        color: "#fff"
                    },
                    formatter: opt.formatterC
                }
            },
            data: opt.arr2
        }]
    });
```
```js
var option = {
    backgroundColor: options.bg,
    title: {
        show: false
    },
    tooltip: {
        show: options.show,
        trigger: 'axis',
        formatter: '{d}：{c}分'
    },
    legend: {
        show: false,
        x: 'center',
        data: ['']
    },
    toolbox: {
        show: false     //工具栏
    },
    calculable: false,  //可拖动
    polar: [
        {
            indicator: [
                            { text: '病人安全', max: 100 },
                            { text: '临床思维', max: 100 },
                            { text: '人文关怀', max: 100 },
                            { text: '无菌观念', max: 100 },
                            { text: '医患沟通', max: 100 },
                            { text: '职业技能', max: 100 },
                            { text: '职业素养', max: 100 },
                            { text: '专业知识', max: 100 },
                        ],
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {
                    type: 'dashed'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(16,29,55,0.5)',
                        'rgba(16,29,55,0.5)', 'rgba(16,29,55,0.5)',
                        'rgba(16,29,55,0.5)', 'rgba(16,29,55,0.5)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            name: {
                textStyle: {
                    color: fontColor,
                    fontSize: "calc(15vh*100/1080)",
                }
            }
        }
    ],
    series: [
        {
            name: '',
            type: 'radar',
            symbol: "none", // 去掉图表中各个图区域的边框线拐点
            data: [
                {
                    symbolSize: 0,
                    itemStyle: {
                        normal: {
                            color: options.line,
                            lineStyle: {
                                width: 2,
                                type: options.type
                            },
                            areaStyle: {
                                color: options.color
                            }
                        }
                    },
                    value: options.value,
                    name: ''
                }
            ]
        }
    ]
};
var my_chart = echarts.init(options.obj);
my_chart.setOption(option);
```
```js
var myChart = echarts.init(document.getElementById("classCum"));
myChart.setOption({
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow" //阴影，若需要为直线，则值为'line'
        }
         // formatter:'预约率: {c0}% <br />预约人次: {c1}'
        formatter: function(c) {
            // console.log(c,c1,'--------   ')
            // for(var i = 0; i < c.length; i++){
            //     c[i].seriesName
            // }
            var arr = [];
            var str = '';
            if (c && c.length) {
                c.map(function(ele) {
                    arr.push({
                        name: ele.seriesName,
                        value: ele.value
                    })
                })
            }
            return arr[0].name + ":" + (arr[0].value).toFixed(1) + "%" + '<br />' + arr[1].name + ":" + arr[1].value

        }
    },
    grid: {
        left: "20%",
        right: "20%",
        bottom: "15%",
        top: "15%",
        containLabel: true
    },
    legend: {
        data: ["预约率", "预约人次"],
        itemGap: this.standSize / 50,
        itemWidth: this.standSize / 50,
        itemHeight: this.standSize / 200,
        textStyle: {
            color: "#FEBE4E",
            fontSize: "calc(35vh * 100 / 1080)"
        }
    },
    xAxis: [{
        min: 0,
        offset: this.standSize / 100,
        boundaryGap: true,
        type: "category",
        show:false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六"],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: modifyFontSize(0, 1).fontSizeTitle //坐标轴横向字体大小
            }
        },
        axisTick: {
            lineStyle: {
                type: "dottod"
            }
        }

    }, ],
    yAxis: {
        type: 'category',
        offset: this.standSize / 100,
        boundaryGap: true,
        min: 0,
        max: 100,
        interval: 20,
        data: ["课前训练", "课堂训练", "互动问答", "随堂小测"],
        axisLine: {
            lineStyle: {
                color: "#ddd"
            }
        },
        axisLabel: {
            show: false,
            formatter: '{value} %',
            textStyle: {
                // color: 'red',//坐标值得具体的颜色
                fontSize: "calc(35vh * 100 / 1080)" //坐标轴字体大小
            },
        },
        axisTick: {
            show: false,
            lineStyle: {
                type: "dottod"
            }
        }
        // splitLine:{  // 区域内的线的颜色
        //     lineStyle:{
        //         color:'red'
        //     }
        // }
    },
    series: [{
        barWidth: "20%",
        type: "bar",
        barGap: "50%",
        name: "预约率",
        itemStyle: {
            normal: {
                show: true,
                barBorderRadius: [2, 2, 2, 2],
                // color: "#31BDF2"
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(25,58,255,0.5)"
                    }, {
                        offset: 1,
                        color: "rgba(6,177,255,1)"
                    }]
                )
            }
        },
        label: {
            normal: {
                color: "#fff",
                show: true,
                position: "right",
                distance: this.standSize / 50,
                textStyle: {
                    color: "#fff"
                },
                formatter: function(c) {
                    return (c.value).toFixed(1) + "%"
                },
            },

        },
        data: arr
    }]
})
```

## Loading动画
```js
myChart.showLoading();
$.get('data.json').done(function (data) {
    myChart.hideLoading();
    myChart.setOption(...);
});
```