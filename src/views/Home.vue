<template>
    <div class="a-index">
        <el-container class="a-i-container">
            <el-aside :class="{'a-i-aside':!isShowMenu,'a-i-min-aside':isShowMenu}" id="a-i-menu">
                <a-menu @MenuRouted="MenuRouted"></a-menu>
            </el-aside>
            <el-container>
                <el-header class="a-i-header">
                    <a-header ref="tarBarMenu"></a-header>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
                <el-footer>
                    <a-footer></a-footer>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import aHeader from '@/components/content/Header'
    import aMenu from '@/components/content/Menu'
    import aFooter from '@/components/content/Footer'
    export default {
        name: "Index",
        components: {
            aHeader,
            aMenu,
            aFooter,
        },
        data() {
            return {
                isShowMenu: false
            }
        },
        methods: {
            isShowMenuPro(isShowMenu) {
                this.isShowMenu = isShowMenu
            },
            MenuRouted(MenuRoute) {
                window.console.log(MenuRoute)
                this.$refs.tarBarMenu.handleTabsEdit('','add',MenuRoute)
            },
        }
    }
</script>

<style scoped>
    .a-index, .a-i-container{
        height: 100%;
    }
    .a-i-aside{
        max-width: 202px;
        min-width: 66px;
    }
    .a-i-min-aside{
        width: 66px!important;
    }

    .a-i-header{
        height: 100px!important;
        margin: 0;
        padding: 0;
    }
    .el-footer {
        background-color: rgb(125, 127, 130);
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #fefefe;
        text-align: center;
        padding: 5px;
    }
</style>
