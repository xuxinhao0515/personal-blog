import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './common.less'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//公共组件
import MainContainer from '@/components/MainContainer.vue'
import SvgIcons from '@/components/SvgIcons.vue'
app.component('MainContainer', MainContainer)
app.component('SvgIcon', SvgIcons)

app.use(router)
app.use(createPinia())
app.mount('#app')
