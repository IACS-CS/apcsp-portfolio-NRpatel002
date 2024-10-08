import "../styles/styles.css";
import "@picocss/pico/css/pico.min.css"; 
import Aos from "aos";
import "aos/dist/aos.css";

// Initialize AOS (Animate On Scroll) library
if (typeof window !== "undefined") {
  Aos.init();
  console.log("Hello world, from main.js!");
}
