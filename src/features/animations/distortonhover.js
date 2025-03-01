import hoverEffect from 'hover-effect'

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

function distordItemOnHover(parentClass, dispSrc) {
  const items = document.querySelectorAll(`.${parentClass}`);
  if (!items) return;
  Array.from(items).forEach((item) => {
    const imgs = Array.from(item.querySelectorAll('img'));
    const isInstaFeed = item.classList.contains('instagram-item');

    let speed = 1.3;
    let baseimg = imgs[1];
    if (baseimg.complete) {
      handleImageLoad();
    } else {
      baseimg.addEventListener("load", handleImageLoad);
    }

    function handleImageLoad() {
      let ratioWidth = baseimg.naturalWidth;
      let ratioHeight = baseimg.naturalHeight;
      if (!isTouchDevice) {
        new hoverEffect({
          parent: item,
          intensity: 0.1,
          image1: imgs[1].getAttribute('src'),
          image2: imgs[0].getAttribute('src'),
          displacementImage: dispSrc,
          speedIn: speed,
          speedOut: speed,
          imagesRatio: ratioHeight / ratioWidth
        });
      }
      // console.log(ratioWidth + ' x ' + ratioHeight);
    }

    // if (isInstaFeed) console.log(item + " " + ratioHeight + " " + ratioWidth);
    if (isTouchDevice) {
      imgs[1].style.display = 'block';
      let sibling = item.nextElementSibling;
      // console.log(sibling);
      if (sibling) {
        sibling.classList.add('notouchDetails');
        sibling.firstChild.classList.add('notouchDetails-title');
        let tagcontainer = sibling.querySelectorAll('.flex-center-up')
        tagcontainer.forEach(container => {
          if (container) container.classList.add('notouchDetails-tagcontainer');
        });

        // if (tagcontainer) tagcontainer.classList.add('.notouchDetails-tagcontainer');
        // if (tagcontainer) console.log(tagcontainer);
        let tags = sibling.querySelectorAll('.tag')
        tags.forEach(tag => {
          tag.classList.add('notouchDetails-tag');
        })
      };
      if (item.classList.contains('instagram-item')) {
        item.querySelector('.portfolio11_item_hoverinfo_container').style.display = 'none';
        console.log('.portfolio11_item_hoverinfo_container');
      }
    }
  })
}

function distordItemsOnHover() {
  let dispSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/6745c04d524317946ce3b3f5_disp4.png";
  let transitionSrc = "https://cdn.prod.website-files.com/673c64d37367ed96ed55b437/674526173907dab7fa665f3d_sand-light.jpg";

  distordItemOnHover("disp", dispSrc);
  distordItemOnHover("instagram-item", dispSrc);
}

export default distordItemsOnHover;