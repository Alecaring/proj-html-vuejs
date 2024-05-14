<script>
import AppCard from "../components/AppCard.vue";
import { storeYacht } from "../store";

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      storeYacht,
    };
  },
};
</script>

<template>
  <div>VIDEO</div>
  <div>
    <h2>About us</h2>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col" v-for="curCard in storeYacht.yachtInfo">
          <!-- CARD -->

          <AppCard :cardObj="curCard" />
          <!-- /CARD -->
        </div>
      </div>
    </div>
  </div>

  <section>
    <h1>Why Pepole Choose Us</h1>
  </section>

  <section class="team">
    <h1>Meet Our Team</h1>
  </section>

  <section>
    <h1>Featured Projects</h1>
  </section>
</template>

<style scoped lang="scss">

</style>
