import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollSmoother);

function smoothscrolling() {

  let smoother = ScrollSmoother.create({
    smooth: 1.25,
  });
}

export default smoothscrolling;