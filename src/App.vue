<script>
import AppHeaderTop from "./components/AppHeaderTop.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue"

  export default {
    components: {
      AppHeaderTop,
      AppHeader,
      AppFooter,
    },
    data(){
      return {

      }
    }
  }
</script>

<template>
  <AppHeaderTop />
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">

*{
  font-family: "Poppins", Sans-serif;
  letter-spacing: 1.3px;
}

</style>