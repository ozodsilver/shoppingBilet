<template>
  <Navigation></Navigation>
  <div class="container">
    <h2 class="mt-5 text-muted">Ro'yxatdan o'tish</h2>

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <label for="form1" class="mt-3">Ism va Familiya</label>
        <input
          type="text"
          class="form-control"
          id="form1"
          placeholder="ism va familiya"
          v-model="fullName"
        />
        <label for="form2" class="mt-3">Tel</label>
        <input
          type="text"
          class="form-control tel"
          placeholder="phone number"
          v-model="phone"
        />

        <div class="row justify-content-md-center">
          <div
            class="col-10 col-md-12 border mt-5 rounded-3"
            id="paycard"
            style="height: 270px; width: 450px"
          >
            <input
              type="text"
              v-model="cardNumber"
              class="form-control shadow-none p-1 bg-transparent border-0 text-white fs-2"
              placeholder="860031294576767"
            />

            <div class="d-flex">
              <input
                type="text"
                placeholder="expire date"
                class="form-control w-25 rounded-3"
                v-model="expire"
              />
            </div>
          </div>

          <div
            class="col-12 mt-4 position-relative d-flex flex-column align-items-center justify-content-center"
          >
           
            <button class="btn btn-success mt-3 w-100" @click="postTicket">jo'natish</button>
            <input
              type="text"
              class="form-control border w-50 mt-5"
              placeholder="sms kodni kiriting"
            />

            <button class="btn btn-info mt-3 float-end">Tasdiqlash</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../../stores/counter.js";
import { ref } from "vue";
import Navigation from "../Navigation.vue";
import axios from "axios";

let store = useCounterStore();
let cardNumber = ref("");

store.increment().then((response) => {
  console.log(response);
});

const phone = ref("");
let fullName = ref("");
let expire = ref("");

let postTicket = () => {
  axios
    .post(`https://bk.utickets.uz/api/Events/BuyTicket/${store.id}`, {
      fullName: fullName.value,
      phoneNumber: phone.value,
      sector: store.secId,
      cardNumber: cardNumber.value,
      expire: expire.value,
    })
    .then((res) => {
      console.log(res);
      if(res.data){
        alert("telefon raqamingizga")
      }
    });
};

console.log(store.secId);
</script>

<style lang="scss" scoped>
#paycard {
  background-image: url("../../assets/paycard.png");
  background-size: cover;
  background-position: center;
  padding-top: 140px;
  object-fit: cover;
  font-family: "Righteous", cursive;
}

::placeholder {
  color: rgb(205, 201, 201);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
</style>
