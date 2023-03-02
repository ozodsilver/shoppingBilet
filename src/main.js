import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import base from './baseUrl.js'


// global components
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'

import App from './App.vue'
import router from './router'
import lang from './i18n/index.js'
import naive from 'naive-ui'


const app = createApp(App)
window.base = base
app.component('Navigation', Navigation)
app.component('Footer', Footer)
app.use(createPinia())
app.use(router,axios)
app.use(naive)
app.use(lang)

app.mount('#app')
