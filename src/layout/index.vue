<template>
  <TopBar />
  <SideBar />
  <drawer-com></drawer-com>
  <section>
    <div :style="{ width: sidebar.opened ? '180px' : '64px', 'flex-shrink': 0 }"></div>
    <RouterView />
  </section>
</template>

<script setup>
import TopBar from './TopBar.vue'
import DrawerCom from '../components/drawerCom.vue';
import SideBar from './SideBar.vue'

import { useSidebar } from '@/stores/sidebar';
const sidebar = useSidebar()
</script>
<style lang="less" scoped>
section {
  display: flex;
}
</style>
