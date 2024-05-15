<script>
import { ref, onMounted, defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

export default defineComponent({
  data() {
    return {
      isClassActive: true,
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('keyup', this.handleKeyup);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('keyup', this.handleKeyup);
  },
  methods: {
    handleKeydown(event) {
      // Puoi controllare quale tasto è stato premuto se necessario
      if (event.key === 'a') { // Cambia 'a' con il tasto desiderato
        this.isClassActive = false; // Rimuove la classe
      }
    },
    handleKeyup(event) {
      // Puoi controllare quale tasto è stato rilasciato se necessario
      if (event.key === 'a') { // Cambia 'a' con il tasto desiderato
        this.isClassActive = true; // Riapplica la classe
      }
    }
  },











  name: "MapComponent",
  setup() {
    const initialMap = ref(null);

    onMounted(() => {
      // lat -           // long -
      initialMap.value = L.map("map").setView(
        [41.894621496987845, 12.484487036435569],
        6
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(initialMap.value);
      L.marker([43.738197732600774, 7.424887056238044]).addTo(initialMap.value).bindPopup('<strong style="color:red; font-size: 1.5arem;">Monaco</strong>')
        .openPopup();
      L.marker([41.894621496987845, 12.484487036435569]).addTo(initialMap.value);
      L.marker([44.36629182067352, 8.575338327256066]).addTo(initialMap.value);
      L.marker([43.81899809572149, 7.7699518026488725]).addTo(initialMap.value);
      L.marker([43.696215712823935, 7.224999767016766]).addTo(initialMap.value);
      L.marker([43.269234181709955, 6.67133703468023]).addTo(initialMap.value);
      L.marker([43.55156842441015, 7.022325190605892]).addTo(initialMap.value);
      L.marker([44.35312754140146, 9.22315101743111]).addTo(initialMap.value);
      L.marker([44.10373187188584, 9.855683770071293]).addTo(initialMap.value);
      L.marker([44.00222704811356, 8.167958976454361]).addTo(initialMap.value);
      L.marker([41.92936416629272, 8.739500086007531]).addTo(initialMap.value);
      L.marker([42.69241834629817, 9.450190216035331]).addTo(initialMap.value);
      L.marker([41.58205585599965, 9.2681476245313]).addTo(initialMap.value);
      L.marker([40.98235020488647, 9.503686182127076]).addTo(initialMap.value);
      L.marker([40.58335867491568, 8.291725520773255]).addTo(initialMap.value);
      L.marker([39.298679619215285, 9.145367377900731]).addTo(initialMap.value);
      L.marker([40.958478325138195, 9.493147393767478]).addTo(initialMap.value);
      L.marker([40.83020912243419, 14.20411206614019]).addTo(initialMap.value);
      L.marker([40.685470177429444, 14.787153443459982]).addTo(initialMap.value);
      L.marker([40.49807618422612, 17.26847815337493]).addTo(initialMap.value);
      L.marker([40.07050079265669, 18.00937386398463]).addTo(initialMap.value);
    });
    return {
      initialMap,
    };
  },
});

</script>

<template>
  <div class="containerMap my-5">
    <div class="map" :class="isClassActive ? 'ms_z-index' : ''" id="map">
      <div class="HoverControlls" :class="isClassActive ? 'toRemove' : ''">
        Press the "A" key to move around the map
      </div>
      <div class="bannerMap">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containerMap {
  width: 90%;
  height: 70vh;
  margin: 0 auto;

  .HoverControlls {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .map {
    position: relative;
    width: 100%;
    align-self: start;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    cursor: grab;
    color: transparent;

  }
}

.ms_z-index {
  z-index: -1;
}

.toRemove {
  background-color: rgba(0, 0, 0, 0.239);
  color: rgba(0, 0, 0, 0.56);
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: .4s ease-in-out;
}
.bannerMap {
  position: absolute;
  top: 4%;
  right: 2%;
  width: 30vw;
  border-radius: 1rem;
  height: 20vh;
  background-color: #fff;
  z-index: 9999;
}
</style>