<script>
import AppCard from "../components/AppCard.vue";
import AppBanner from "../components/AppBanner.vue";
import AppcardHover from "../components/AppcardHover.vue";
import { store } from "../store";

export default {
  components: {
    AppCard,
    AppBanner,
    AppcardHover,
  },
  methods: {
    getUrlPath(img) {
      return new URL(`../assets/${img}.jpg`, import.meta.url).href;
    },
    startCounters() {
      this.counters.forEach((counter) => {
        // Rimuovo l'event listener dopo che è stato attivato
        window.removeEventListener("scroll", this.startCounters);
        const increment = counter.targetValue / 1000; // --> secondi
        let currentValue = 1; // --> inizio del contatore
        const interval = setInterval(() => {
          if (currentValue < counter.targetValue) {
            currentValue += increment;
            counter.value = Math.min(
              Math.floor(currentValue),
              counter.targetValue
            );
          } else {
            clearInterval(interval);
          }
        }, 1000 / 60); // Approssimazione a 60 FPS per una maggiore fluidità
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.startCounters, { once: true });
  },
  data() {
    return {
      store,
      counters: [
        { value: 0, label: "Yachts Available", targetValue: 5586 },
        { value: 0, label: "Types of Yachts", targetValue: 3864 },
        { value: 0, label: "Charters a Year", targetValue: 98 },
        { value: 0, label: "Countries Covered", targetValue: 11 },
      ],
    };
  },
};
</script>

<template>
  <section v-for="item in store.bannerVideo">
    <AppBanner :bannerObj="item" />
  </section>

  <section class="about-us ms_containerCardx4">
    <h1 class="fw-bold fs-1 mb-3 pt-4 text-center">About us</h1>

    <span class="ms_line mb-4 mt-3"><span class="ms_inner_ine"></span></span>
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

  <section class="counter ms_containerCardx4">
    <h1 class="fw-bold fs-1 mb-3 pt-5 text-center">Why People Choose Us</h1>
    <span class="ms_line mb-4 mt-3"><span class="ms_inner_ine"></span></span>

    <div class="d-flex justify-content-around p-5">
      <div class="text-center" v-for="(counter, index) in counters">
        <span class="numb-counter">{{ counter.value }}</span>
        <p class="text-counter">{{ counter.label }}</p>
      </div>
    </div>

    <!-- <div class="d-flex justify-content-around p-5">
      <div class="text-center">
        <span class="numb-counter">5586</span>
        <p class="text-counter">Yachts Available</p>
      </div> ....
    </div> -->
  </section>

  <section class="team ms_containerCardx4">
    <h1 class="fw-bold fs-1 pt-4 mb-3">Meet Our Team</h1>

    <span class="ms_line mb-4 mt-3"><span class="ms_inner_ine"></span></span>

    <div class="container">
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

  <section class="ms_containerCardx4 projects">
    <h1 class="fw-bold fs-1 pt-4 mb-3">Featured Projects</h1>
    <span class="ms_line mt-3"><span class="ms_inner_ine"></span></span>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
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
.numb-counter {
  color: #09c2dd;
  padding-bottom: 10px;
  font-weight: bold;
  border-bottom: 3px solid;
  font-size: 2rem;
}

.text-counter {
  padding-top: 20px;
  font-weight: bold;
  font-size: 1.3rem;
}

.counter {
  .ms_inner_ine {
    display: block;
    width: 5%;
    border: 0.1px solid #09c2dd;
    margin: 0 auto;
  }
}

.about-us {
  background-image: url("../assets/bg6.jpg");
  background-size: cover;
  .ms_inner_ine {
    display: block;
    width: 5%;
    border: 0.1px solid #09c2dd;
    margin: 0 auto;
  }
}
.team {
  background-color: #f8f9fd;
  .card {
    border: 0;
    background-color: #f8f9fd;
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
  }
}
</style>
