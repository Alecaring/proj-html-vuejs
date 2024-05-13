<script>
import AppFooterBottom from './AppFooterBottom.vue';

export default {
    data() {
        return {};
    },
    components: { AppFooterBottom }
}
</script>

<template>
    <section class="container-fluid d-flex justify-content-between align-items-center py-5 px-5 bg-body-secondary">
        <div class="col-4 py-5 d-flex flex-column justify-content-center align-itens-center">
            <img class="w-75" src="../assets/logo.png" alt="">
            <p class="fs-5 mt-3 px-4 fw-lighter">Yacht rentals for people who love sailing across the seas…</p>
        </div>
        <div class="col-2 py-5">
            <ul class="list-group">
                <li class="fw-bold list-group-item border-0 bg-transparent">YATCH</li>
                <li class="fw-bold list-group-item border-0 bg-transparent">SERVICES</li>
                <li class="fw-bold list-group-item border-0 bg-transparent">RESERVATION</li>
            </ul>
        </div>
        <div class="col-2 py-5">
            <ul class="list-group">
                <li class="fw-bold list-group-item border-0 bg-transparent">BLOG</li>
                <li class="fw-bold list-group-item border-0 bg-transparent">PRIVACY POLICY</li>
                <li class="fw-bold list-group-item border-0 bg-transparent">TERMS OF US</li>
            </ul>
        </div>
        <div class="col-4 py-5">
            <div>
                <label class="pb-4 fs-2 fw-bold" for="newsLetter">Newsletter</label>
            </div>
            <input class="w-75 btn text-start border border-end-0 border-secondary rounded-0 py-3" type="seach" id="newsLetter"
                placeholder="Enter your e-Mail here">
            <button class="w-25 btn bg-info text-white rounded-0 py-3 fw-bold">Subscribe</button>
        </div>
    </section>
    <AppFooterBottom />
</template>


<style lang="scss" scoped>
li:hover {
    color: #0dcaf0;
}
</style>