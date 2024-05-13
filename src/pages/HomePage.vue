<script>
export default {
    data(){
        return{
            
        }
    }
};
</script>

<template>
    <h1>HOME</h1>
    <section>
        <router-link :to="{ name: 'about' }">Scopri di più</router-link>
        <router-link :to="{ name: 'contacts' }">Contatti</router-link>
    </section>
</template>

<style scoped></style>