import { createApp } from 'vue'
import { createPinia } from 'pinia'


// global components
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'

import App from './App.vue'
import router from './router'
import lang from './i18n/index.js'
import naive from 'naive-ui'


const app = createApp(App)
app.component('Navigation', Navigation)
app.component('Footer', Footer)
app.use(createPinia())
app.use(router)
app.use(naive)
app.use(lang)
app.mount('#app')
