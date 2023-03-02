<template>
  <div class="rounded-2 np mt-4" >
    <Carousel
      id="gallery"
      :items-to-show="2"
      v-model="currentSlide"
      :autoplay="2000"
      :wrap-around="true"
    >
      <Slide v-for="image in images" :key="image">
        <div class="carousel__item">
          <img
            :src="image.image"
            alt=""
            class="rounded-5 img-fluid"
          
          />
        </div>
      </Slide>
    </Carousel>

    <div class="container-fluid">
      <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
        class="mt-3"
      >
        <Slide v-for="(slide, index) in images" :key="slide">
          <div class="carousel__item" @click="slideTo(index)">
            <img class="w-75 rounded-4" :src="slide.image" alt="" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },

  setup() {
    let images = [
      {
        id: 0,
        image: new URL(
          "../assets/51uNA4RmHKrmfM3UxW14TFHGmAd15B79.png",
          import.meta.url
        ).href,
      },
      {
        id: 1,
        image: new URL(
          "../assets/fadFC2C0PNifwHU8JsYWcv7pJUVce5ej.png",
          import.meta.url
        ).href,
      },
      {
        id: 2,
        image: new URL(
          "../assets/kLnBxAyZJXIaGzrtm51a1JbTSGOn0zDI.png",
          import.meta.url
        ).href,
      },
    ];
    return { images };
  },
});
</script>

<style>
.carousel__item {
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
  color: rgb(0, 0, 0) !important;
}
</style>
