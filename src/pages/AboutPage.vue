<script>
import AppCard from "../components/AppCard.vue";
import AppNewBanner from "../components/AppNewBanner.vue";
import AppcardHover from "../components/AppcardHover.vue";
import { store } from "../store";

export default {
  components: {
    AppCard,
    AppNewBanner,
    AppcardHover,
  },
  methods: {
    getUrlPath(img) {
      return new URL(`../assets/${img}.jpg`, import.meta.url).href;
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section v-for="item in store.bannerVideo">
    <AppNewBanner :bannerObj="item" />
  </section>
  
  <section class="about-us ms_containerCardx4">
    <h1 class="fw-bold fs-1 px-4 mb-3 text-center">About us</h1>

    <span class="ms_line mb-4"><span class="ms_inner_ine "></span></span>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col" v-for="curCard in store.yachtInfo">
          <!-- CARD -->

          <AppCard :cardObj="curCard" />
          <!-- /CARD -->
        </div>
      </div>
    </div>
  </section>

  <section>
    <h1>Why Pepole Choose Us</h1>
  </section>

  <section class="team ms_containerCardx4">
    <h1 class="fw-bold fs-1 px-4 mb-3">Meet Our Team</h1>

    <span class="ms_line mb-4"><span class="ms_inner_ine"></span></span>

    <div class="container ">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col" v-for="curTeam in store.teams">
          <div class="card">
            <img
              :src="getUrlPath(curTeam.image)"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ curTeam.name }}</h5>
              <p class="job">{{ curTeam.position }}</p>
              <p class="card-text">
                {{ curTeam.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ms_containerCardx4">
    <h1 class="fw-bold fs-1 px-4">Featured Projects</h1>

    <span class="ms_line mt-5"><span class="ms_inner_ine"></span></span>
    <div class="container-fluid px-5">
      <div class="row row-cols-1 row-cols-md-4">
        <div class="col" v-for="item in store.cardsHomeServices">
          <!-- CARD -->
          <AppcardHover :cardObj="item" />
          <!-- /CARD -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-us{
  .ms_inner_ine {
    display: block;
    width: 5%;
    border: 0.1px solid #09c2dd;
    margin:0 auto;
  }
}
.team {
  .card {
    border-radius: 0;
    margin-bottom: 20px;
    h5 {
      color: #09c2dd;
    }
    .job {
      font-weight: 600;
    }

    img {
      border-radius: 0;
    }
  }
}

.ms_line {
  width: 90%;
  border: 0.1px solid rgba(0, 0, 0, 0.074);
  background-color: rgba(0, 0, 0, 0.03);
  margin: 0 auto;
  .ms_inner_ine {
    display: block;
    width: 5%;
    border: 0.1px solid #09c2dd;
  }
}
.ms_containerCardx4 {
  display: flex;
  flex-direction: column;
  h1 {
    width: 90%;
    margin: 0 auto;
    margin-left: 36px;
  }
}
</style>
