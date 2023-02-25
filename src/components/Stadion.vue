<template id="stadion">
  <div class="container-fluid">
    <h2 class="mt-4">{{ $t("select") }}</h2>
  </div>
  <div class="stadium mt-5">
    <div class="topStadium d-flex justify-content-between">
      <router-link
        to="/reg"
        href=""
        class="topSector d-flex justify-content-center align-items-center text-white"
        v-for="(topSector, index) in 7"
      >
        <span>Sector {{ index + 1 }}</span>
      </router-link>
    </div>

    <div class="centerStadium d-flex justify-content-between">
      <div class="centerLeft d-flex flex-column-reverse justify-content-around">
        <router-link
          to=""
          class="leftSector d-flex justify-content-center align-items-center text-white"
          v-for="(leftSector, index) in 4"
        >
          <span>sector {{ index + 5 }}</span>
        </router-link>
      </div>

      <div class="rightLeft d-flex flex-column-reverse justify-content-around">
        <router-link
          to=""
          class="rightSector d-flex justify-content-center align-items-center text-white"
          v-for="(rightSector, index) in 4"
        >
          <span>sector {{ index + 8 }}</span>
        </router-link>
      </div>
    </div>

    <div class="bottomStadium d-flex justify-content-between flex-row-reverse">
      <router-link
        to=""
        class="bottomSector d-flex justify-content-center align-items-center text-white"
        v-for="(bottomSector, index) in 6"
      >
        <span>sector {{ index + 12 }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

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
.stadium {
  width: 80%;
  height: 80%;
  margin: auto;
  border-radius: 30px;
  border-radius: 100px;
  overflow: hidden;
  padding: 30px;
  font-family: "Mandali", sans-serif;
  // box-shadow:  0 0 60px rgb(237, 232, 232);;

  // top stadium
  .topStadium {
    width: 100%;
    height: 100px;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    overflow: hidden;
    .topSector {
      height: 100%;
      width: 15%;
      display: block;
      background-color: rgba(168, 154, 154, 0.655);
      border-radius: 20px;
      border-bottom-left-radius: 0px;
      -webkit-box-shadow: 0px 5px 10px 0px rgba(34, 60, 80, 0.2) inset;
      -moz-box-shadow: 0px 5px 10px 20px rgba(34, 60, 80, 0.2) inset;
      box-shadow: 0px 5px 10px 3px rgba(34, 60, 80, 0.2) inset;
      transition: 0.4s;
      // clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      transform-style: preserve-3d;
      transform: perspective(1000px) translateZ(20px);
      &:hover {
        background: rgb(125, 252, 178);
        box-shadow: inset 0 0 20px rgb(86, 172, 189);
        color: rgb(255, 255, 255) !important;
      }
      &:first-child {
        clip-path: none;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        span {
          transform: rotate(-40deg);
        }
      }


      &:nth-child(2) {
        // clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 0 100%, 0% 70%, 0 0);
        border-radius: 0px;
      }

      &:nth-child(6) {
        // clip-path: polygon(30% 0%, 100% 0, 100% 30%, 100% 70%, 100% 100%, 30% 100%, 0% 70%, 0% 30%);
        border-radius: 0px;
      }

      &:last-child {
        clip-path: none;
        border-radius: 0;
        span {
          transform: rotate(40deg);
        }
      }
    }
  }

  //  centerStadium
  .centerStadium {
    width: 100%;
    height: 600px;
    background-size: 75% 100%;
    background-image: url("http://yar-life.ru/static/upload/afisha/places/shinnik1000.jpg");
    // background-image: url('../assets/image_2023-02-17_15-40-25.png')  ;
    background-position: center;
    background-repeat: no-repeat;

    .centerLeft {
      height: 100%;
      width: 120px;
      .leftSector {
        width: 100%;
        height: 20%;
        background-color: rgba(255, 150, 45, 0.653);

        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        &:hover {
          background: rgb(125, 252, 178);
          box-shadow: inset 0 0 20px rgb(86, 172, 189);
          color: rgb(255, 255, 255) !important;
        }
        &:nth-child(1) {
          clip-path: polygon(0 0, 100% 0, 100% 79%, 0 100%) !important;
        }
      }
    }

    .rightLeft {
      height: 100%;
      width: 120px;

      .rightSector {
        width: 100%;
        height: 20%;
        background: rgb(125, 252, 178);
        box-shadow: inset 0 0 20px rgb(86, 172, 189);
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        &:hover {
          background: rgb(125, 252, 178);
          box-shadow: inset 0 0 20px rgb(86, 172, 189);
          color: rgb(255, 255, 255) !important;
        }
      }
    }
  }

  .bottomStadium {
    width: 100%;
    height: 100px;
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
    overflow: hidden;

    .bottomSector {
      height: 100%;
      width: 15%;
      border-radius: 20px;
      background-color: rgba(77, 169, 182, 0.729);
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      // clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      &:hover {
        background: rgb(125, 252, 178);
        box-shadow: inset 0 0 20px rgb(86, 172, 189);
        color: rgb(255, 255, 255) !important;
      }

      &:first-child {
        clip-path: none;
        span {
          transform: rotate(-40deg);
        }
      }

      &:last-child {
        clip-path: none;
        span {
          transform: rotate(40deg);
        }
      }
    }
  }
}

@import url("https://fonts.googleapis.com/css2?family=Mandali&display=swap");
</style>
