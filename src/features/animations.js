import hoverEffect from 'hover-effect'

function distordProjectOnHover() {
  Array.from(document.querySelectorAll(".disp")).forEach((item) => {
    const imgs = Array.from(item.querySelectorAll('img'));
    let speed = .75;
    let dispSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/6745c04d524317946ce3b3f5_disp4.png";

    new hoverEffect({
      parent: item,
      intensity: 0.1,
      image1: imgs[1].getAttribute('src'),
      image2: imgs[0].getAttribute('src'),
      displacementImage: dispSrc,
      speedIn: speed,
      speedOut: speed
    });
  })
}

export default distordProjectOnHover;