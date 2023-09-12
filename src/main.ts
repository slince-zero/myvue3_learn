import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// 需要注意的是，样式文件需要单独引入。
import 'element-plus/dist/index.css'
import './styles/reset.css'
import './styles/element/index.scss' // 没有生效
// import './styles/common.scss'
import router from './router/router'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
const app = createApp(App)

// 引入 icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(ElementPlus).use(createPinia).mount('#app')
