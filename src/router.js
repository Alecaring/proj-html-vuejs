import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import ServicesPage from "./pages/ServicesPage.vue";
import ReservationPage from "./pages/ReservationPage.vue";
import BlogPage from "./pages/BlogPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage,
        },
        {
            path: "/services",
            name: "services",
            component: ServicesPage,
        },
        {
            path: "/reservation",
            name: "reservation",
            component: ReservationPage,
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogPage,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsPage,
        },
    ],
});