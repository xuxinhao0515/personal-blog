import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useSidebar = defineStore('Sidebar', {
  state: () => {
    return {
        opened: true,
        menuList: []
    }
  },
  actions: {
    openSidebar() {
        this.opened = true
    },
    closeSidebar() {
        this.opened = false
    },
    toggleSidebar() {
        this.opened = !this.opened
    },
    setMenuList(){
      const router = useRouter()
      this.menuList = router.options.routes
      console.log(this.menuList)
    }
  }
})