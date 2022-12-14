import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/reset.css'
import './assets/main.css'
import 'vditor/dist/index.css';

import App from './App.vue'
import router from './router'
import naive from 'naive-ui'

const app = createApp(App)

app.use(naive)
app.use(createPinia())
app.use(router)


app.mount('#app')
