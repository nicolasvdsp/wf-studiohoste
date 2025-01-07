import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

const triggerParams = (element, start, end) => {
  return {
    trigger: element,
    start: `top ${start}%`,
    end: `bottom ${end}%`,
    toggleActions: "play none none reverse",
  }
}

//reveals elements when scrolling into viewport
function revealElementOnScroll(element) {
  gsap.fromTo(
    element,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "sine.out",
      stagger: 2,
      scrollTrigger: triggerParams(element, 90, 60)
    }
  )
}

//reveals text with a stagger effect when scrolling into viewport
function revealTextElementsOnScoll(element) {
  const delay = element.classList.contains("revealwithdelay") ? 4 : 0;
  const isH1 = element.tagName === "H1" ? true : false;
  const yValue = isH1 ? 80 : 60;
  // const yValue = 80;
  const duration = .4;
  const stagger = .06;
  const easing = "sine.out";

  let reveal = new SplitText(element, {
    type: "words, lines",
    linesClass: "line line++",
    lineThreshold: 0.6
  });

  gsap.from(reveal.lines, {
    delay: delay,
    stagger: stagger,
    duration: duration,
    ease: easing,
    y: -20,
    scrollTrigger: triggerParams(element, 90, 60)
  });

  gsap.from(reveal.words, {
    delay: delay,
    stagger: stagger,
    duration: duration,
    ease: easing,
    y: yValue,
    scrollTrigger: triggerParams(element, 90, 60),
    onComplete: !isH1 ? () => {
      reveal.revert();
    } : null
  });
}

function allGsapAnimations() {
  let textElements = document.querySelectorAll(".revealtextonscroll");
  textElements.forEach(el => {
    revealTextElementsOnScoll(el);
  });

  let elements = document.querySelectorAll(".revealelementonscroll");
  elements.forEach(el => {
    revealElementOnScroll(el);
  });
}

export default allGsapAnimations;