<template>
  <div>
    <nav class="navbar navbar-expand-lg position-relative">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarLeftAlignExample"
          aria-controls="navbarLeftAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active text-dark fs-5" aria-current="page" 
                >Home</router-link
              >
            </li>
          </ul>
<li>
  <router-link to = '/Map'><i class="fas fa-map-marked-alt fa-2x " style="color:cornflowerblue"></i></router-link>
</li>
          <li class="mx-4">
            <span>{{ $t("navigation.language") }}</span
            >:
          </li>
          <li class="d-flex gap-4" style="height: 20px; margin-right: 30px">
            <img
              :src="lang.image"
              alt=""
              class="rounded"
              style="
                transition: 0.4s;
                cursor: pointer;
                width: 28px;
                height: 20px;
              "
              :class="{ actives: lang.id == activeId }"
              @click="ru(lang.lan, lang.id)"
              v-for="lang in languages"
            />
          </li>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import lang from "../i18n/index.js";
import {useRouter } from 'vue-router'


let router = useRouter()
let langu = ref(lang);


let BackOneStep = ()=>{
  router.push({name:'Home'})
}


let selectedVal = ref("uz");

let activeId = ref(0);

let languages = ref([
  {
    id: 1,
    image: new URL("../assets/uzb.jpg", import.meta.url),
    lan: "uz",
  },
  {
    id: 2,
    image: new URL("../assets/rus.jpg", import.meta.url),
    lan: "ru",
  },
  {
    id: 3,
    image: new URL("../assets/en.jpg", import.meta.url),
    lan: "en",
  },
]);

let ru = (lang, id) => {
  if (lang == "uz") {
    console.log(lang);
    langu.value.global.locale = "uz";
    activeId.value = id;
    console.log(id);
  }

  if (lang == "ru") {
    langu.value.global.locale = "ru";
    activeId.value = id;
    console.log(lang);
  }

  if (lang == "en") {
    langu.value.global.locale = "en";
    activeId.value = id;
    console.log(lang);
  }
};
</script>

<style lang="scss" scoped>
nav {
  border-bottom: 1px solid rgb(255, 255, 255);
  list-style: none;
  -webkit-box-shadow: 0px 5px 10px 1px rgba(34, 60, 80, 0.1) ;
-moz-box-shadow: 0px 5px 10px 1px rgba(34, 60, 80, 0.2) ;
box-shadow: 0px 5px 10px 1px rgba(34, 60, 80, 0.2) ;
background: rgb(230, 226, 226);
background: linear-gradient(215deg, rgba(255, 253, 253, 0.837) 0%, rgba(247, 244, 244, 0.3) 61%);
  font-family: "Josefin Sans", sans-serif !important;
  span {
    font-family: "Josefin Sans", sans-serif !important;
  }
}

.actives {
  transition: 0.4s;
  background: transparent;
  transform: scale(1.5);
}

@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap");
</style>
