<script>

import AppBanner from "../components/AppBanner.vue"
import { store } from '../store';

export default {
    components:{
        AppBanner,
    },
    data() {
        return {
            store,    
        }
    },
    methods: {
        getUrlPath(img) {
            return new URL(`../assets/${img}.jpg`, import.meta.url).href;
        }
    }
};
</script>

<template>
    <section class="container-fluid p-0">
        <img class="w-100" src="../assets/bg2.jpg" alt="">
    </section>
    <AppBanner />
</template>

<style scoped></style>