import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

const triggerParams = (element, start, end) => {
  return {
    trigger: element,
    start: `top ${start}%`,
    end: `bottom ${end}%`
    // ...(end && { end: `bottom ${end}%` })
  }
}

//reveals elements when scrolling into viewport
function revealElementOnScroll(element) {
  element.classList.remove("revealElementOnScroll");
  const instantReveal = element.classList.contains("instantReveal") ? true : false;
  if (instantReveal) console.log("now");
  CustomEase.create("custom", "M0,0 C0.2,0 0.2,0 0.2,0 0.447,0 0.769,1 1,1 ");
  gsap.fromTo(
    element,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      // delay: 2,
      // duration: !instantReveal ? 1.8 : 1,
      ease: !instantReveal ? "custom" : "sine.out",
      // stagger: 2,
      scrollTrigger: !instantReveal ? triggerParams(element, 90, 70) : null
    }
  )
}

//reveals text with a stagger effect when scrolling into viewport
function revealTextElementsOnScroll(element) {
  element.classList.remove("revealTextOnScroll");
  const revealWithDelay = element.classList.contains("revealWithDelay") ? true : false;
  const delay = revealWithDelay ? 1.6 : null;
  const isP = element.tagName === "P" ? true : false;
  const isH1 = element.tagName === "H1" ? true : false;
  const yValue = '100%';
  const duration = .5;
  const stagger = 0.07;
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
    scrollTrigger: !delay ? triggerParams(element, 90, 70) : null,
  });

  gsap.from(reveal.words, {
    delay: delay,
    stagger: stagger,
    duration: duration,
    ease: easing,
    y: yValue,
    scrollTrigger: !delay ? triggerParams(element, 90, 70) : null,
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
    revealTextElementsOnScroll(el);
  });

  let elements = document.querySelectorAll(".revealElementOnScroll");
  if (elements) elements.forEach(el => {
    revealElementOnScroll(el);
  });
}

export default allGsapAnimations;