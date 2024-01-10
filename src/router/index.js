import { createRouter, createWebHashHistory } from 'vue-router'

import common from './modules/common'
import home from './modules/home'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...common,
    ...home
  ]
})

export default router