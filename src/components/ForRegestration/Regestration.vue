<template>
  <div>
    <Navigation></Navigation>
    <insideNavigation></insideNavigation>

    <div class="container mt-4">
      <div class="row">
        <div class="col-8 border p-3">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                  alt="Trendy Pants and Shoes"
                  class="img-fluid rounded-start"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Областной краеведческий музей</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    <br />
                    <i class="fas fa-exclamation-circle"></i>
                    <span> sotilgan maxsulot qaytarib olinmaydi</span>
                  </p>

                  <button class="btn btn-warning bg-gradient">
                    <i class="fas fa-map"></i> joyni tanlash
                  </button>
                </div>

                <div class="d-flex px-4 gap-2 w-75">
                  <button class="btn btn-primary bg-gradient">
                    <i class="fab fa-telegram" style="font-size: 18px"></i>
                  </button>
                  <button
                    class="btn btn-primary"
                    style="background-color: #3b5998"
                  >
                    <i class="fab fa-facebook" style="font-size: 18px"></i>
                  </button>
                  <button
                    class="btn btn-primary"
                    style="background-color: #4dc247"
                  >
                    <i class="fab fa-whatsapp" style="font-size: 18px"></i>
                  </button>
                  <button
                    class="btn btn-primary"
                    style="background-color: #1da1f2"
                  >
                    <i class="fab fa-twitter" style="font-size: 18px"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <n-card content-style="padding: 0;">
            <n-tabs
              type="line"
              size="large"
              :tabs-padding="20"
              pane-style="padding: 20px;"
            >
              <n-tab-pane name="Register">
                <h3><n-gradient-text type="success"> Regestration </n-gradient-text></h3>
                <span >Ism:</span>
                <n-input maxlength="60" show-count clearable  placeholder = 'Ism' />
                <span class="mt-3 d-block">Familiya:</span>
                <n-input maxlength="60" show-count clearable placeholder = 'Familiya' />

                <span class="mt-3 d-block">Tel:</span>
                <n-input maxlength="50" show-count clearable  placeholder="+998 99 123 45 67"/>

<button class="btn btn-primary w-25 mt-3 float-end d-flex  justify-content-center align-items-center gap-2 " style="clip-path: none;">Send info <i class="fas fa-upload"></i></button>
              </n-tab-pane>
              <n-tab-pane name="ROCKLIFE">
                <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </div>
        <div class="col-4">
          <div class="w-100 p-3 bg-dark text-white">МЕСТО ПРОВЕДЕНИЯ</div>
          <n-card hoverable>
            <img
              src="../../assets/fadFC2C0PNifwHU8JsYWcv7pJUVce5ej.png"
              alt=""
              class="img-fluid"
            />
            <p class="fw-bold mt-3 m-0">Adress</p>
            <span> Абдурахман Жомий улица, Samarkand, Узбекистан</span>
          </n-card>

          <div class="w-100 p-3 mt-5 bg-dark text-white">
            ПОЛЕЗНАЯ ИНФОРМАЦИЯ
          </div>
          <n-card hoverable>
            <img
              src="../../assets/kLnBxAyZJXIaGzrtm51a1JbTSGOn0zDI.png"
              alt=""
              class="img-fluid"
            />
            <p class="fw-bold mt-3 m-0">Adress</p>
            <span> Абдурахман Жомий улица, Samarkand, Узбекистан</span>
          </n-card>
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
</script>

<style lang="scss" scoped>
.btn {
  clip-path: polygon(
    0 100%,
    0 0,
    83% 0,
    100% 0,
    100% 0,
    92% 19%,
    100% 46%,
    92% 71%,
    100% 93%,
    100% 100%,
    55% 100%
  );
}

.n-card {
  max-width: 100%;
}
</style>
