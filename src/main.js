import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import base from "./baseUrl.js";


// global components
import Footer from "./components/Footer.vue";
// import Navigation from "./components/Navigations.vue";

import App from "./App.vue";
import router from "./router";
import lang from "./i18n/index.js";
import naive from "naive-ui";
import { PDFPlugin } from "vue3-pdfmake";


const app = createApp(App);
window.base = base;
// app.component("Navigation", Navigation);
app.component("Footer", Footer);
app.use(createPinia());
app.use(PDFPlugin);
app.use(router, axios);
app.use(naive);
app.use(lang);

app.mount("#app");
