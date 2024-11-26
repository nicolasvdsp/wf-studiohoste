import hoverEffect from 'hover-effect'

function distordProjectOnHover() {
  Array.from(document.querySelectorAll(".disp")).forEach((item) => {
    const imgs = Array.from(item.querySelectorAll('img'));
    let speed = 1.3;
    new hoverEffect({
      parent: item,
      intensity: 0.3,
      image1: imgs[1].getAttribute('src'),
      image2: imgs[0].getAttribute('src'),
      displacementImage: 'https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/674518a6d6a4f4c1ceec5ef8_disp2.png',
      speedIn: speed,
      speedOut: speed
    });
  })
}

export default distordProjectOnHover;