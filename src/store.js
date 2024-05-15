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

  //CARDS WITH OVERLAY_________
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
  NewBanner: [
    {
      imgage: "bg7",
      title: "ENJOY",
      subtitle: "WORLD RALLY 2017-19",
      para: "Explore some of the most beautiful regions of the world. Make your dreams come true and join the Yachtec World Rally 2017-19.",
      buttonTxt: "More Details",
      button: "btn fw-bold btn-info text-white py-2 my-4",
      contBanner: "ms_containerBanner",
      imgStyle: "ms_innerBanner",
      txtCont: "ms_txtCont",
      bigtitle: "font-size: 10rem",
      titleSmall: " font-size: 3rem",
      parag: "font-size: 1.3rem",
    },
  ],
  bannerVideo: [
    {
      imgage: "none",
      title: "",
      subtitle:
        "With our help anyone with a love for sailing in his or her heart will be able to put it to practice!",
      buttonTxt: "Learn More",
      button: "btn fw-bold btn-info text-white py-2 my-4",
      contBanner: "ms_containerBannerVideo",
      imgStyle: "none",
      videoStyle: "ms_innerBannerVideo",
      txtCont: "ms_txtCont text-white ms-5 w-50",
      bigtitle: "fs-1",
      titleSmall: "fs-1 text-black",
      parag: "",
      video: "Boat-View-HD",
      para: "",
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
      icon: "fa-solid fa-anchor",
      category: "Range of Yachts",
      description:
        "With more than a dozen of different types of yachts available on our fleet, a devoted yachtsman of any particular taste will be able to pick the boat he or she needs…",
    },
    {
      icon: "fa-solid fa-user-tie",
      category: "Range of Services",
      description:
        "We offer a real variety of professional services, from the simple yachts chartering and corporate events, all the way to yacht repairs, upgrades and modifications and maintenance checkups.",
    },
    {
      icon: "fa fa-star",
      category: "Outstanding Quality",
      description:
        "With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!",
    },
    {
      icon: "fa fa-thumbs-up",
      category: "Fair Pricing",
      description:
        "Despite a truly amazing variety of services and yachts that we have, it is also truly mesmerizing that our pricing policy is such a fair one – affordable to almost any American!",
    },
  ],
  //________

  //TEAM
  teams: [
    {
      name: "Alex Buoyega",
      position: "Manager",
      description:
        "Mr. Buoyega was born in one of Detroit’s poorest blocks, all before pursuing his successful managerial career in the future. For him, the breakthrough happened when he was able to get on Harvard University’s Law School list. After graduating from there, he was working for a few years for a…",
      image: "persone1",
    },
    {
      name: "Kenneth Richardson",
      position: "Manager",
      description:
        "A talented and creative leader, Kenneth is known among his colleagues for how good his organizing and team leading skills are… Working priorly for a number of American and International multi-billion dollar companies, Kenneth has built up a reputation and a skillset worthy of an…",
      image: "person21",
    },
    {
      name: "Jonathan Christman",
      position: "Manager",
      description:
        "Being as a devoted family man as he is, it is incredible how Jonathan has time left for managing multi-million dollar contracts, satisfying all of our clients and managing a vast team of professionals under his command. His resolve is well-known, making him one of the few executive…",
      image: "persone3",
    },
    {
      name: "Martin Gray",
      position: "Manager",
      description:
        "Originally from London, at one point of his sophomore college year, Martin decided to turn the tables for his career and travel to the US, to try and get a Harvard MBA degree… Eventually, he succeeded in that, becoming one of the most respected executive managers in his field of work.",
      image: "persone4",
    },
    {
      name: "Mary Applebaum",
      position: "Manager",
      description:
        "A Juneau, Alaska native, Mrs. Applebaum has come a long way since her high school graduation all the way up to getting a Brown University Master’s degree in Economics. Talented with the digits, she’s no less successful when it comes to managing the human resources of the company. Ask anyone at our office who…",
      image: "persone5",
    },
    {
      name: "Elisa Hansolo",
      position: "Manager",
      description:
        "Born in New York City, Elisa always felt a strong urge for being an ambitious overachiever. Eventually, by the age of 25 she already had received her first Wall Street executive position, making her one of the youngest managers in the company. With her overall work experience spanning over 2 decades, Mrs. Hansolo is definitely the kind of a senior…",
      image: "persone6",
    },
    {
      name: "Emily Bluesome",
      position: "Manager",
      description:
        "If you’d ask any of our workers, who is the executive manager that they’re always looking up and living up to, most likely Emily’s name will surface. Having a vast and thorough practical working experience lasting for more than 18 years, Mrs. Bluesome is an ideal manager, who is always…",
      image: "persone7",
    },
    {
      name: "Dieane Beaton",
      position: "Manager",
      description:
        "If you’d ever need to figure out a workaround for a complicated business problem, look no further than Diane’s desk for getting a thorough and all-rounded advice. She has been working in the industry for more than 20 years, knowing all the ins and outs perfectly and teaching each member of our team. Regardless of which exact type…",
      image: "persone8",
    },
  ],

  heroHomeTop:[
    {
      contBanner: "ms_containerBanner justify-content-end",
      imgStyle: "ms_innerBanner",
      imgage: "bg4",
      videoStyle: "none",
      video: "",
      txtCont: "ms_txtCont text-dark align-items-start m-auto ",
      bigtitle: "titleHeroTop fs-1",
      title: "Our History",
      titleSmall: "fw-bold fs-5",
      subtitle: "Founded by a worldwide-famous yacht racer Alfred Tannenstrick, since its inception back in 1977, this company has been a welcoming harbor for all yachting and sailing enthusiasts, from all across the US!",
      parag:"",
      para:"We offer a real variety of professional services, from the simple yachts chartering and corporate events, all the way to yacht repairs, upgrades and modifications and maintenance checkups.",
      parag1:"",
      para1:"With decades of professional experience in renting, repairing and transporting just all kinds of yachts and boats under our belt – we can assure you that we are your best choice!",
      button:"btn fw-bold btn-info text-white py-2 my-4",
      buttonTxt:"Read More"
    }
  ],

  heroHomeBottom:[
    {
      contBanner: "ms_containerBanner",
      imgStyle: "ms_innerBanner",
      imgage: "bg5",
      videoStyle: "none",
      video: "",
      txtCont: "ms_txtCont text-dark align-items-start m-auto ",
      bigtitle: "titleHeroTop",
      title: "Yacht Charters, Repairs & Transportation, US-wide!",
      titleSmall: "",
      subtitle: "",
      parag:"",
      para:"",
      parag1:"",
      para1:"",
      button:"btn fw-bold btn-info text-white py-2 my-4",
      buttonTxt:"More Details"
    }
  ],

  postArray: [
    {
        img: "post1",
        alt: "ride the waves",
        date: "December 16, 2020",
        discussion: "Is Greece a Good Choice for Yacht Sailing?",
        container: "d-flex flex-column align-items-center",
    },
    {
        img: "post2",
        alt: "relax on boat",
        date: "December 16, 2020",
        discussion: "Seattle Yachts and Northwest Yachts Announce Merger",
        container: "d-flex flex-column align-items-center",
    },
    {
        img: "post3",
        alt: "ship's rudder",
        date: "December 16, 2020",
        discussion: "Video: Superyacht ‘Project Jupiter’ Launched By Lurssen",
        container: "d-flex flex-column align-items-center",
    }
],
});
