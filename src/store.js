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
  headerLinks: [
    {
      linkName: "SERVICES",
    },
    {
      linkName: "YACHTS",
    },
    {
      linkName: "RESERVATION",
    },
    {
      linkName: "BLOG",
    },
    {
      linkName: "CONTACTS",
    },
  ],
  cardsHome: [
    {
      icon: "fa-solid fa-anchor",
      title: "Yacht Rentals",
      para: "With more than two hundred yacht and boat models on our fleet and both the East and the West coasts covered, we are able to offer you the best yacht chartering options.",
    },
    {
      icon: "fa-solid fa-user-tie",
      title: "Management",
      para: "On par with providing an amazing range of rentals on boats and yachts of all sizes and comfort levels, we will also gladly pick up on providing all kinds of maintenance…",
    },
    {
      icon: "fa-solid fa-truck",
      title: "Transportation",
      para: "Whenever any of our clients wants to try some brand new sailing destination or make a place of residence move to another water area – there comes the issue of logistics.",
    },
    {
      icon: "fa fa-star",
      title: "Yacht Repair",
      para: "With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!",
    },
    {
      icon: "fa fa-thumbs-up",
      title: "Yacht Upgrades",
      para: "As far as any personally-owned vehicles are concerned, whether we are talking about cars with four wheels, bikes with two wheels or yachts with no wheels, owners do…",
    },
    {
      icon: "fa-solid fa-suitcase",
      title: "Corporate Events",
      para: "When it comes to organizing a corporate yacht charter of a Fortune 500 scale for a big crew of people – we will be able to make it flawless.We will exceed your expectations!",
    },
  ],
  cardsHomeServices: [
    {
      img: "services-1",
      icon: "fa-solid fa-anchor",
      txt: "Express",
    },
    {
      img: "services1",
      icon: "fa-solid fa-anchor",
      txt: "Cruisers",
    },
    {
      img: "services2",
      icon: "fa-solid fa-anchor",
      txt: "Sports Cruisers",
    },
    {
      img: "services3",
      icon: "fa-solid fa-anchor",
      txt: "Flybridges",
    },
    {
      img: "services4",
      icon: "fa-solid fa-anchor",
      txt: "Sedan Bridges",
    },
    {
      img: "services5",
      icon: "fa-solid fa-anchor",
      txt: "Tri-Deck",
    },
    {
      img: "services6",
      icon: "fa-solid fa-anchor",
      txt: "Megayachts",
    },
    {
      img: "services7",
      icon: "fa-solid fa-anchor",
      txt: "Convertibles",
    },
  ],
  toggleMenu() {
    this.isOpen = !this.isOpen;
  },
  getUrlPath(img) {
    return new URL(`../assets/${img}.jpg`, import.meta.url).href;
  },
  //_______________________
  
  // CARDS
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
  //________

  //CARDS WITH OVERLAY
});
