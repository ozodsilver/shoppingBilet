<template>
  <Navigation></Navigation>
  <a href="#"></a>
  <div class="container">
    <button
      @click="oneStepBack"
      class="btn mt-2 rounded-pill btn-dark bg-gradient"
    >
      <i class="fas fa-arrow-circle-left"></i>
    </button>
    <input type="text" style="visibility: hidden" ref="fake" />
    <h2 class="mt-5 text-muted">Ro'yxatdan o'tish</h2>

    <div class="row">
      <div class="col-12 col-md-12" v-if="!show">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12">
            <label for="form1" class="mt-3">Ism va Familiya</label>
            <input
              required
              type="text"
              class="form-control border border-secondary rounded-pill"
              id="form1"
              v-model="fullName"
              ref="Fname"
            />

            <div class="mt-3">
              <label for="form12">Karta raqamingizni kiriting</label>
              <input
                required
                type="number"
                id="form12"
                class="form-control border-secondary border rounded-pill"
                v-model="cardNumber"
              />
            </div>

            <div class="mt-3">
              <label for="form12">Amal qilish muddatini kiriting</label>
              <input
                required
                type="text"
                placeholder="MM/YY"
                id="form12"
                class="form-control w-50 border-secondary border rounded-pill"
                maxlength="5"
                ref="expires"
                v-model="expire"
                @input="checkInput"
              />
            </div>
          </div>

          <div class="col-lg-5 col-md-8 offset-0 col-11 m-auto">
            <div class="row justify-content-md-center">
              <div
                class="bg-dark bg-gradient rounded-3 mt-3 d-flex align-items-center m-auto ripple"
                id="bgHumo"
                style="height: 260px"
                data-mdb-ripple-color="light"
              >
                <div
                  class="d-flex flex-column justify-content-between"
                  style="height: 160px"
                >
                  <input
                    type="text"
                    disabled
                    :value="cardNumber"
                    class="form-control shadow-none bg-transparent border-0 text-white fs-3"
                    placeholder="860031294576767"
                  />
                  <div class="d-flex">
                    <input
                      id="form12"
                      type="text"
                      ref="disExpire"
                      :value="expire"
                      placeholder="MM/YY"
                      class="form-control w-50 text-white p-1 rounded-3 border bg-transparent"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-success mx-auto mt-3 w-75 d-flex justify-content-center align-items-center gap-3"
                @click.prevent="postTicket"
              >
                jo'natish <i class="fas fa-arrow-alt-circle-right"></i>
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
        </div>
      </div>

      <Transition name="bounce">
        <div
          class="col-12 mt-4 position-relative d-flex flex-column align-items-center justify-content-center"
          v-if="show"
        >
          <input
            ref="validate"
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

      <img :src="imgLink" alt="" class="img-fluid w-50 m-auto d-block" />

      <n-modal v-model:show="showModals" preset="dialog" title="Dialog"   >
        <template #header>
          <div>Diqqat!</div>
        </template>
        <div class="dialogModal">
          QR code Qurilmangizga muvaffaqiyatli yuklab olindi.
          <i class="far fa-check-circle text-success fs-6"></i> <br />
          Ushbu QR codedan faqat bir marotaba foydalanish mumkin
          <i class="fas fa-exclamation-circle text-warning"></i>
          <br />
          <span class="badge bg-success mt-3 fw-bold text-capitalize ">QR code ma'lumotlari</span> <br />

Joy band qilingan: <span class="badge bg-dark ">{{ secName }}</span>  dan<br>
Xarid amalga oshirilgan: <span class="badge bg-dark"> {{ NameFull }}</span> <br> tomonidan <br>



        </div>

        <template #action>
          <div></div>
        </template>
      </n-modal>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import { useCounterStore } from "../../stores/counter.js";
import { ref, onMounted, watch } from "vue";
import Navigation from "../Navigation.vue";
import axios from "axios";

let store = useCounterStore();
let cardNumber = ref("");
let show = ref(false);
store.increment().then((response) => {
  console.log(response);
});
let expires = ref("");

let Fname = ref("");
let expire = ref("");
let spin = ref(false);
let loadAccess = ref(false);
let hideCards = ref(true);
let fullName = ref("");
let cardToken = ref("");
let receiptId = ref("");
let qrCodeId = ref("");
let showModals = ref(false);
let down = ref("");
let qr = ref("");
let codes = ref("");
let imgLink = ref("");
let rote = useRouter();

let fake = ref("");
let validate = ref("");

let secName = ref("");
let NameFull = ref("");

onMounted(() => {
  fake.value.focus();
});

let showModal = ref(false);
let postTicket = () => {
  spin.value = true;

  if (fullName.value !== "" || expire.value !== "" || cardNumber.value !== "") {
    axios
      .post(`${window.base}api/Events/BuyTicket/${store.id}`, {
        fullName: fullName.value,
        phoneNumber: "",
        sector: store.secId,
        cardNumber: cardNumber.value.toString(),
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

let oneStepBack = () => {
  rote.go(-1);
};

let postCode = async () => {
  loadAccess.value = true;
  await axios
    .post(`${window.base}api/Events/Pay`, {
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
        showModals.value = true;

        // QR code info for modal
        secName.value = res.data.sectorName;
      NameFull.value = res.data.fullName;
       // QR code info for modal
        axios
          .get(`${window.base}api/Events/GenQr/${res.data.id}`)
          .then((el) => {
            console.log(el);
            imgLink.value = "data:image/png;base64," + el.data;
            let a = document.createElement("a");
            a.href = "data:image/png;base64," + el.data;
            a.setAttribute("download", "qr.png");
            a.click();
          });
      }
    })
    .catch((err) => {
      console.log(err);
      alert("yaroqsiz Kod");
      loadAccess.value = false;
    });
};

watch(cardNumber, (newVal) => {
  if (cardNumber.value.length >= 16) {
    expires.value.focus();
  }
});

let checkInput = () => {
  if (event.target.value.length == 2) {
    event.target.value = event.target.value + "/";
  }
};
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
}
#paycard {
  background-image: url("../../assets/paycard.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100px 200px !important;

  position: relative;

  object-fit: cover;
  font-family: "Righteous", cursive;
}
#bgHumo {
  background-image: url("../../assets/paycard.png") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center !important;
  object-fit: cover !important;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif !important;
}

::placeholder {
  color: rgb(221, 213, 213) !important;
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

.dialogModal{
  background-image: url('../../assets/forBack.png') !important;
   background-position: right 20px !important;
    background-size: contain !important;
    background-repeat: no-repeat;
}

@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
</style>
