


<script>
import { store } from '../store';

export default {
    data() {
        return {
            activeIndex: 0,
            store,
        };
    },
    methods: {
        goToSlide(index) {
            this.activeIndex = index;
        },
        getUrlPath(img) {
            return new URL(`../assets/${img}.jpg`, import.meta.url).href;
        }
    }
}
</script>


<template>

<div class="ms_slider">
            <div v-for="(item, index) in store.banner" :key="index" :class="['slide', { active: index === activeIndex }]">
                <img class="w-100" :src="getUrlPath(item.img)" :alt="item.alt">
            </div>




            <div class="txtOn">
                <div class="innerTxt" :class="activeIndex === 0 ? 'align-items-start' : 'align-items-center'">
                    <h1>QuickWind</h1>
                    <p>all kinds of boats, yacht charters and sailing destinations for hobbyist yachtsmen and women!</p>
                    <button class="btn border text-white my-5 py-3 px-4">Learn More</button>
                </div>

            </div>

        </div>
        <div class="controls">
            <span v-for="(item, index) in store.banner" :key="index" @click="goToSlide(index)"
                :class="['dot', { active: index === activeIndex }]">
            </span>
        </div>
    
</template>





<style scoped lang="scss">
.ms_container {

    width: 100%;
    height: 100%;
}

.ms_slider {
    position: relative;
    overflow: hidden;
    height: 100vh;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 0;
}

.slide.active {
    opacity: 1;
    z-index: 1;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.controls {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.dot {
    width: 1rem;
    height: 1rem;
    margin: 0 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
}

.dot.active {
    background-color: #717171;
}

.txtOn {
    position: absolute;
    width: 100%;
    height: 100%;
        z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    
    .innerTxt {
        width: 80%;
        height: calc(100% - 35vh);
        display: flex;
        flex-direction: column;
        
        justify-content: center;
    }
    h1 {
        font-size: 10rem;
        padding: 2rem 0;
    }
    p {
        font-size: 2rem;
    }
    
}
</style>
  