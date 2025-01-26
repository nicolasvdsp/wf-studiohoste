import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollSmoother);

function smoothscrolling() {

  let smoother = ScrollSmoother.create({
    smooth: 1.5,

  });
}

export default smoothscrolling;