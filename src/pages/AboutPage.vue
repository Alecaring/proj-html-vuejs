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

  <section class="projects ms_containerCardx4">
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

  <section class="testimonials ms_containerCardx4">
    <h1 class="fw-bold fs-1 mb-3 pt-4 text-center">Testimonials</h1>
    <span class="ms_line mb-4 mt-3"><span class="ms_inner_ine"></span></span>
    <div class="container">
      <div class="row row-cols-1">
        <div class="col-12 d-flex">
          <!-- CARD -->
          <div class="d-flex justify-content-between p-4 test-1">
            <figure>
              <img
                src="../assets/person0-p0a17bbqv6696rzdb2ly3jl0kdng6od3fj7vti5wi8.jpg"
                alt=""
              />
            </figure>
            <div class="pe-5 ps-3">
              <h2>Yatch Repairs</h2>
              <p>
                As a yacht owner, after either of my regular maintenance
                checkups, I oftentimes find it necessary to do this or that kind
                of a repair. The thing is that I don’t always have enough time
                (or sometimes the skill), to do all of the repairs all by
                myself…
              </p>
              <span> - Albert Winning</span>
            </div>
          </div>

          <div class="d-flex ps-5 p-4 test-2">
            <figure>
              <img src="../assets/person01.jpg" alt="" />
            </figure>
            <div class="pe-5 ps-3">
              <h2>Yatch Rentals</h2>
              <p>
                Having had a real handful of favorite pastimes over the course
                of my whole adult life, sailing was always front and center in
                such a list. So, when I found out about this yachts chartering
                service located just a few miles near my home, I was thrilled!
              </p>
              <span> - Reginald Stanhow</span>
            </div>
          </div>
          <!-- /CARD -->
        </div>
        <div class="text-center testimonial-btn">
          <button class="btn fw-bold btn-info text-white py-2 my-4">
            View All
          </button>
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

.counter,
.testimonials,
.about-us {
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

.testimonials {
  background-color: #f8f9fd;
  img {
    height: 150px;
    aspect-ratio: 0.8;
    object-fit: cover;
  }
  p {
    padding-top: 15px;
    padding-right: 4rem;
    color: gray;
    letter-spacing: 1.5px;
  }
  span {
    color: #09c2dd;
    font-weight: bold;
  }
  button {
    padding: 1.5rem;
  }
  .testimonial-btn {
    padding: 2rem;
  }
  .test-2 {
    margin-left: 5rem;
  }

  h2 {
    font-weight: bold;
  }
}
</style>
