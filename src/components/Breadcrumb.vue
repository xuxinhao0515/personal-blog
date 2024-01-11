<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-if="systemNameFlag" @click="systemClick" style="fontsize: 14px; fontweight: bold">
            <router-link to="/">
                <slot name="system-name"></slot>
            </router-link>
        </el-breadcrumb-item>
        <transition-group name="breadcrumb">
            <template v-for="(item, index) in levelList" :key="item.path">
                <el-breadcrumb-item v-if="item.meta.title">
                    <span class="no-redirect">{{ item.meta.title }}</span>
                </el-breadcrumb-item>
            </template>
        </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useSidebar } from '../stores/sidebar';
import { useRoute,useRouter } from 'vue-router'

defineProps({
  systemNameFlag: {
    default: false
  }
})



const sidebar = useSidebar()

const route = useRoute()
const router = useRouter()

function systemClick() {
  router.push('/')
}
let levelList = ref([])
function getBreadcrumb() {
  let matched = route.matched.filter((item) => item.name)
  levelList.value = matched
}

watch(route, () => {
  getBreadcrumb()
})

onMounted(() => {
  getBreadcrumb()
})
console.log(levelList.value)
</script>
<style scoped lang="less">
.app-breadcrumb.el-breadcrumb {
  font-size: 14px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
.el-breadcrumb__inner a:hover {
  color: var(--themeColor);
}
</style>