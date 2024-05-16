<script> 
export default {
    props:{
        cardObj: Object,
    },
    data(){
        return{
            
        }
    },
    methods:{
        getUrlPath(img) {
            return new URL(`../assets/${img}.jpg`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <section :class="cardObj.container">
        <h2 class="text-center"></h2>
        <img :class="cardObj.imgStyle" :src="getUrlPath(cardObj.img)" :alt="cardObj.alt">
        <p :class="cardObj.styleDate">{{ cardObj.date }}</p>
        <p :class="cardObj.styleDiscussion">{{ cardObj.discussion }}</p>
    </section>
    
</template>

<style scoped>

</style>