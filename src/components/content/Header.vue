<template>
    <div class="a-i-header">
        <div class="a-i-header-top">

        </div>
        <div class="a-i-header-bottom">
            <el-tabs
                    v-model="editableTabsValue"
                    type="card"
                    closable
                    class="a-i-header-tab"
                    @eidt="handleTabsEdit"
                    @tab-click='tabClick'
                    @tab-remove='tabRemove'
                    >

                <el-tab-pane
                        :key="item.name"
                        v-for="(item, index) in editableTabs"
                        :label="item.title"
                        :name="item.name"
                        :class="index"
                        :closable="item.close"
                >
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                editableTabsValue: '1',
                editableTabs: [{
                    title: '首页',
                    name: '/Index',
                    content: '/Index',
                    close: ''

                }],
                tabIndex: 2
            }
        },
        props: {
            type: Array,
            default: ()=> {
                return {

                }
            }
        },
        methods: {
            handleTabsEdit(targetName, action,data) {
                if (action === 'add') {
                    for (let key in this.editableTabs){
                        if(this.editableTabs[key].title==data[0]){
                            return false;
                        }
                    }
                    let newTabName = ++this.tabIndex + '';
                    this.editableTabs.push({
                        title: data[0],
                        name: data[1],
                        content: data[0]
                    });
                    this.editableTabsValue = newTabName;
                    this.$router.push({path: this.editableTabsValue}).catch(err => {err});
                }
            },
            //tab标签点击时，切换相应的路由
            tabClick() {
                this.$router.push({path: this.editableTabsValue}).catch(err => {err});
            },
            tabRemove(targetName) {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                let tabsLen = tabs.length
                if(tabsLen>1){
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                        this.editableTabsValue = activeName;
                        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                        this.$router.push({path: this.editableTabsValue}).catch(err => {err});
                    }
                }
                window.console.log(this.editableTabsValue);

            }

        }

    }
</script>

<style scoped>
    .a-i-header-top{
        height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .a-i-header-tab{
        height: 50px;
        background-color: #fff;
        line-height: 45px;
    }
    .a-i-header-bottom{
        height: 50px;
    }
    .a-showMenu-icon{
        float: left;
        line-height: 49px;
        width: 49px;
        font-size: 24px;
        text-align: center;
        border: 1px solid #ccc;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
