function hideLastDivsOfFeed(n) {
  const instagramFeed = document.querySelector('.instagramfeed');
  if (!instagramFeed) return;
  const divs = instagramFeed.querySelectorAll(':scope > div');

  const mediaQuery = window.matchMedia('(max-width: 991px)');

  const toggleDisplay = (e) => {
    for (let i = 0; i < n; i++) {
      divs[divs.length - 1 - i].style.display = e.matches ? 'none' : 'block';
    }
  };

  if (mediaQuery.matches) toggleDisplay(mediaQuery);

  mediaQuery.addEventListener('change', toggleDisplay);
}


function changesOnBreakpoints() {
  hideLastDivsOfFeed(2);
}

export default changesOnBreakpoints;