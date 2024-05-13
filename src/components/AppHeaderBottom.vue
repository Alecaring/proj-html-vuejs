<script>
export default {
    components: {},
};
</script>
  
<template>
    <section class="headerBottom container-fluid bg-body-secondary py-3 px-4">
        <small><span class="px-2 fw-bold">
            <router-link class="text-dark link-offset-2 link-underline link-underline-opacity-0" :to="{ name: 'home' }">
            HOME
            </router-link>
        </span></small>
        <small><span class="px-2 fw-bold">|</span></small>
        <small><span class="px-2 fw-bold text-info">CONTACTS</span></small>
    </section>
</template>

<style lang="scss" scoped>
.headerBottom {
    position: fixed;
    top: 15vh;
    z-index: 1;
}
</style>