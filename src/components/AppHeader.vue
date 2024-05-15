<script>
import { store } from "../store";
import AppHeaderBottom from "./AppHeaderBottom.vue";
import Search from "./Search.vue";

export default {
    components: { Search, AppHeaderBottom },
    data() {
        return {
            store,
            navbar: false,
        }
    },
    computed: {
        isHome() {
            return this.$route.name === 'home';
        }
    },
    mounted() {
        window.addEventListener("scroll", this.getScroll)
        
    },
    methods: {
        getScroll() {
            if(this.isHome){
                this.navbar = window.scrollY > 10
            }
        }
    }
};
</script>

<template>
    <div :class="navbar === true ? 'none': '' ">
        <section :class="isHome ? 'bg-trasparent position-fixed ms_zindex ms_sticky' : 'bg-dark'" id="myNav"
            class="ms_header container-fluid py-4 px-5 d-flex align-items-center justify-content-between">

            <div class="py-3">

                <!-- HOME -->
                <router-link :to="{ name: 'home' }">
                    <img src="../assets/logo (1).png" alt="">
                </router-link>

            </div>
            <div class="py-3">
                <ul class="list-group d-flex flex-row">

                    <!-- ABOUT -->
                    <li class="fw-bold list-group-item bg-transparent border-0"><small>
                            <router-link class="text-white link-offset-2 link-underline link-underline-opacity-0"
                                :to="{ name: 'about' }">
                                ABOUT</router-link>
                        </small></li>

                    <!-- SERVICES -->
                    <li class="text-white fw-bold list-group-item bg-transparent border-0"><small>
                            <router-link class="text-white link-offset-2 link-underline link-underline-opacity-0"
                                :to="{ name: 'services' }">
                                SERVICES
                            </router-link>
                        </small></li>

                    <!-- YACHTS -->
                    <li class="text-white fw-bold list-group-item bg-transparent border-0"><small>YACHTS</small></li>

                    <!-- RESERVATION -->
                    <li class="text-white fw-bold list-group-item bg-transparent border-0"><small>
                            <router-link class="text-white link-offset-2 link-underline link-underline-opacity-0"
                                :to="{ name: 'reservation' }">
                                RESERVATIONS
                            </router-link>
                        </small></li>

                    <!-- BLOG -->
                    <li class="text-white fw-bold list-group-item bg-transparent border-0"><small>
                            <router-link class="text-white link-offset-2 link-underline link-underline-opacity-0"
                                :to="{ name: 'blog' }">
                                BLOG
                            </router-link>
                        </small></li>

                    <!-- contacts -->
                    <li class="text-white fw-bold list-group-item bg-transparent border-0"><small>
                            <router-link class="text-white link-offset-2 link-underline link-underline-opacity-0"
                                :to="{ name: 'contacts' }">
                                CONTACTS
                            </router-link>
                        </small></li>
                </ul>
            </div>
            <div class="py-3">
                <i @click="store.toggleMenu()" class="text-white fs-5 bi bi-search"></i>
            </div>
            <Search />
        </section>
    </div>
    <AppHeaderBottom :class="isHome ? 'd-none' : ''" />
</template>

<style lang="scss" scoped>
.ms_header {
    height: 15vh;
}

.ms_spaces {
    padding: 25vh 0 0;
}

.ms_zindex {
    z-index: 99999;
}

.ms_sticky {
    transition: opacity 0.5s;
}

.none{
    opacity: 0;
    transition: ease-in-out 0.5s;
}

</style>