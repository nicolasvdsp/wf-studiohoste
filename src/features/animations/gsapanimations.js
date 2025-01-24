import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

const triggerParams = (element, start, end) => {
  return {
    trigger: element,
    start: `top ${start}%`,
    ...(end && { end: `bottom ${end}%` })
  }
}

//reveals elements when scrolling into viewport
function revealElementOnScroll(element) {
  element.classList.remove("revealelementonscroll");
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
  element.classList.remove("revealTextOnScroll");
  const delay = element.classList.contains("revealWithDelay") ? 4 : null;
  const isP = element.tagName === "P" ? true : false;
  const isH1 = element.tagName === "H1" ? true : false;
  const yValue = '100%';
  const duration = 1;
  const stagger = 0.2;
  const easing = "sine.out";

  let reveal = new SplitText(element, {
    type: isP ? "lines" : "words, lines",
    linesClass: "line line++"
  });

  let reveal_child = new SplitText(reveal.lines,
    {
      type: "lines",
      linesClass: "lineChild"
    }
  )

  gsap.from(reveal_child.lines, {
    delay: delay,
    stagger: stagger,
    duration: duration,
    ease: easing,
    y: yValue,
    scrollTrigger: !delay ? triggerParams(element, 90, 60) : null,
  });

  gsap.from(reveal.words, {
    delay: delay,
    stagger: stagger,
    duration: duration,
    ease: easing,
    y: yValue,
    scrollTrigger: !delay ? triggerParams(element, 90, 60) : null,
    onComplete: !isH1 ? () => {
      setTimeout(() => {
        reveal.revert();
      }, 1000);
    } : null
  });
}

function allGsapAnimations() {
  let textElements = document.querySelectorAll(".revealTextOnScroll");
  if (textElements) textElements.forEach(el => {
    revealTextElementsOnScoll(el);
  });

  let elements = document.querySelectorAll(".revealelementonscroll");
  if (elements) elements.forEach(el => {
    revealElementOnScroll(el);
  });
}

export default allGsapAnimations;