<template>
    <div class="news">
        <a-tables>
            <div slot="tables">
                <el-table  ref="multipleTable"
                           :data="tableData"
                           tooltip-effect="dark"
                           style="width: 100%"
                           @selection-change="handleSelectionChange">

                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>

                        <el-table-column
                                property="date"
                                label="日期"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                property="name"
                                label="姓名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                property="address"
                                label="地址">
                        </el-table-column>

                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                            </template>
                        </el-table-column>

                </el-table>
            </div>
        </a-tables>

    </div>
</template>

<script>
    import aTables from '@/tools/tables/Tables'
    export default {
        name: "news",
        components: {
          aTables
        },
        data() {
          return {
              tableData: [{
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
              }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
              }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
              }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
              }, {
                  date: '2016-05-08',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
              }, {
                  date: '2016-05-06',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
              }, {
                  date: '2016-05-07',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
              }],
              multipleSelection: []
          }
        },
        props: {
        },
        methods: {
            handleClick(row) {
                window.console.log(row);
            },

            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    };
</script>
<style>

</style>
