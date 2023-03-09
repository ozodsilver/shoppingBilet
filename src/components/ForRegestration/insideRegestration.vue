<template>
  <Navigation></Navigation>
  <div class="container" style="height: 120vh">
    <h2 class="mt-5 text-muted">Ro'yxatdan o'tish</h2>

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2" v-if="!show">
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
            class="col-10 col-md-12 border mx-auto mt-5 rounded-3"
            id="paycard"
            style="height: 260px; width: 440px"
          >
            <input
              type="text"
              v-model="cardNumber"
              class="form-control shadow-none p-1 bg-transparent border-0 text-white fs-3"
              placeholder="860031294576767"
            />

            <div class="d-flex">
              <input
                type="text"
                placeholder="Kartaning muddati 03/99"
                class="form-control w-50 rounded-3"
                v-model="expire"
                ref="expires"
              />
            </div>
          </div>
          <button
            class="btn btn-success mx-auto mt-3 w-75 d-flex justify-content-center align-items-center gap-3"
            @click="postTicket"
          >
            jo'natish
            <div class="spinner spinner-border fs-6" v-if="spin"></div>
          </button>

          <n-modal v-model:show="showModal">
            <n-card
              style="
                width: 600px;
                background-color: #20b2aa;
                color: white !important;
              "
              title=" "
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
            >
              <template #header-extra>
                <span class="text-white fs-4">
                  Kiritilgan telefon raqamiga sms kod yuborildi! </span
                ><i class="fas fa-check-double text-white"></i>
              </template>
            </n-card>
          </n-modal>
        </div>
      </div>

      <Transition name="bounce">
        <div
          class="col-12 mt-4 position-relative d-flex flex-column align-items-center justify-content-center"
          v-if="show"
        >
          <input
            v-model="codes"
            type="text"
            class="form-control border w-50 mt-5"
            placeholder="sms kodni kiriting"
          />

          <a
            href="hello.txt"
            download
            ref="down"
            class="btn btn-info mt-3 float-end d-flex align-items-center gap-2"
            @click.prevent="postCode"
          >
            Tasdiqlash
            <div
              class="spinner spinner-border text-white"
              v-if="loadAccess"
            ></div>
          </a>
        </div>
      </Transition>

     
       <img :src="imgLink" alt="" >
   
       <div ref = 'qr'>
       
       </div>
  
    </div>
  </div>
</template>

<script setup>
import html2canvas from 'html2canvas';
import { useCounterStore } from "../../stores/counter.js";
import { ref, onMounted, watch } from "vue";
import Navigation from "../Navigation.vue";
import axios from "axios";
import { usePDF } from "vue3-pdfmake";

const pdf = usePDF();
let imageData = ref(null)
let newData = ref(null)

let store = useCounterStore();
let cardNumber = ref("");
let show = ref(false);
store.increment().then((response) => {
  console.log(response);
});
let expires = ref("");

const phone = ref("");
let fullName = ref("");
let expire = ref("");
let spin = ref(false);
let loadAccess = ref(false);
let hideCards = ref(true);

let cardToken = ref("");
let receiptId = ref("");
let qrCodeId = ref("");
let qrCode = ref("");
let down = ref("");
let qr = ref("");
let codes = ref("");
let imgLink = ref("");

let pdfs = ref('')




let showModal = ref(false);
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
          setTimeout(() => {
            showModal.value = true;
          }, 20);

          setTimeout(() => {
            showModal.value = false;
          }, 2000);
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

let postCode = async () => {
 
  loadAccess.value = true;
  await axios
    .post(`https://bk.utickets.uz/api/Events/Pay`, {
      id: receiptId.value,
      token: cardToken.value,
      code: codes.value,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        hideCards.value = false;
        loadAccess.value = false;
        qrCodeId.value = res.data.id;
        console.log(`https://bk.utickets.uz/api/Events/GenQr/${res.data.id}`);
        imgLink.value = `https://bk.utickets.uz/api/Events/GenQr/${res.data.id}`;
   let resUrl = `https://bk.utickets.uz/api/Events/GenQr/${res.data.id}`
        const url = window.URL.createObjectURL(new Blob([resUrl]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.png"); //or any other extension
        qr.value.appendChild(link);
       setTimeout(() => {
        
        link.click();
        window.print(resUrl)
       }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      alert("yaroqsiz Kod");
      loadAccess.value = false;
    });
};

watch(cardNumber, (newVal) => {
  if (cardNumber.value.length == 16) {
    expires.value.focus();
  }
});
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
  font-family: "Righteous", cursive;
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

@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
</style>
