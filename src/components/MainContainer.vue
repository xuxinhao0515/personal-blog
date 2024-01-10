<template>
    <main
      :style="{
        width: sidebar.opened ? 'calc(100% - 180px)' : 'calc(100% - 64px)',
        'flex-shrink': 0,
        'min-width': props.minWidth
      }">
      <!-- 内容头部区域 -->
      <div class="container-title" v-if="!props.hiddenTittle">
        <slot name="header">
            title
          <!-- <MainTitle :text="route.meta.title" /> -->
        </slot>
        <!-- 按钮区域 -->
        <div>
          <slot name="handle"></slot>
        </div>
      </div>
      <!-- tab区域 -->
      <div class="tabs-warp">
        <slot name="tabs"></slot>
      </div>
      <!-- 主要内容区域 -->
      <div class="container-content">
        content
        <slot></slot>
      </div>
    </main>
  </template>
  
  <script setup>
//   import MainTitle from '@/components/MainTitle/MainTitle.vue'
//   import { useRoute } from 'vue-router'
  import { useSidebar } from '@/stores/sidebar.js'
  
  const props = defineProps(['hiddenTittle', 'minWidth'])
  
  const sidebar = useSidebar()
//   const route = useRoute()
  </script>
  <style lang="less" scoped>
  main {
    background-color: rgb(255, 255, 255);
    background-clip: content-box;
    padding: 20px 10px 10px 10px;
    min-height: calc(100vh - 78px);
  }
  
  .container-title {
    height: 52px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eef0f5;
    padding-left: 16px;
    padding-right: 32px;
    justify-content: space-between;
    .right {
      display: flex;
    }
  }
  
  .tabs-warp {
    padding-left: 16px;
    padding-right: 32px;
  }
  
  .container-content {
    padding: 20px 32px 20px 32px;
  }
  </style>
  