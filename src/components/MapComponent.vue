<script>
import { ref, onMounted, defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

export default defineComponent({
  name: "MapComponent",
  setup() {
    const initialMap = ref(null);

    onMounted(() => {
      // lat -           // long -
      initialMap.value = L.map("map").setView(
        [37.5086594523004, 15.079574627099571],
        6
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(initialMap.value);
    });
    return {
      initialMap,
    };
  },
});
</script>

<template>
  <div>
    <h1 class="text-center fs-3 px-5 mx-5 text-body-tertiary">
      // Developers la mappa funziona è ancora in fase di sviluppo se volete
      provarla dovete solo
      <span class="text-danger">rimuovere il div che fa da hover.</span> <br />
      // Bisogna studiare un modo per non far scrollare la mappa insieme allo
      scroll della pagina
    </h1>
    <div class="containerMap my-5">
      <div class="map" id="map">
        <div class="HoverControlls"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containerMap {
  width: 90%;
  height: 60vh;
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
    color: white;
  }
  .map {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
