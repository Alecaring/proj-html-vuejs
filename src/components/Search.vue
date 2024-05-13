<script>
import { store } from '../store';
export default {
data() {
    return {
        store,
    }
},
methods: {
   
}
}
</script>

<template>
    <div v-if="store.isOpen" class="ms_modal d-flex justify-content-center align-items-center">
        <i @click="store.toggleMenu()" class="ms_close bi bi-x-lg"></i>
        <div class="d-flex flex-column">
            
            <div>
                <input class="bg-transparent text-white border-0 border-bottom py-2 px-4 fs-4" type="search" aria-label="search" id="search" placeholder="inserisci qui">
                <button class="btn btn-info ms-3 py-2 border-0 px-3 fs-4">cerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: rgb(24, 22, 32);

    .ms_close {
        position: absolute;
        top: 10%;
        right: 6%;
        font-size: 2rem;
        color: white;
    }

}
</style>