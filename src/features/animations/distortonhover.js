import hoverEffect from 'hover-effect';

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

function distordItemOnHover(parentClass, dispSrc) {
  const items = document.querySelectorAll(`.${parentClass}`);
  if (!items.length) return;

  Array.from(items).forEach((item) => {
    const imgs = Array.from(item.querySelectorAll('img'));
    if (imgs.length < 2) return;

    const baseimg = imgs[1];

    function initHoverEffect() {
      // **Check of item wél een breedte/hoogte heeft**
      const { width, height } = item.getBoundingClientRect();
      if (width === 0 || height === 0) {
        console.warn(`⏳ Wachten op ${parentClass} om zichtbaar te worden...`);
        requestAnimationFrame(initHoverEffect);
        return;
      }

      console.log(`✅ Init hoverEffect op ${parentClass} met ${width}x${height}`);

      if (!isTouchDevice) {
        new hoverEffect({
          parent: item,
          intensity: 0.1,
          image1: imgs[1].getAttribute('src'),
          image2: imgs[0].getAttribute('src'),
          displacementImage: dispSrc,
          speedIn: 1.3,
          speedOut: 1.3,
          imagesRatio: baseimg.naturalHeight / baseimg.naturalWidth
        });
      }
    }

    // **Wachten op correcte image load**
    if (baseimg.complete) {
      baseimg.decode().then(initHoverEffect).catch(() => initHoverEffect());
    } else {
      baseimg.addEventListener("load", () => {
        initHoverEffect();
      });
    }
  });
}

function distordItemsOnHover() {
  window.Webflow ||= [];
  window.Webflow.push(() => {
    let dispSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/6745c04d524317946ce3b3f5_disp4.png";

    // **Timeout om Webflow async loading te compenseren**
    setTimeout(() => {
      distordItemOnHover("disp", dispSrc);
      distordItemOnHover("instagram-item", dispSrc);
    }, 100);
  });
}

export default distordItemsOnHover;