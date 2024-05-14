<script>
export default {
    props: {
        cardObj: Object,
    },
    methods: {
        getUrlPath(img) {
            return new URL(`../assets/${img}.jpg`, import.meta.url).href;
        },
    }
};
</script>

<template>
    <div class="card bg-transparent border-0 my-4 border ms_card m-0">
        <div class="d-flex align-items-center justify-content-start w-100 m-auto py-0">

            <img :src="getUrlPath(cardObj.img)" alt="">

        </div>
        <div class="hover">
            <i :class="cardObj.icon"></i>
            <h3 class="pt-2">{{ cardObj.txt }}</h3>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_card {
    position: relative;
    overflow: hidden;
    &:hover .hover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.273);