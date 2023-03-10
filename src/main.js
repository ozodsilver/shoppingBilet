import { createApp } from "vue";
import { createPinia } from "pinia";
import VueTelInput from "vue3-tel-input";
import axios from "axios";
import base from "./baseUrl.js";
import "vue3-tel-input/dist/vue3-tel-input.css";

// global components
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";

import App from "./App.vue";
import router from "./router";
import lang from "./i18n/index.js";
import naive from "naive-ui";
import { PDFPlugin } from "vue3-pdfmake";

const VueTelInputOptions = {
  mode: "international",
  onlyCountries: [],
};

const app = createApp(App);
window.base = base;
app.component("Navigation", Navigation);
app.component("Footer", Footer);
app.use(createPinia());
app.use(PDFPlugin);
app.use(router, axios);
app.use(naive);
app.use(lang);
app.use(VueTelInput, VueTelInputOptions);
app.mount("#app");
