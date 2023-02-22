<template id = 'stadion'>
  <div class="container-fluid">
    <h2 class="mt-4">{{ $t("select") }}</h2>
  </div>
  <div class="stadium mt-5">
    <div class="topStadium d-flex justify-content-between">
      <router-link
    
        to=""
        href=""
        class="topSector d-flex justify-content-center align-items-center text-white"
        v-for="(topSector, index) in 7"
      >
        <span>Sector {{ index + 1 }}</span>
      </router-link>
    </div>

    <div class="centerStadium d-flex justify-content-between flex-row-reverse">
      <div class="centerLeft d-flex flex-column-reverse justify-content-around">
        <router-link to="" class="leftSector d-flex justify-content-center align-items-center text-white" v-for="(leftSector,index) in 4">
        <span>sector {{ index +5 }}</span>
        </router-link>
      </div>

      <div class="rightLeft d-flex flex-column-reverse justify-content-around">
        <router-link to="" class="rightSector d-flex justify-content-center align-items-center text-white" v-for="(rightSector,index) in 4">
        
          <span>sector {{ index+8 }}</span>
        </router-link>
      </div>
    </div>

    <div class="bottomStadium d-flex justify-content-between flex-row-reverse">
      <router-link to="" class="bottomSector d-flex justify-content-center align-items-center text-white" v-for="(bottomSector, index) in 6">
        <span>sector {{ index+12 }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>

#stadion{
  background: rgb(58,180,148);
background: linear-gradient(215deg, rgba(58,180,148,0.06486344537815125) 0%, rgba(69,196,252,0.053658963585434205) 100%);
}
.stadium {
  width: 70%;
  height: 80%;
  margin: auto;
  border-radius: 30px;
  border-radius: 100px;
  overflow: hidden;
  // background: #e5fff6;
  // box-shadow:  0 0 300px rgb(179, 179, 179);
  padding: 30px;

  // top stadium
  .topStadium {
    width: 100%;
    height: 100px;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    overflow: hidden;
    .topSector {
      height: 100%;
      width: 12%;
      display: block;
      background-color: rgb(185, 185, 185);
      border-radius: 20px;
      border-bottom-left-radius: 0px;
      -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      transition: 0.4s;

      &:hover {
        background: rgb(125, 252, 178);
        box-shadow: inset 0 0 20px rgb(86, 172, 189);
        color: rgb(255, 255, 255) !important;
      }
      &:first-child {
        clip-path: none;
        span{
          transform: rotate(-40deg);
        }
      }

      &:last-child {
        clip-path: none;
        span{
          transform: rotate(40deg);
        }
      }

    
    }
  }

  //  centerStadium
  .centerStadium {
    width: 100%;
    height: 600px;
    background-size: 70% 95%;
    background-image: url("http://yar-life.ru/static/upload/afisha/places/shinnik1000.jpg");
    background-position: center;
    background-repeat: no-repeat;
    perspective: 500px;
    transform-style: preserve-3d;

    .centerLeft {
      height: 100%;
      width: 120px;
      .leftSector {
        width: 100%;
        height: 20%;
        background-color: rgb(185, 185, 185);
        border-radius: 20px;
        border-top-left-radius: 0px;
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

    .rightLeft {
      height: 100%;
      width: 120px;

      .rightSector {
        width: 100%;
        height: 20%;
        background-color: rgb(185, 185, 185);
        border-radius: 20px;
        border-top-right-radius: 0px;
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
      width: 12%;
      border-radius: 20px;
      background-color: rgb(185, 185, 185);
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
      &:hover {
        background: rgb(125, 252, 178);
        box-shadow: inset 0 0 20px rgb(86, 172, 189);
        color: rgb(255, 255, 255) !important;
      }

      &:first-child {
        clip-path: none;
        span{
          transform: rotate(-40deg);
        }
      }

      &:last-child {
        clip-path: none;
        span{
          transform: rotate(40deg);
        }
      }

    }
  }
}
</style>
