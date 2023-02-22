<template>
  <div>
    <nav class="navbar navbar-expand-lg  position-relative">
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
              <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>

         
          </ul>
             <li class="d-flex gap-4" style="height:20px; margin-right: 30px;">
              <img :src="lang.image" alt="" style="transition: 0.6s; cursor:pointer"  :class="{actives: (lang.id == activeId)}"  @click="ru(lang.lan, lang.id)" v-for="lang  in languages">
                           
              
           <!-- <select name="" multiple id="" class="form-select border-0 shadow-inner " v-model = 'selectedVal'  style="width:150px; outline:none">
            <option value="uz" selected>Uz 	   </option>
            <option value="ru">Ru </option>
            <option value="en">En  </option>
           </select> -->
           
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
import  {ref} from 'vue'
import lang from '../i18n/index.js'

let langu = ref(lang)
let selectedVal = ref('uz')

let activeId = ref(0)

let languages = ref([
  {
    id:1,
    image:new URL('../assets/uzb.png', import.meta.url),
    lan:'uz'
  },
  {
    id:2,
    image:new URL('../assets/rus.png', import.meta.url),
    lan:'ru'
  },
  {
    id:3,
    image:new URL('../assets/en.png', import.meta.url),
    lan:'en'
  }
])

let ru = (lang, id)=>{
if(lang == 'uz' ){
  console.log(lang);
 langu.value.global.locale = 'uz'
 activeId.value = id
 console.log(id);

}

 if(lang == 'ru'){
 langu.value.global.locale = 'ru'
 activeId.value = id
 console.log(lang);

}

 if(lang == 'en'){
 langu.value.global.locale = 'en'
 activeId.value = id
 console.log(lang);
 
}


}
</script>

<style lang="scss" scoped>
nav{
  list-style: none;
  background: rgb(131,58,180) !important;
background: linear-gradient(215deg, rgba(131,58,180,0.47942927170868344) 0%, rgba(69,196,252,0.4906337535014006) 100%) !important;
}

.actives{
  transition: 0.6s;
  border-radius: 20px;
  background: transparent;
transform: scale(2.3);
}
</style>
