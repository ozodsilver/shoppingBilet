<template>
  <RouterView></RouterView>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  /* background: rgb(58,180,148) !important;
background: linear-gradient(215deg, rgba(58,180,148,0.06486344537815125) 0%, rgba(69,196,252,0.053658963585434205) 100%) !important; */
}

/* width */
::-webkit-scrollbar {
  width: 10px;
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
</style>
