// let Vimeo = require('vimeo').Vimeo;

function popupVimeoPlayer() {

  let vimeoPopup = document.querySelector(".vimeo-popup-wrapper");
  let noCursorZone = document.querySelector(".no-cursor");

  let vimeoVideo = vimeoPopup.querySelector("iframe");
  let vimeoSrc = vimeoVideo.src;

  noCursorZone.addEventListener('click', () => {
    showPopup();
  })

  vimeoPopup.addEventListener('click', () => {
    hidePopup();
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && vimeoPopup.style.display != "none") {
      hidePopup();
    }
  })

  function showPopup() {
    vimeoPopup.style.display = "flex";
  }
  function hidePopup() {
    vimeoPopup.style.display = "none";
    vimeoVideo.src = vimeoSrc;
  }

}

export default popupVimeoPlayer;