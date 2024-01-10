import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './common.less'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import MainContainer from '@/components/MainContainer.vue'
app.component('MainContainer', MainContainer)

app.use(router)
app.use(createPinia())
app.mount('#app')
