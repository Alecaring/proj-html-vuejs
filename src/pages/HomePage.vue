
<script>
import AppSlider from '../components/AppSlider.vue';
import AppBanner from "../components/AppBanner.vue";
import AppCard from "../components/AppCard.vue";
import { store } from '../store';
import AppcardHover from '../components/AppcardHover.vue';

export default {
    data() {
        return {
            activeIndex: 0,
            store
        };
    },
    methods: {
        goToSlide(index) {
            this.activeIndex = index;
        },
        getUrlPath(img) {
            return new URL(`../assets/${img}.jpg`, import.meta.url).href;
        }
    },
    components: { AppSlider, AppBanner, AppCard, AppcardHover }
};
</script>
  
<template>
    <section class="container-fluid p-0 ms_container">
        <AppSlider />
    </section>
    <section>
        <AppBanner />
    </section>
    <section class="ms_cardsHome">
        <h1 class="fw-bold fs-1">Services</h1>
        <span class="ms_line mt-5"><span class="ms_inner_ine"></span></span>
        <div class="container-fluid p-5">
          <div class="row row-cols-1 row-cols-md-3">
            <div class="col" v-for="item in store.cardsHome">
              <!-- CARD -->
              <AppCard :cardObj="item" />
              <!-- /CARD -->
            </div>
          </div>
        </div>
    </section>
    <section class="ms_containerCardx4 py-5">
        <h1 class="fw-bold fs-1 text-white pt-3">Our Yachts</h1>
        <span class="ms_line mt-5"><span class="ms_inner_ine"></span></span>
        <div class="container-fluid p-5">
          <div class="row row-cols-1 row-cols-md-4">
            <div class="col" v-for="item in store.cardsHomeServices">
              <!-- CARD -->
              <AppcardHover :cardObj="item" />
              <!-- /CARD -->
            </div>
        </div>
    </div>
    <button class="btn border text-white fs-4">Learn More</button>
    </section>
</template>


<style scoped lang="scss">

.ms_cardsHome {
    background-image: url("../assets/bg6.jpg");
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.ms_container {
    width: 100%;
    height: 100%;
}
.ms_line {
    width: 90%;
    border: .1px solid rgba(0, 0, 0, 0.074);
    background-color: rgba(0, 0, 0, 0.03);
    .ms_inner_ine {
        display: block;
        width: 5%;
        margin: 0 auto;
        border: .1px solid #09c2dd;
    }
}
.ms_containerCardx4 {
    background-color: #09c2dd;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
  