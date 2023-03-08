<template id="stadion">
  <div class="container">
    <h2 class="mt-5">{{ $t("select") }}</h2>
  
  </div>

  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 50vh"
    v-if="load"
  >
    <div class="spinner"></div>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-4 mt-0" v-for="info in infos">
        <div
          class="card border p-4 py-4  mt-3 pb-5 border-light shadow-lg position-relative"
        >
          <div
            class="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              v-bind:src="imageLink + info.imageId"
              class="m-auto d-block bg-gradient rounded-3"
              style="object-fit: fill; height: 200px"
            />

            <button
              class="btn btn-dark bg-gradient border-0 d-flex justify-content-center align-items-center text-capitalize text-white position-absolute"
              style="top: 0; left: 0"
            >
              {{ new Date(info.startsAt).toDateString() }}
            </button>

            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.15)"
              ></div>
            </a>
          </div>
          <div class="card-body p-0">
            <n-gradient-text
              :size="24"
              :gradient="{
                from: 'rgb(85, 85, 85)',
                to: 'rgb(170, 170, 170)',
              }"
              class="my-3"
            >
              {{ info.name }}
            </n-gradient-text>

            <router-link to="/reg">
              <button
                class="w-100 m-auto d-block shadow bg-dark bg-gradient text-white rounded border-0 text-transform-lowercase"
                @click="addId(info.id)"
              >
              
                Joy band qilish
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="cart"
                >
                  <circle fill="white" cx="7.3" cy="17.3" r="1.4"></circle>
                  <circle fill="white" cx="13.3" cy="17.3" r="1.4"></circle>
                  <polyline
                    fill="white"
                    stroke="#fff"
                    points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"
                  ></polyline>
                </svg>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, provide, onMounted, reactive } from "vue";
import { useCounterStore } from "../stores/counter.js";

let val = ref(true);
let infos = reactive([]);
let imageLink = ref(`${window.base}api/Images/`);
let load = ref(true);
let store = useCounterStore();

// methods
const addId = (id) => {
  store.id = id;
};

onMounted(() => {
  axios
    .get(`${window.base}api/Events/`, {
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
    })
    .then((res) => {
      console.log(res);

      res.data.forEach((el) => {
        infos.push(el);
      });

      load.value = false;
    });
});

let sendInfo = () => {
  provide("message", val);
};
</script>

<style lang="scss" scoped>
#stadion {
  background: rgb(58, 180, 148);
  background: linear-gradient(
    215deg,
    rgba(58, 180, 148, 0.06486344537815125) 0%,
    rgba(69, 196, 252, 0.053658963585434205) 100%
  );
  font-family: "Mandali", sans-serif !important;


}
.card{
  overflow: hidden;
}



button {
  height: 2em;
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
  border: 2px solid #016dd9;
  outline: none;
  color: #016dd9;
  font-size: 17px;
  clip-path: polygon(
    100% 0,
    98% 26%,
    100% 51%,
    98% 77%,
    100% 100%,
    0 99%,
    0 100%,
    2% 51%,
    0 0
  );
}

button:hover {
  background: #016dd9;
  color: #ffffff;
  animation: squeeze3124 0.9s both;
}

@keyframes squeeze3124 {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
/* Normal Usage */
.spinner:before {
  transform: rotateX(60deg) rotateY(45deg) rotateZ(45deg);
  animation: 750ms rotateBefore infinite linear reverse;
}

.spinner:after {
  transform: rotateX(240deg) rotateY(45deg) rotateZ(45deg);
  animation: 750ms rotateAfter infinite linear;
}

.spinner:before,
.spinner:after {
  box-sizing: border-box;
  content: "";
  display: block;
  position: absolute;
  margin-top: -5em;
  margin-left: -5em;
  width: 10em;
  height: 10em;
  transform-style: preserve-3d;
  transform-origin: 50%;
  transform: rotateY(50%);
  perspective-origin: 50% 50%;
  perspective: 340px;
  background-size: 10em 10em;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2NnB4IiBoZWlnaHQ9IjI5N3B4IiB2aWV3Qm94PSIwIDAgMjY2IDI5NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8dGl0bGU+c3Bpbm5lcjwvdGl0bGU+CiAgICA8ZGVzY3JpcHRpb24+Q3JlYXRlZCB3aXRoIFNrZXRjaCAoaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoKTwvZGVzY3JpcHRpb24+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8cGF0aCBkPSJNMTcxLjUwNzgxMywzLjI1MDAwMDM4IEMyMjYuMjA4MTgzLDEyLjg1NzcxMTEgMjk3LjExMjcyMiw3MS40OTEyODIzIDI1MC44OTU1OTksMTA4LjQxMDE1NSBDMjE2LjU4MjAyNCwxMzUuODIwMzEgMTg2LjUyODQwNSw5Ny4wNjI0OTY0IDE1Ni44MDA3NzQsODUuNzczNDM0NiBDMTI3LjA3MzE0Myw3NC40ODQzNzIxIDc2Ljg4ODQ2MzIsODQuMjE2MTQ2MiA2MC4xMjg5MDY1LDEwOC40MTAxNTMgQy0xNS45ODA0Njg1LDIxOC4yODEyNDcgMTQ1LjI3NzM0NCwyOTYuNjY3OTY4IDE0NS4yNzczNDQsMjk2LjY2Nzk2OCBDMTQ1LjI3NzM0NCwyOTYuNjY3OTY4IC0yNS40NDkyMTg3LDI1Ny4yNDIxOTggMy4zOTg0Mzc1LDEwOC40MTAxNTUgQzE2LjMwNzA2NjEsNDEuODExNDE3NCA4NC43Mjc1ODI5LC0xMS45OTIyOTg1IDE3MS41MDc4MTMsMy4yNTAwMDAzOCBaIiBpZD0iUGF0aC0xIiBmaWxsPSIjMDAwMDAwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==);
}
/* sitNSpin.less */
@keyframes rotateBefore {
  from {
    transform: rotateX(60deg) rotateY(45deg) rotateZ(0deg);
  }

  to {
    transform: rotateX(60deg) rotateY(45deg) rotateZ(-360deg);
  }
}

@keyframes rotateAfter {
  from {
    transform: rotateX(240deg) rotateY(45deg) rotateZ(0deg);
  }

  to {
    transform: rotateX(240deg) rotateY(45deg) rotateZ(360deg);
  }
}

@import url("https://fonts.googleapis.com/css2?family=Mandali&display=swap");
</style>
