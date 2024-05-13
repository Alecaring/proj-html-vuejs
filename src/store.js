import { reactive } from "vue";
export const store = reactive ({
    isOpen: false,
    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
});