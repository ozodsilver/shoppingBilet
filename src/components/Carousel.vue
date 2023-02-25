<template>
<div class="container-fluid rounded-2">
  <Carousel class="mt-4 " :autoplay = "4000" :wrap-around="true">
    <Slide v-for="slide in images" :key="slide.id"  >
      <div class="carousel__item">
        <img :src="slide.image" alt="" class="rounded-3 border-0">
        </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel></div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup(){
    let images = [
      {
        id:0,
        image: new URL('../assets/51uNA4RmHKrmfM3UxW14TFHGmAd15B79.png', import.meta.url).href
      },
      {
        id:1,
        image: new URL('../assets/fadFC2C0PNifwHU8JsYWcv7pJUVce5ej.png', import.meta.url).href
      },
      {
        id:2,
        image: new URL('../assets/kLnBxAyZJXIaGzrtm51a1JbTSGOn0zDI.png', import.meta.url).href
      }
    ]
    return {images}
  }
})
</script>

<style>
.carousel__item {
  min-height: 300px;
  width: 100%;

  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: white !important;
  /* border: 5px solid white; */
}
</style>