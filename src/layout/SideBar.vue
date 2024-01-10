<template>
    <aside :style="{width: sidebar.opened ? '180px' : '64px'}">
        <div class="pointer logo">
            <span>logo</span>
        </div>
        <el-scrollbar height="calc(100vh - 54px)">
            <el-menu :collapse="!sidebar.opened" default-active="0" class="el-menu-vertical-demo" >
                <template v-for="(item,index) in sidebar.menuList" :key="index">
                    <el-sub-menu v-if="item.children && item.children.length > 0" :index="index +''">
                        <template #title>
                            <el-icon>
                                <el-icon><House /></el-icon>
                            </el-icon>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <el-menu-item v-for="(child, index2) in item.children" :index="index2 + ''" :key="index2">
                            {{ child.meta.title }}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-scrollbar>
    </aside>
</template>
<script setup>
    import { useSidebar } from '@/stores/sidebar.js'
    const sidebar = useSidebar()
    sidebar.setMenuList()
</script>
<style scoped lang="less">
aside{
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
}
.el-scrollbar{
    padding: 0 10px;
}
.logo{
    background: var(--themeColor);
    font-size: 24px;
    height: 54px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 24px;
    color: var(--textColorCom);
}
.el-menu {
    border-right: none;
}
.el-menu-item{
    border-radius: 5px;
    margin: 5px 0;
}
.el-menu-item.is-active{
    background: var(--themeColor);
    color: var(--textColorCom);
    padding: 10px;
}
/deep/.el-sub-menu__title{
    border-radius: 5px;
}
.el-menu-item:hover{
    background: #d8dddf;
}
.el-menu-item.is-active:hover{
    background: var(--themeColor);
}
/deep/.el-sub-menu__title:hover{
    background: #d8dddf!important;
}
</style>