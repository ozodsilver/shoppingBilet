<template>
  <Navigation></Navigation>
  <div class="container" style="height: 120vh">
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
          placeholder="+998 99 999 99 99"
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
          <button
            class="btn btn-success mt-3 w-75 d-flex justify-content-center align-items-center gap-3"
            @click="postTicket"
          >
            jo'natish
            <div class="spinner spinner-border fs-6" v-if="spin"></div>
          </button>

          <Transition name="bounce">
            <div
              class="col-12 mt-4 position-relative d-flex flex-column align-items-center justify-content-center"
              v-if="show"
            >
              <input
                type="text"
                class="form-control border w-50 mt-5"
                placeholder="sms kodni kiriting"
              />

              <button class="btn btn-info mt-3 float-end" @click="postCode">
                Tasdiqlash
              </button>
            </div>
          </Transition>

<img src="" ref="qrCode" alt="">
<a href="" ref="downlad"></a>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../../stores/counter.js";
import { ref, onMounted} from "vue";
import Navigation from "../Navigation.vue";
import axios from "axios";
import { usePDF } from 'vue3-pdfmake';

const pdf = usePDF();
let store = useCounterStore();
let cardNumber = ref("");
let show = ref(false);
store.increment().then((response) => {
  console.log(response);
});

const phone = ref("");
let fullName = ref("");
let expire = ref("");
let spin = ref(false);

let cardToken = ref("");
let receiptId = ref("");
let qrCodeId = ref('')
let qrCode = ref('')
let downlad = ref()
let postTicket = () => {
  spin.value = true;

  if (
    phone.value !== "" ||
    fullName.value !== "" ||
    expire.value !== "" ||
    cardNumber.value !== ""
  ) {
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
        if (res.data) {
          show.value = true;
          spin.value = false;
          cardToken.value = res.data.cardToken;
          receiptId.value = res.data.receiptId;
        }
      })
      .catch((err) => {
        alert("xatolik yuzaga keldi" + err);
        spin.value = false;
      });
  } else {
    alert("bo'sh ma'lumot maydoni mavjud");
    spin.value = false;
  }
};

console.log(store.secId);

let postCode = () => {
  axios
    .post(`https://bk.utickets.uz/api/Events/Pay`, {
      id: receiptId.value,
      token: cardToken.value,
      code: "666666",
    })
    .then((res) => {
    if(res.data){
      qrCodeId.value = res.data.id
      qrCode.value.src = `https://bk.utickets.uz/api/Events/GenQr/${qrCodeId.value}`
      downlad.value.innerHTML = 'QR codeni Yuklab olish'
      downlad.value.href = `https://bk.utickets.uz/api/Events/GenQr/${qrCodeId.value}`
      downlad.value.downlad = `https://bk.utickets.uz/api/Events/GenQr/${qrCodeId.value}`
      pdf.createPdf({}).download(`https://bk.utickets.uz/api/Events/GenQr/${qrCodeId.value}`)
    }
    });



};

onMounted(()=>{
console.log(  pdf.createPdf({}))
})

</script>

<style lang="scss" scoped>
h2,
label,
button {
  font-family: "Varela Round", sans-serif;
}

input[placeholder="860031294576767"] {
  letter-spacing: 3px;
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  margin-left: 20px;
}
#paycard {
  background-image: url("../../assets/paycard.png");
  background-size: cover;
  background-position: center;
  padding-top: 140px;
  object-fit: cover;
  font-family: "Rampart One", cursive;
}

::placeholder {
  color: rgb(168, 168, 168);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
</style>
