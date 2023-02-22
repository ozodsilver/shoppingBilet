import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lang from './i18n/index.js'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(lang)
app.mount('#app')
