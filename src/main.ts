import { createApp } from "vue"
import ElementPlus from "element-plus"
// 需要注意的是，样式文件需要单独引入。
import "element-plus/dist/index.css"
import router from "./router/router"
import "./style.css"
import { createPinia } from "pinia"
import App from "./App.vue"

const app = createApp(App)

app
  .use(router)
  .use(ElementPlus)
  .use(createPinia)
  .mount("#app")


