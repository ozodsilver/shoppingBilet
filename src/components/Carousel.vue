<template>
  <div class="rounded-2 np mt-4" >
    <Carousel :itemsToShow="2" :wrapAround="true" :transition="500">
    <Slide v-for="image in img" :key="image.id">
   <img :src="`https://test.utickets.uz/api/Images/${image.id}`" alt="" class="img-fluid  " style="border-radius: 30px 0px;" >

    </Slide>

   
  </Carousel>
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import { onMounted,ref } from 'vue';
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Pagination,
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
    let img = ref([])

    onMounted(()=>{
      axios.get(`${window.base}api/PhotoWheel`).then(el =>{
    console.log(el.data);
    el.data.forEach(el =>{
      img.value.push(el)
    })
  })
    })


    return { img };
  },
});
</script>

<style>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.7);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.85);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.85);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
