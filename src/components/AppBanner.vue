<script>

import { store } from '../store';

export default {
    data() {
        return {
            store,
            bannerImg: [
                {
                    img: "bg4",
                    alt: "Boat life",
                },
                {
                    img: "bg5",
                    alt: "Ride the waves",
                },
            ]
        }
    },
    methods: {
        getUrlPath(img) {
            return new URL(`../assets/${img}.jpg`, import.meta.url).href;
        }
    }
}
</script>

<!-- <template>
    <section class="ms_banner d-flex" v-for="img in bannerImg">
        <img :src="getUrlPath(img.img)" :alt="img.alt">
        <div class="ms_content p-4 justify-content-center">
            <h2 class="fw-bold fs-1 mt-2 mb-5">Our History</h2>
            <p class="fw-bold mb-4">
                Founded by a worldwide-famous yacht racer Alfred Tannenstrick, since its inception back in 1977, this company has been a welcoming harbor for all yachting and sailing enthusiasts, from all across the US!
            </p>
            <p class="mb-4">
                We offer a real variety of professional services, from the simple yachts chartering and corporate events, all the way to yacht repairs, upgrades and modifications and maintenance checkups.
            </p>
            <p class="mb-4">
                With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!
            </p>
            <button type="button" class="btn btn-info text-white py-3 px-4 fw-bold">More Details</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .ms_banner{
        width: 100%;
        position: relative;
    }
    h2,
    p{
        color: #3A3A50;
        font-size: 1.2rem;
    }

    .ms_content{
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style> -->

<template>
    <section class="ms_banner-up">
        <div class="p-4 d-flex">
            <div class="ms_empty"></div>
            <div class="ms_content">
                <h2 class="fw-bold fs-1 mt-2 mb-5">Our History</h2>
                <hr>
                <p class="fw-bold mb-4">
                    Founded by a worldwide-famous yacht racer Alfred Tannenstrick, since its inception back in 1977,
                    this company has been a welcoming harbor for all yachting and sailing enthusiasts, from all across
                    the US!
                </p>
                <p class="mb-4">
                    We offer a real variety of professional services, from the simple yachts chartering and corporate
                    events, all the way to yacht repairs, upgrades and modifications and maintenance checkups.
                </p>
                <p class="mb-4">
                    With decades of professional experience in renting, repairing and transporting just all kinds of
                    yachts and boats under our belt – we can assure you that we are your best choice!
                </p>
                <button type="button" class="btn btn-info text-white py-3 px-4 fw-bold">More Details</button>
            </div>
        </div>
    </section>
    <section class="ms_banner-down">
        <h2 class="ms_title-down fw-bolder text-white text-center d-flex align-items-center">Yacht Charters, Repairs & Transportation, US-wide! </h2>
        <button type="button" class="btn btn-info text-white py-3 px-4 fw-bold">More Details</button>
    </section>
</template>

<style scoped>
h2,
p {
    color: #3A3A50;
    font-size: 1.2rem;
}

.ms_banner-up {
    background-image: url("../assets/bg4.jpg");
    width: 100%;
    height: 100vh;
}

.ms_empty {
    width: 50%;
    height: 800px;
}

.ms_content {
    width: 50%;
}

.ms_banner-down {
    background-image: url("../assets/bg5.jpg");
    width: 100%;
    height: 100vh;
}

.ms_title-down{
    font-size: 6rem;

}
</style>