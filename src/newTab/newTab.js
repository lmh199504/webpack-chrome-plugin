import { createApp } from 'vue'
import App from './App.vue'
import router from '@newTab/router/index.js'
import '@newTab/static/styles/index.less'

const app = createApp(App)
app.use(router)

app.mount('#app')