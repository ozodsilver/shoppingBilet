
<template>

<Suspense>
   <template #default>
 <RouterView></RouterView>
</template>
 <template #fallback>
    Loading...
  </template>
</Suspense>

</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
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

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>
