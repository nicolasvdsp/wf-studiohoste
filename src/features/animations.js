import hoverEffect from 'hover-effect'

import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

function distordItemOnHover(parentClass, dispSrc, isBgImage = false) {
  Array.from(document.querySelectorAll(`.${parentClass}`)).forEach((item) => {
    const imgs = isBgImage ?
      item.querySelector('img').getAttribute('src') :
      Array.from(item.querySelectorAll('img'));

    let speed = 1.3;

    new hoverEffect({
      parent: item,
      intensity: 0.1,
      image1: isBgImage ? imgs : imgs[1].getAttribute('src'),
      image2: isBgImage ? isBgImage : imgs[0].getAttribute('src'),
      displacementImage: dispSrc,
      speedIn: speed,
      speedOut: speed
    });
  })
  // console.clear();
}

function distordItemsOnHover() {
  let dispSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/6745c04d524317946ce3b3f5_disp4.png";
  let transitionSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/674526173907dab7fa665f3d_sand-light.jpg";

  distordItemOnHover("disp", dispSrc);
  distordItemOnHover("instagram-item", dispSrc);
}

function animateHeader() {
  const heading = document.querySelector(".heading-animation");
  const firstWords = ["Verfijnd", "Esthetische"]
  const secondWords = ["interieur", "architectuur"]

  const headingText = heading.textContent.trim();
  const words = headingText.split(' ');

  if (words.length >= 2) {
    const firstWord = words[0]
    const secondWord = words[1]

    const firstSpan = document.createElement('span');
    const secondSpan = document.createElement('span');
    const spanContainer = document.createElement('div');

    firstSpan.textContent = `${firstWord}`;
    secondSpan.textContent = `${secondWord}`;

    firstSpan.classList.add('word1');
    secondSpan.classList.add('word2');
    spanContainer.classList.add('span-container');

    const remainingText = words.slice(2).join(' ');
    heading.textContent = '';

    heading.appendChild(spanContainer);
    spanContainer.appendChild(firstSpan);
    spanContainer.appendChild(document.createTextNode(' '));
    spanContainer.appendChild(secondSpan);
    heading.appendChild(document.createTextNode(remainingText));

    let firstIndex = 0;
    let secondIndex = 0;

    firstSpan.classList.add('cycle');
    setTimeout(() => {
      secondSpan.classList.add('cycle');
    }, 300);

    setInterval(() => {
      firstIndex = (firstIndex + 1) % firstWords.length;
      firstSpan.textContent = firstWords[firstIndex];

      setTimeout(() => {
        secondIndex = (secondIndex + 1) % secondWords.length;
        secondSpan.textContent = secondWords[secondIndex];
      }, 300);

    }, 6000);

  }
}

function gsapAnimation(element) {
  const duration = .7;
  const stagger = .06;
  const easing = "sine.out";
  const triggerParams = (element, start, end) => {
    return {
      trigger: element,
      start: `top ${start}%`,
      end: `bottom ${end}%`,
      toggleActions: "play none none reverse",
    }
  }

  let reveal = new SplitText(element, {
    type: "words, lines",
    linesClass: "line line++",
    lineThreshold: 0.6
  });

  gsap.from(reveal.lines, {
    stagger: stagger,
    duration: duration,
    ease: easing,
    y: -20,
    scrollTrigger: triggerParams(element, 90, 60)
  });

  gsap.from(reveal.words, {
    stagger: stagger,
    duration: duration,
    ease: easing,
    y: 50,
    scrollTrigger: triggerParams(element, 90, 60)
  });
}

function allGsapAnimations() {
  let elements = document.querySelectorAll(".revealonscroll");
  elements.forEach(element => {
    gsapAnimation(element);
  });
}

function customAnimations() {
  distordItemsOnHover();
  animateHeader();
  allGsapAnimations();
}

export default customAnimations;