<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition>
        <Suspense>
          <component :is="Component"></component>

          <template #fallback>
            <div class="spinner spinner-border"></div>
          </template>
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
}

html,
body {
  height: 100%;
  /* background: rgb(58,180,148) !important;
background: linear-gradient(215deg, rgba(58,180,148,0.06486344537815125) 0%, rgba(69,196,252,0.053658963585434205) 100%) !important; */
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

.cls-4 {
  opacity: 0.6;
  fill: rgb(154, 154, 154);
  border: solid;
  filter: drop-shadow(3px 5px 5px rgb(119, 119, 119));
  stroke: rgb(0, 0, 0);
}


.cls-4:hover {
  fill: blue;
  transform: translate(0, -8px);
}


svg:hover path {
  fill: rgb(35, 157, 244);
  transition: 0.4s;
}

textPath {
  fill: rgb(120, 113, 113);
}

svg:hover textPath {
  fill: white;
}

@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
</style>
