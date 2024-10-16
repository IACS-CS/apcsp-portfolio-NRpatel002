import "../styles/styles.css";
//import "@picocss/pico/css/pico.min.css"; 
import Aos from "aos";
import "aos/dist/aos.css";



Aos.init();
console.log("Hello world, from main.js!");

import anime from "animejs/lib/anime.es.js";
anime({
  targets: ".box",
  translateX: 250,
  rotate: "1turn",
  duration: 1000,
});

