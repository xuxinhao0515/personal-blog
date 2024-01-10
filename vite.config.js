import { defineConfig } from 'vite'

//设置@别名需引入
import path from 'path'
//element-plus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {  // 这里就是需要配置resolve里的别名
      "@": path.join(__dirname, "./src"), // path记得引入
    }
  },
  server:{
    host:'0.0.0.0'
  }
})
