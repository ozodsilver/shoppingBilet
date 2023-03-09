<template>
  <div>
    <Navigation></Navigation>
    <insideNavigation></insideNavigation>

    <div class="container mt-4">
      <div class="row">
        <div class="col-12 col-sm-12 shadow-lg p-3">
          <div class="card p-5 mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="imgUrl"
                  alt="Rasm yuklanishida xatolik"
                  class="img-fluid rounded-start h-100"
                  style="object-fit: cover; object-position: center"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ obj.name }}</h5>
                  <p class="card-text">
                    {{ obj.description }}
                  </p>
                  <p class="card-text">
                    <i class="fas fa-exclamation-circle"></i>
                    <span> Xarid qilinga bilet qaytarib olinmaydi!</span>
                  </p>

                  <button class="btn w-100 btn-warning bg-gradient">
                    <i class="fas fa-map"></i> &nbsp;
                    <small class="text-white">O'yin vaqti &nbsp; </small>
                    <br />
                    <abbr>
                      <small class="text-white">
                        {{
                          new Date(obj.startsAt).toLocaleDateString() +
                          " " +
                          new Date(obj.startsAt).getHours() +
                          ":" +
                          new Date(obj.startsAt).getMinutes()
                        }}
                      </small>
                    </abbr>
                  </button>
                </div>

                <div class="d-flex px-4 gap-2 w-75">
                  <a
                    href="https://t.me/unired_fc"
                    class="btn btn-primary bg-gradient"
                  >
                    <i class="fab fa-telegram" style="font-size: 18px"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/united_redbridge_football_club"
                    class="btn btn-primary"
                    style="background-color: #D7157G"
                  >
                    <i class="fab fa-instagram" style="font-size: 18px"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container p-3 my-5 border-success">
      <n-gradient-text type="success" class="fs-2">
        Sectorni tanlang
      </n-gradient-text>

      <div class="row">
        <div class="col-12 position-relative">
          <div class="d-flex justify-content-start gap-3 align-items-center">
            <div
              class="rounded-2"
              style="width: 20px; height: 20px; background: #ecb880"
            ></div>
            <span>Oilaviy hudud</span>
          </div>

<!-- modal -->


<n-modal v-model:show="showModal" >
    <n-card
      style="width: 600px"
      title="Ushbu sektor haqida malumot"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      class="backBall"
    >
  <span>Sector Raqami <span class="badge bg-primary">{{ sectorName }}</span></span>
  <br>
   Ticket Narxi:<span class="badge bg-primary">{{ price }}</span>
    <br>
    Mavjud o'rinlar soni: <span class="badge bg-success">{{ sigim }}</span> o'rin
    <br>
    <router-link class="btn btn-dark bg-gradient float-end p-2 px-4 mt-2" style="clip-path:none" :to="{ name: 'register', params: { id: store.id } }"  @click="addSectorId(store.secId)" >
   Joy buyurtma qilish <i class="fas fa-ticket-alt"></i>
    </router-link>
   
    </n-card>
  </n-modal>

<!-- modal -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-150 -70 1727 899"
          >
            <g id="Слой_2" data-name="Слой 2">
              <g id="all">
                <!-- 1 -->

                <!-- <router-link
                  v-for="info in svgArray"
                  v-html="info.path"
                  :to="{ name: 'register', params: { id: store.id } }"
                ></router-link> -->
                <!-- <router-link
                  :to="{ name: 'register', params: { id: store.id } }"
                  @click="addSectorId(0)"
                > -->
                <path
                @click="addSectorId(1, 'Sector 1')"
                  class="cls-4"
                  id="p1"
                  d="M210.72,220.93A277.54,277.54,0,0,1,263,169.17a4.06,4.06,0,0,0,.87-5.59l-74.26-104a4.06,4.06,0,0,0-5.43-1.1A391.78,391.78,0,0,0,78,155.63a4,4,0,0,0,1.08,5.84l88.15,56.15a4,4,0,0,0,5.52-1.14l5.52-8.11a4.05,4.05,0,0,1,5.62-1.07l21.34,14.52A4.05,4.05,0,0,0,210.72,220.93Z"
                ></path>
                <text x="20" transform="translate(-30,-30)">
                  <textPath href="#p1">1</textPath>
                </text>
                <!-- <rect x="100" y="100" transform="rotate(-4)" width="150" height="50" fill="rgba(0, 0, 0, 0.8)" />
  <text x="110" y="130" font-size="16" font-family="Arial" fill="#fff">Tooltip text</text> -->

                <path
                @click="addSectorId(2,'Sector 2')"
                  id="p2"
                  class="cls-4"
                  d="M338.25,124.8,306.84,12.72a4.05,4.05,0,0,0-4.79-2.86A386.9,386.9,0,0,0,194.21,52.43,4,4,0,0,0,193,58.27l73.68,103.2a4,4,0,0,0,5.62.95A275.64,275.64,0,0,1,335.7,129.7,4.06,4.06,0,0,0,338.25,124.8Z"
                ></path>
                <text x="400" transform="translate(-20,-30)">
                  <textPath href="#p2">2</textPath>
                </text>

                <path
                @click="addSectorId(3,'Sector 3')"
                  class="cls-4"
                  id="p3"
                  d="M429.38,113.39h14.86a4,4,0,0,0,4-4.31L441.39,3.78a4,4,0,0,0-4-3.78H389.5a391.51,391.51,0,0,0-76,7.42,4,4,0,0,0-3.09,5.06l31,110.79a4.06,4.06,0,0,0,5.14,2.76A275.8,275.8,0,0,1,429.38,113.39Z"
                />
                <text x="400" transform="translate(10,-30)">
                  <textPath href="#p3">3</textPath>
                </text>

                <path
                @click="addSectorId(4,'Sector 4')"
                  id="p4"
                  class="cls-4"
                  d="M602.5,109.34V4.05a4,4,0,0,0-4-4H449a4.05,4.05,0,0,0-4,4.31l6.9,105.29a4,4,0,0,0,4,3.79H598.45A4,4,0,0,0,602.5,109.34Z"
                />
                <text x="400" transform="translate(35,-30)">
                  <textPath href="#p4">4</textPath>
                </text>

                <path
                  class="cls-4"
                  d="M694.05,81.5H723a4,4,0,0,1,4,4v23.79a4,4,0,0,0,4,4h76.4a4,4,0,0,0,4-4V4.05a4,4,0,0,0-4-4H610.05a4,4,0,0,0-4,4.05V109.34a4,4,0,0,0,4,4H686a4,4,0,0,0,4-4V85.55A4,4,0,0,1,694.05,81.5Z"
                />

                <path
                @click="addSectorId(5,'Sector 5')"
                  id="p5"
                  class="cls-4"
                  d="M950.58,0H819.05a4,4,0,0,0-4,4.05V109.34a4,4,0,0,0,4,4h128.2a4.05,4.05,0,0,0,4-3.92L954.63,4.18A4.05,4.05,0,0,0,950.58,0Z"
                />
                <text x="300" transform="translate(0,-30)">
                  <textPath href="#p5">5</textPath>
                </text>

                <path
                @click="addSectorId(6,'Sector 6')"
                  id="p6"
                  class="cls-4"
                  d="M1004.15,113.39a275.88,275.88,0,0,1,78,11.2,4,4,0,0,0,4.87-2.27l13.16-30.59a4.06,4.06,0,0,1,5.32-2.12l6.26,2.7a4,4,0,0,0,5.36-2.23l28-70.38a4,4,0,0,0-2.65-5.39A389.79,389.79,0,0,0,1037.5,0H962.18a4,4,0,0,0-4,3.92l-3.33,105.29a4,4,0,0,0,4,4.18Z"
                />
                <text x="0" transform="translate(30,-30)">
                  <textPath href="#p6">6</textPath>
                </text>

                <path
                @click="addSectorId(7,'Sector 7')"
                  id="p7"
                  class="cls-4"
                  d="M1121,139.3A277.22,277.22,0,0,1,1237.1,241.25a4.05,4.05,0,0,0,4.91,1.6l126.12-50.3a4,4,0,0,0,2-5.85A390.51,390.51,0,0,0,1153.7,17.63a4.05,4.05,0,0,0-5,2.38l-28.48,71.67a4,4,0,0,0,2.16,5.21l6.88,3a4,4,0,0,1,2.11,5.32L1119,134A4,4,0,0,0,1121,139.3Z"
                />
                <text x="0" transform="translate(100,10)">
                  <textPath href="#p7">7</textPath>
                </text>

                <path
                @click="addSectorId(8,'Sector 8')"
                  id="p8"
                  class="cls-4"
                  d="M1371.09,195.14l-125.95,50.23a4,4,0,0,0-2,5.76,274.74,274.74,0,0,1,37.09,134,4.06,4.06,0,0,0,3.92,4l138.73,4.39a4,4,0,0,0,4.13-4v0h0a387.76,387.76,0,0,0-50.89-192.62A4.05,4.05,0,0,0,1371.09,195.14Z"
                />
                <text x="200" transform="translate(50,1)">
                  <textPath href="#p8">8</textPath>
                </text>

                <path
                @click="addSectorId(9,'Sector 9')"
                  id="p9"
                  class="cls-4"
                  d="M1255.84,512l117,67.57a4,4,0,0,0,5.56-1.53,387.35,387.35,0,0,0,48.39-176.82,4,4,0,0,0-3.92-4.15l-138.58-4.38a4,4,0,0,0-4.17,4,274.87,274.87,0,0,1-25.94,110.1A4,4,0,0,0,1255.84,512Z"
                />
                <text x="10" transform="translate(50,-20)">
                  <textPath href="#p9">9</textPath>
                </text>

                <path
                @click="addSectorId(10,'Sector 10')"
                  id="p10"
                  class="cls-4"
                  d="M1153.21,628l10.29,17.83a5.4,5.4,0,0,1-2,7.38l-2.35,1.36a5.4,5.4,0,0,0-2.11,7.15L1197,739.27a5.42,5.42,0,0,0,7.15,2.4,391.23,391.23,0,0,0,167.78-152.31,5.41,5.41,0,0,0-1.93-7.48l-114-65.83a5.39,5.39,0,0,0-7.47,2.15,277.4,277.4,0,0,1-93.55,102.63A5.39,5.39,0,0,0,1153.21,628Z"
                />
                <text x="35" transform="translate(70,-40)">
                  <textPath href="#p10">10</textPath>
                </text>

                <path
                @click="addSectorId(11,'Sector 11')"
                  id="p11"
                  class="cls-4"
                  d="M1118.61,644.11a3.35,3.35,0,0,0-4.26-1.39,275,275,0,0,1-110.2,22.89h-2.56a3.36,3.36,0,0,0-3.34,3.75L1010.59,776a3.36,3.36,0,0,0,3.34,3h23.57a388.11,388.11,0,0,0,155.36-32.23,3.34,3.34,0,0,0,1.63-4.61l-41.2-80.09a3.37,3.37,0,0,0-4.67-1.37l-12.41,7.17a3.35,3.35,0,0,1-4.59-1.23Z"
                />
                <text x="280" transform="translate(10,-40)">
                  <textPath href="#p11">11</textPath>
                </text>

                <path
                @click="addSectorId(12,'Sector 12')"
                  id="p12"
                  class="cls-4"
                  d="M884,669.66V775a4,4,0,0,0,4,4h114.82a4.05,4.05,0,0,0,4-4.51l-12.18-105.3a4,4,0,0,0-4-3.58H888.05A4,4,0,0,0,884,669.66Z"
                />
                <text x="130" transform="translate(10,-30)">
                  <textPath href="#p12">12</textPath>
                </text>

                <path
                @click="addSectorId(13,'Sector 13')"
                  id="p13"
                  class="cls-4"
                  d="M764,713h-5.9a4,4,0,0,0-4,4V775a4,4,0,0,0,4,4h118.4a4,4,0,0,0,4-4V669.66a4,4,0,0,0-4-4H772.05a4,4,0,0,0-4,4V709A4,4,0,0,1,764,713Z"
                />
                <text x="120" transform="translate(0,-30)">
                  <textPath href="#p13">13</textPath>
                </text>

                <path
                @click="addSectorId(14,'Sector 14')"
                  id="p14"
                  class="cls-4"
                  d="M731,665.61H567.05a4,4,0,0,0-4,4V775a4,4,0,0,0,4,4h179.4a4,4,0,0,0,4-4v-57.9a4,4,0,0,0-4-4h-7.4a4,4,0,0,1-4-4V669.66A4,4,0,0,0,731,665.61Z"
                />
                <text x="340" transform="translate(0,-30)">
                  <textPath href="#p14">14</textPath>
                </text>

                <path
                @click="addSectorId(15,'Sector 15')"
                  id="p15"
                  class="cls-4"
                  d="M461.29,779h94.16a4,4,0,0,0,4-4V669.66a4,4,0,0,0-4-4H471.54a4,4,0,0,0-4,3.66L457.26,774.56A4,4,0,0,0,461.29,779Z"
                />
                <text x="0" transform="translate(20,-30)">
                  <textPath href="#p15">15</textPath>
                </text>

                <path
                @click="addSectorId(16,'Sector 16')"
                  id="p16"
                  class="cls-4"
                  d="M429.38,665.61a276.53,276.53,0,0,1-71.17-9.27,4,4,0,0,0-4.78,2.31L307.55,765.41a4,4,0,0,0,2.88,5.55,390.84,390.84,0,0,0,79.07,8h60.14a4,4,0,0,0,4-3.66l10.25-105.29a4,4,0,0,0-4-4.44Z"
                />
                <text x="230" transform="translate(20,-30)">
                  <textPath href="#p16">16</textPath>
                </text>

                <path
                @click="addSectorId(17,'Sector 17')"
                  id="p17"
                  class="cls-4"
                  d="M265.65,616.26,179.1,711.73a4,4,0,0,0,.8,6.12,387.21,387.21,0,0,0,118.92,50.53,4,4,0,0,0,4.65-2.34l46.18-107.45a4,4,0,0,0-2.5-5.45A274.94,274.94,0,0,1,271,615.68,4.06,4.06,0,0,0,265.65,616.26Z"
                />
                <text x="180" transform="translate(20,-30)">
                  <textPath href="#p17">17</textPath>
                </text>

                <path
                @click="addSectorId(18,'Sector 18')"
                  id="p18"
                  class="cls-4"
                  d="M213.61,567.08l-30.29,17.49a4.05,4.05,0,0,1-5.53-1.48l-5.36-9.29a4,4,0,0,0-5.68-1.39l-82.1,52.36a4,4,0,0,0-1,5.91A392,392,0,0,0,170,711.33a4,4,0,0,0,5.28-.64l86.93-95.88a4,4,0,0,0-.52-5.92,277.44,277.44,0,0,1-43-40.9A4.05,4.05,0,0,0,213.61,567.08Z"
                />
                <text x="210" transform="translate(20,-30)">
                  <textPath href="#p18">18</textPath>
                </text>

                <path
                @click="addSectorId(19,'Sector 19')"
                  id="p19"
                  class="cls-4"
                  d="M192.34,531.12a274.3,274.3,0,0,1-34.25-90,4,4,0,0,0-4-3.32L7.88,440.51A4,4,0,0,0,4,445.11,387.44,387.44,0,0,0,76.51,621.37a4,4,0,0,0,5.42,1l83.37-53.16a4.05,4.05,0,0,0,1.33-5.44L163,557.5A4,4,0,0,1,164.5,552l26.41-15.25A4.05,4.05,0,0,0,192.34,531.12Z"
                />
                <text x="360" transform="translate(20,-30)">
                  <textPath href="#p19">19</textPath>
                </text>

                <path
                @click="addSectorId(20,'Sector 20')"
                  id="p20"
                  class="cls-4"
                  d="M153.27,389.5h0a279.46,279.46,0,0,1,2.6-38.07,4.06,4.06,0,0,0-3.49-4.6L8.78,328.36a4,4,0,0,0-4.52,3.4A392.59,392.59,0,0,0,0,389.5H0a393.77,393.77,0,0,0,2.46,43.95A4,4,0,0,0,6.56,437l145.71-2.68a4,4,0,0,0,3.93-4.6A278.27,278.27,0,0,1,153.27,389.5Z"
                />
                <text x="330" transform="translate(20,-30)">
                  <textPath href="#p20">20</textPath>
                </text>

                <path
                @click="addSectorId(21,'Sector 21')"
                  id="p21"
                  class="cls-4"
                  d="M185.61,252.11l-22-15a4,4,0,0,1-1.07-5.62l3.7-5.43a4.06,4.06,0,0,0-1.17-5.69L76.58,164a4,4,0,0,0-5.47,1.07,387.35,387.35,0,0,0-65,155.12,4,4,0,0,0,3.47,4.71L153.2,343.41a4.07,4.07,0,0,0,4.5-3.32,274.14,274.14,0,0,1,29.18-82.68A4.05,4.05,0,0,0,185.61,252.11Z"
                />
                <text x="370" transform="translate(20,-40)">
                  <textPath href="#p21">21</textPath>
                </text>

                <rect
                  class="cls-5"
                  x="521.31"
                  y="63.69"
                  width="389.52"
                  height="662.14"
                  rx="18.28"
                  transform="translate(1110.83 -321.31) rotate(90)"
                />
                <path
                  class="cls-6"
                  d="M495.66,437c13.48-9.12,22.22-23.72,22.22-40.17h0c0-16.39-8.68-30.95-22.09-40.07m0,4.59c11.09,8.52,18.13,21.26,18.13,35.48h0c0,14.38-7.18,27.22-18.46,35.74"
                />
                <path
                  class="cls-6"
                  d="M935.28,353.88C921.79,363,913.06,377.59,913.06,394h0c0,16.4,8.68,31,22.09,40.08m0-4.59C924,421,917,408.27,917,394h0c0-14.37,7.18-27.21,18.46-35.74"
                />
                <path
                  class="cls-6"
                  d="M1032.59,505.47h-94.2a1.35,1.35,0,0,1-1.35-1.35V287a3,3,0,0,1,3-3h92.55V280.4H936.51a3,3,0,0,0-3,3V507.76a1.35,1.35,0,0,0,1.36,1.35h97.73Z"
                />
                <path
                  class="cls-6"
                  d="M1035,446.54h-27.46a3.22,3.22,0,0,1-3.21-3.22V342.22a3.53,3.53,0,0,1,3.53-3.53H1035v-3.25h-31.27a3.53,3.53,0,0,0-3.54,3.53V446.58a3.22,3.22,0,0,0,3.22,3.21H1035Z"
                />
                <path
                  class="cls-6"
                  d="M397.86,281.05h94.2a1.34,1.34,0,0,1,1.35,1.35V499.49a3,3,0,0,1-3,3H397.86v3.62H494a3,3,0,0,0,3-3V278.76a1.36,1.36,0,0,0-1.35-1.36H397.86Z"
                />
                <path
                  class="cls-6"
                  d="M395.5,340H423a3.21,3.21,0,0,1,3.21,3.21v101.1a3.54,3.54,0,0,1-3.53,3.54H395.5v3.25h31.28a3.53,3.53,0,0,0,3.53-3.53V339.94a3.21,3.21,0,0,0-3.21-3.21H395.5Z"
                />
                <path
                  class="cls-6"
                  d="M1039,568.4V221.83c0-8.36-7.45-15.13-16.65-15.13H410.54c-9.2,0-16.66,6.77-16.66,15.13V568.4c0,8.36,7.46,15.14,16.66,15.14h611.84C1031.58,583.54,1039,576.76,1039,568.4ZM412,577.66a10.91,10.91,0,0,1-11.33-11V224.23a10.91,10.91,0,0,1,11.33-11h608c6.69,0,12.11,4.93,12.11,11V566.65c0,6.08-5.42,11-12.11,11Z"
                />
                <path
                  class="cls-6"
                  d="M712,335a57,57,0,1,0,57,57A57,57,0,0,0,712,335Zm0,109a52,52,0,1,1,52-52A52,52,0,0,1,712,444Z"
                />
                <path
                  class="cls-7"
                  d="M1081.5,174.57V132.5h-734v35.33c-94.12,35.87-161,126.95-161,233.67h0c0,138.07,111.93,250,250,250h540c138.07,0,250-111.93,250-250h0C1226.5,300.93,1167.11,214.25,1081.5,174.57Zm98,218.93c0,117.08-94.92,212-212,212h-522c-117.08,0-212-94.92-212-212h0c0-117.08,94.92-212,212-212h522c117.08,0,212,94.92,212,212Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Navigation from "../Navigation.vue";
import insideNavigation from "../ForRegestration/insideNavigation.vue";
import Footer from "../Footer.vue";
import axios from "axios";
import { useCounterStore } from "../../stores/counter.js";
import { onMounted, reactive, ref } from "vue";
let obj = reactive({});
let store = useCounterStore();
let imgUrl = ref("");
let places = ref([]);
let sectorName = ref("");
let price = ref("");
let sigim = ref("");
let sectors = ref([]);
let showSector = ref(false);
let showSector2 = ref(false);
let showSector3 = ref(false);
let cardInfo = ref("");
let showInfo = ref("");
let showModal = ref(false)


onMounted(() => {
  axios
    .get(`https://bk.utickets.uz/api/Events/GetEvent/${store.id}`)
    .then((el) => {
      console.log(el);
      Object.assign(obj, el.data);
      imgUrl.value = `${window.base}api/Images/${obj.imageId}`;
    });

  console.log(store.id);
  axios
    .get(`https://bk.utickets.uz/api/Events/GetSectors/${store.id}`)
    .then((javob) => {
      console.log(javob);
      javob.data.forEach((response) => {
        places.value.push(response);
      });
    });

  console.log(store.id);
  store.increment().then((response) => {
    console.log(response);
    response.data.forEach((el) => {
      sectors.value.push(el);
    });
  });
});

let addSectorId = (id,name) => {
  store.secId = id;
  console.log(id);
  showModal.value = true
  showInfo.value = true;
  sectors.value.forEach((el) => {
    if(el.sectorName == name && el.available > 0){
      sectorName.value = el.sectorName;
      price.value = el.price;
      sigim.value = el.available;
    }
  });
};
</script>

<style lang="scss" scoped>
.btn {
  clip-path: polygon(
    0 100%,
    0 0,
    83% 0,
    100% 0,
    100% 0,
    95% 19%,
    100% 46%,
    95% 71%,
    100% 93%,
    100% 100%,
    55% 100%
  );
}

.row .col-4 {
  transition: 1s;
}

.n-card {
  max-width: 100%;
}

.cls-1 {
  fill: none;
}
.cls-2 {
  fill: #0b8c6e;
}
.cls-3 {
  fill: #0f5677;
  opacity: 0.4;
}

.cls-5 {
  fill: #13975b;
  opacity: 0.39;
}
.cls-6 {
  fill: #fff;
}
.cls-7 {
  fill: rgb(174, 177, 177);
  opacity: 0.58;
  filter: drop-shadow(0 0 10pc black);
}

path:hover {
  color: red;
}

.row .col-4 button {
  clip-path: none;
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

.clip {
  clip-path: none;
}

textPath {
  font-size: 55px !important;
  fill: rgb(255, 255, 255);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.backBall{
  background-image: url('../../assets/backBall.png') !important;
  background-position: right top;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
