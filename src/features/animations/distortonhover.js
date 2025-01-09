import hoverEffect from 'hover-effect'

function distordItemOnHover(parentClass, dispSrc, isBgImage = false) {
  const items = document.querySelectorAll(`.${parentClass}`);
  if (!items) return;
  Array.from(items).forEach((item) => {
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
}

function distordItemsOnHover() {
  let dispSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/6745c04d524317946ce3b3f5_disp4.png";
  let transitionSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/674526173907dab7fa665f3d_sand-light.jpg";

  distordItemOnHover("disp", dispSrc);
  distordItemOnHover("instagram-item", dispSrc);
}

export default distordItemsOnHover;