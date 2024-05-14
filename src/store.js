import { reactive } from "vue";
export const store = reactive({
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
    },
  ],
  toggleMenu() {
    this.isOpen = !this.isOpen;
  },
  getUrlPath(img) {
    return new URL(`../assets/${img}.jpg`, import.meta.url).href;
  },
});

export const storeYacht = reactive({
  yachtInfo: [
    {
      category: "Range of Yachts",
      description:
        "With more than a dozen of different types of yachts available on our fleet, a devoted yachtsman of any particular taste will be able to pick the boat he or she needs…",
    },
    {
      category: "Range of Services",
      description:
        "We offer a real variety of professional services, from the simple yachts chartering and corporate events, all the way to yacht repairs, upgrades and modifications and maintenance checkups.",
    },
    {
      category: "Outstanding Quality",
      description:
        "With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!",
    },
    {
      category: "Fair Pricing",
      description:
        "Despite a truly amazing variety of services and yachts that we have, it is also truly mesmerizing that our pricing policy is such a fair one – affordable to almost any American!",
    },
  ],
});
