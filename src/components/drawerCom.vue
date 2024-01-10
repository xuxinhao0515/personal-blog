<template>
    <div class="rightSetting" @click="drawer = true">
        <el-icon :size="30" color="#fff" class="is-loading"><Setting /></el-icon>
    </div>
    <el-drawer
        v-model="drawer"
        title="应用配置">
        <el-divider>
            颜色主题风格
        </el-divider>
        <div class="themeBox">
            <el-switch
                v-model="settingObj.themeFlag"
                inline-prompt
                :active-action-icon="Moon"
                :inactive-action-icon="Sunny"
                @change="toggleTheme"
            />
            <div class="common-div">
                <div class="theme" v-for="(item,index) in themeList" :key="index" @click="toggleThemeActive(index)" :class="{'active':index == settingObj.themeActive}">
                    <div :style="{backgroundColor:item}"></div>
                </div>
            </div>
        </div>
        <el-button class="copyConfig" @click="copyConfig"><el-icon style="margin-right: 5px;"><DocumentCopy /></el-icon>复制配置</el-button>
        <!-- <el-color-picker v-model="color1" @change="changeColor"/> -->
    </el-drawer>
</template>

<script setup>
import configSetting from '../setting';
import { reactive, ref, watchEffect } from 'vue'
import { Sunny,Moon } from '@element-plus/icons-vue'

let settingObj = reactive({
    themeFlag: false,
    themeActive: 0
})

//如果有配置设置首先使用
watchEffect(()=>{
    if(JSON.stringify(configSetting) != '{}'){
        Object.assign(settingObj,configSetting)
    }
})

let drawer = ref(false)
let bodyLessVar = document.getElementsByTagName("body")[0].style;

const toggleTheme = () => {
    if(settingObj.themeFlag){
        document.documentElement.classList.remove('Sunny')
        document.documentElement.classList.add('Moon')
        bodyLessVar.setProperty("--bgColor", '#F7F8FA')
        bodyLessVar.setProperty("--textColor", '#FFFFFF')
    }else{
        document.documentElement.classList.add('Sunny')
        document.documentElement.classList.remove('Moon')
        bodyLessVar.setProperty("--bgColor", '#F7F8FA')
        bodyLessVar.setProperty("--textColor", '#333333')
    }
}

const themeList = reactive(['#111111','#2a97fa','#009553','#ff3eb0','#98e1f6','#d8c22c'])
const toggleThemeActive = index => {
    settingObj.themeActive = index
}

watchEffect(()=>{
    bodyLessVar.setProperty("--themeColor", themeList[settingObj.themeActive])
    bodyLessVar.setProperty("--textColorCom", '#FFFFFF')
})

//复制配置
const copyConfig = () => {
    let settingJson = JSON.stringify(settingObj).substring(1,JSON.stringify(settingObj).length-1)
    navigator.clipboard.writeText(settingJson.replace(/\,/g,',\n    '))
    ElMessage({
        message: '复制成功，请粘贴到 src/settings.js 文件中！',
        type: 'success'
    })
}
</script>
<style scoped lang="less">
@import url("@/common.less");
.rightSetting{
    width: 50px;
    height: 50px;
    position: fixed;
    top: calc(50% + 250px);
    right: 0;
    background: @themeColor;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    .is-loading{
        animation-duration: 4s;
    }
}
.el-drawer__body{
    position: relative;
    .themeBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        .el-switch{
            --el-switch-on-color: @themeColor
        }
        .common-div{
            display: flex;
            justify-content: space-around;
            width: 90%;
            margin: 10px 0;
            .theme{
                width: 48px;
                height: 48px;
                border: 1px solid #e4e1e0;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                div{
                    width: 25px;
                    height: 17px;
                    border-radius: 50%;
                    transform: rotate(-45deg);
                    transition: 1s all;
                }
            }
            .theme.active{
                box-shadow:0 0 0 2px @themeColor;
                border-color: @themeColor;
                div{
                    transform: rotate(0);
                    transition: 0.5s all;
                }
            }
        }
    }
    .copyConfig{
        left: 50%;
        padding: 15px 30px;
        transform: translateX(-50%);
        background: @themeColor;
        color: @textColorCom;
        position: absolute;
        box-sizing: border-box;
        bottom: 10px;
    }
}

</style>
  