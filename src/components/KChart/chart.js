import React, { Component } from 'react';
import styles from './chart.scss';
import echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

const dateList = data.map(function (item) {
    return item[0];
});
const valueList = data.map(function (item) {
    return item[1];
});

export default class LineChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartText:{
                chartTextTopLeftNum: "——",
                chartTextTopRightNum1: "—",
                chartTextTopRightNum2: "—",
            },
            xAxis: dateList,
            yAxis: valueList
        };
    }

    _initChart = () => {
        const myChart = echarts.init(document.getElementById("MyKChart"));
        const { xAxis, yAxis } = this.state;
        myChart.setOption({

            // Make gradient line here
            visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 400,
                backgroundColor: "#2e1c65",
            }, {
                show: false,
                type: 'continuous',
                seriesIndex: 1,
                dimension: 0,
                min: 0,
                max: xAxis.length - 1,
                backgroundColor: "#2e1c65",
            }],


            title: [{
                left: 'center',
                text: 'Gradient along the y axis',
                show: false
            }],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                data: xAxis,
                show: false
            }],
            yAxis: [{
                splitLine: {show: false},
                show: false
            }],
            grid: [{
                show: false,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0"
            }],
            series: [{
                type: 'line',
                showSymbol: false,
                data: yAxis,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#6612bb'
                        },
                        areaStyle: {
                            color: "#2e1c65"
                        },
                    }
                },
            }],
            backgroundColor: "#1e0f4c",
        });
    };

    componentDidMount(){
        this._initChart();
        let now = +new Date(2018, 3, 31);
        let oneDay = 24 * 3600 * 1000;
        const randomData = () => {
            now = new Date(+now + oneDay);
            const value = Math.random() * 100;
            return [
                [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
                Math.round(value)
            ]

        };
        setInterval( () => {

            for (let i = 0; i < 1; i++) {
                data.shift();
                data.push(randomData());
            }

            const xAxis = data.map(function (item) {
                return item[0];
            });
            const yAxis = data.map(function (item) {
                return item[1];
            });

            this.setState({ xAxis, yAxis });

        }, 1000);
    }

    componentDidUpdate(){
        this._initChart();
    }

    render(){

        const { contentText } = this.props;

        return (
            <div className={styles.myChartBox}>
                <div id="MyKChart" className={styles.myChart} />
                <div className={styles.chartText}>
                    <div className={styles.chartTextTop}>
                        <div className={styles.chartTextTopLeft}>
                            <div className={styles.chartTextTopLeftTitle}>{contentText.chartText.title}</div>
                            <div className={styles.chartTextTopRight}>
                                <div className={styles.chartTextTopLeftNum}>——</div>
                                <div className={styles.chartTextTopRightNum1}>—</div>
                                <div className={styles.chartTextTopRightNum2}>—</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chartTextBottom}>
                        <div className={styles.chartTextBottomLeft}>
                            <div className={styles.chartTextBottomText}>{contentText.chartText.max + " —"}</div>
                            <div className={styles.chartTextBottomText}>{contentText.chartText.min + " —"}</div>
                            <div className={styles.chartTextBottomText}>{contentText.chartText.rise + " 0"}</div>
                            <div className={styles.chartTextBottomText}>{contentText.chartText.fall + " 0"}</div>
                        </div>
                        <div className={styles.chartTextBottomRight}>{contentText.chartText.remark}</div>
                    </div>
                </div>
            </div>
        );
    }
}
