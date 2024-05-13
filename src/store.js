import { reactive } from "vue";
export const store = reactive ({
    isOpen: false,
    banner: [
        {
            img: "bg1-1",
            alt: "Enjoy the best 1",
        },
        {
            img: "bg2",
            alt: "Enjoy the best 2",
        },
        {
            img: "bg3",
            alt: "Enjoy the best 3",
        }
    ],
    toggleMenu() {
        this.isOpen = !this.isOpen;
    },
    getUrlPath(img) {
        return new URL(`../assets/${img}.jpg`, import.meta.url).href;
    }
});