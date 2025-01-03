function updateAfterWidth() {
  const breakpoint = 991; // Example: 768px
  const newWidth = window.innerWidth < breakpoint ? '7.5rem' : '100%';

  // Update the CSS variable
  document.documentElement.style.setProperty('--after-width', newWidth);
}

// Run on page load and whenever the window resizes

function navbar() {
  window.addEventListener('resize', updateAfterWidth);
  updateAfterWidth();
}

export default navbar;