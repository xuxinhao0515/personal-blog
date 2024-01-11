<template>
    <header class="topbar" :style="{width : sidebar.opened ? 'calc(100% - 180px)' :'calc(100% - 64px)'}">
        <Breadcrumb :systemNameFlag="systemName ? true : false">
            <template #system-name>
                <span>{{ systemName }}</span>
            </template>
        </Breadcrumb>
    </header>
    <div style="height: 54px"></div>
</template>
<script setup>
import { useSidebar } from '../stores/sidebar';
import Breadcrumb from '../components/Breadcrumb.vue';

const sidebar = useSidebar()

defineProps({
  openNotification: {
    default: false
  },
  systemName: {
    default: '系统默认名称'
  }
})

</script>
<style scoped lang="less">
.topbar{
    background: #fff;
    position: fixed;
    z-index: 1999;
    top: 0;
    right: 0;
    padding: 0 30px 0 16px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.13);
}
</style>