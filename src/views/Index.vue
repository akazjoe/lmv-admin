<template>
    <div class="a-i-index">
        <el-scrollbar style="height: 100%;">
            <div class="i-charts">
                <div class="i-card">
                    <el-row :gutter="12">
                        <el-col :span="6">
                            <el-card shadow="hover">
                                <img src="@/tools/icons/svg/peoples.svg" class="i-icons"/>
                                <div>浏览人数：10592</div>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card shadow="hover">
                                <img src="@/tools/icons/svg/message.svg" class="i-icons"/>
                                <div>消息反馈：20</div>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card shadow="hover">
                                <img src="@/tools/icons/svg/eye-open.svg" class="i-icons"/>
                                <div>点击量：1112</div>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card shadow="hover">
                                <img src="@/tools/icons/svg/shopping.svg" class="i-icons"/>
                                <div>销售量：10</div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div id="myChart" :style="{width:'100%',height:'400px'}"></div>
            </div>
            <el-table
                    :data="this.tableData"
                    border
                    style="width: 100%;border-top: 10px solid #f0f2f5;box-shadow: 1px 1px 4px #aaa;">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-scrollbar>
    </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        name: "mainIndex",
        data() {
            return {

                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    legend: {},
                    tooltip: {
                        trigger: 'axis',
                        showContent: false
                    },
                    dataset: {
                        source: [
                            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                        ]
                    },
                    xAxis: {type: 'category'},
                    yAxis: {gridIndex: 0},
                    grid: {top: '55%'},
                    series: [
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {
                            type: 'pie',
                            id: 'pie',
                            radius: '30%',
                            center: ['50%', '25%'],
                            label: {
                                formatter: '{b}: {@2012} ({d}%)'
                            },
                            encode: {
                                itemName: 'product',
                                value: '2012',
                                tooltip: '2012'
                            }
                        }
                    ]
                });
            }
        }

    }
</script>

<style scoped>
    .i-charts{
        width: 100%;
        height: 520px;
        background-color: #fff;
        box-shadow: 1px 1px 4px #aaa;
        border: 0px;
    }
    .i-card{
        width: 100%!important;
        height: 100px;
        margin-bottom: 20px;
        background-color: #f0f2f5;
    }
    .i-icons{
        width: 40px;
        height: 40px;
        margin-right: 20px;
        color: aqua;
    }
    .el-card{
        height: 80px;
        color: #664;
        font-size: 16px;
        font-weight: 600;
        line-height: 40px;
    }
    .el-card__body div{
        float: right;
        margin-right: 20px;
    }
</style>
