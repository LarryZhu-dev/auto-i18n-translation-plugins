/*
 * @Date: 2025-02-10 18:58:20
 * @LastEditors: xiaoshan
 * @LastEditTime: 2025-02-11 10:32:11
 * @FilePath: /i18n_translation_vite/example/vue3/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import './LangInit/index'
import router from './router'
import './styles/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
// element-tag-marker: qwz4q121
