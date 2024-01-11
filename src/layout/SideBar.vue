<template>
    <aside :style="{width: sidebar.opened ? '180px' : '64px'}">
        <div class="pointer logo">
            <span>logo</span>
        </div>
        <el-scrollbar height="calc(100vh - 54px)">
            <el-menu :collapse="!sidebar.opened" :default-active="`${defaultActive ? defaultActive : sidebar.menuList[1].children[0].path}`" router :collapse-transition="false">
                <template v-for="(item,index) in sidebar.menuList" :key="item.path">
                    <el-sub-menu v-if="item.children && item.children.length > 0" :index="index + ''">
                        <template #title>
                            <el-icon>
                                <SvgIcon :name="item.meta.icon"></SvgIcon>
                            </el-icon>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <el-menu-item v-for="(child, index2) in item.children" :index="child.path" :key="index2">
                            {{ child.meta.title }}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-scrollbar>
        <div class="show_hidden" @click="sidebar.toggleSidebar()" :class="{active : sidebar.opened}">
            <SvgIcon :name="'show_hidden'"></SvgIcon>
        </div>
    </aside>
</template>
<script setup>
    import { useSidebar } from '@/stores/sidebar.js'
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    const sidebar = useSidebar()
    sidebar.setMenuList()

    const route = useRoute()
    const defaultActive = ref('')
    watch(route,() => {
        defaultActive.value = route.path
    })
</script>
<style scoped lang="less">
aside{
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
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
    padding: 0 10px;
    box-sizing: content-box;
}
.el-menu-item.is-active{
    background: var(--themeColor);
    color: var(--textColorCom);
    padding: 0 10px;
}
:deep(.el-sub-menu__title){
    border-radius: 5px;
}
.el-menu-item:hover{
    background: #d8dddf;
}
:deep(.el-scrollbar__view){
    padding: 0 10px;
}
.el-menu-item.is-active:hover{
    background: var(--themeColor);
}
:deep(.el-menu--collapse){
    margin-left: -10px;
}
:deep(.el-sub-menu__title:hover){
    background: #d8dddf!important;
}
.show_hidden{
    position: absolute;
    z-index: 999;
    bottom: 50px;
    left: 100%;
    transition: all .5s;
    svg{
        width: 30px;
        height: 30px;
    }
}
.show_hidden.active{
    transform: rotate(180deg);
}
</style>