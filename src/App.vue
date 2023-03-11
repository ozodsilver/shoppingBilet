<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition>
        <Suspense>
          <component :is="Component"></component>

          <!-- <template #fallback>
            <div class="spinner spinner-border"></div>
          </template> -->
        </Suspense>
      </Transition>
    </template>
  </RouterView>

  <!-- <router-view></router-view> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  cursor: url("./assets/cur.png") 1 0, auto;
  caret-color: rgb(33, 15, 231);
}

path:hover {
  cursor: pointer;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(136, 136, 136);
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
svg {
  transition: 0.2s;
}

.cls-4:nth-child(9) {
  fill: rgb(107, 107, 107) !important;
}

#p4 {
  fill: rgb(244, 153, 62) !important;
}
#p5 {
  fill: rgb(244, 153, 62) !important;
}

.cls-4 {
  opacity: 0.6;
  fill: rgb(79, 218, 167) !important;
  filter: drop-shadow(3px 5px 15px rgb(148, 145, 145));
  stroke: rgb(255, 255, 255);
  transition: 0.2s;
}

.cls-4:hover {
  fill: rgb(75, 23, 166) !important;
  transform: translate(0, -8px);
}

text:hover .cls-4{
  fill: rgb(75, 23, 166) !important;
  transform: translate(0, -8px) !important;
}

svg:hover path {
  transition: 0.2s;
  stroke-width: 6;
}

@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
</style>
