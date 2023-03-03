<template>
    <Navigation></Navigation>
    <div class="container">
<h2 class="mt-5 text-muted">Ro'yxatdan o'tish</h2>


<div>
<label for="form1" class="mt-3">Ism va Familiya</label>
<input type="text" class="form-control" id="form1" placeholder="ism va familiya">
<label for="form2" class="mt-3">Tel</label>
<vue-tel-input v-model="phone"   > </vue-tel-input>
<div  class="d-flex justify-content-end">
    <button class="btn btn-success mt-4">Yakunlash</button>
</div>
</div>



    </div>
</template>

<script setup>
import {ref} from 'vue'
import Navigation from '../Navigation.vue';
const phone = ref(null);

</script>

<style lang="scss" scoped>

</style>