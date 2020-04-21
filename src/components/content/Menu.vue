<template>
    <div class="a-i-menu">
        <el-row>
            <el-col :span="1"><div class="a-showMenu-icon" id="a-showMenu-icon">
                <div class="isShowIcon" @click="isShowMenuClick">
                    <i class="el-icon-s-fold" id="arrow-left" v-show="isShowLeft"></i>
                    <i class="el-icon-s-unfold" id="arrow-right" v-show="isShowRight"></i>
                </div>
            </div></el-col>
            <el-col :span="6"><div class="a-showMsg-icon"></div></el-col>
            <el-col :span="2"><div class="a-showLogin-icon"></div></el-col>
        </el-row>
        <el-menu :default-active="$router.path" router class="a-i-mt"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 @select="handleSelect"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse">
            <el-scrollbar style="height:100%;" class="a-menu">


            <el-menu-item index="/Index"  >
                <i class="el-icon-menu"></i>
                <span slot="title" >首页</span>
            </el-menu-item>

            <label v-for="item in MenuData" :key="item.label">
                <el-submenu :index="item.url">
                    <template slot="title" >
                        <div class="a-m-title-pro">
                            <i :class='[item.icons]'></i>
                            <span slot="title" :class="{cTitleMenu:isCollapse}">{{ item.title }}</span>
                        </div>
                    </template>
                    <label  v-for="cItem in item.child" :key="cItem.label" >
                            <el-menu-item-group >
                                <el-menu-item :index="cItem.url">{{ cItem.title}}</el-menu-item>
                            </el-menu-item-group>
                    </label>
                </el-submenu>
            </label>
            </el-scrollbar>
        </el-menu>
    </div>
</template>

<script>
    import MenuData from '@/router/menu.json'
    export default {
        name: "Menu",
        props: {
            type: String,
            default: ()=> {
                return {

                }
            }
        },
        data() {
            return {
                isShowLeft: false,
                isShowRight: true,
                isCollapse: false,
                MenuData: MenuData
            };
        },
        methods: {
            handleSelect(key) {
                for (let item in this.MenuData){
                    if(this.MenuData[item].url==key){
                        this.title = this.MenuData[item].title
                        this.url = this.MenuData[item].url
                    }else {
                        for (let cItem in this.MenuData[item].child){

                            if (this.MenuData[item].child[cItem].url==key){
                                this.title = this.MenuData[item].child[cItem].title
                                this.url = this.MenuData[item].child[cItem].url
                            }
                        }
                    }
                }
                let data = [this.title,this.url];
                this.$emit('MenuRouted', data)
            },
            handleOpen() {

            },
            handleClose() {

            },
            isShowMenuClick() {
                this.isShowRight = !this.isShowRight;
                this.isShowLeft = !this.isShowLeft;

                this.isCollapse = !this.isCollapse

                document.getElementById('a-i-menu').style.width = this.isShowLeft ? '66px' : '202px'
                document.getElementById('a-showMenu-icon').style.left = this.isShowLeft ? '66px' : '202px'
            },
        }
    }
</script>

<style scoped>
    .a-i-menu{
        max-width: 202px;
        height: 100%;
    }
    .a-i-mt{
        height: 100%;
    }
    .a-i-m-title{
        padding-right: 10px!important;
    }
    .a-m-title-pro{
        text-align: left;
        overflow: hidden;
    }
    .a-showMenu-icon{
        line-height: 49px;
        width: 49px;
        font-size: 24px;
        text-align: center;
        border: 1px solid #ccc;
        position: fixed;
        left: 202px;
        z-index: 9999;
    }
    .a-menu .el-scrollbar__wrap {
        overflow-x: hidden;
        background-color: #000;
    }
</style>
