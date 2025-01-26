function updateAfterWidth() {
  //.btn-nav::after
  const breakpoint = 991; // Example: 768px
  const newWidth = window.innerWidth < breakpoint ? '7.5rem' : '100%';

  document.documentElement.style.setProperty('--after-width', newWidth);
}

function currentPage() {
  const currentPath = window.location.pathname;

  const navLinks = Array.from(document.querySelectorAll('nav a'));
  // Controleer welke link overeenkomt met de huidige path
  navLinks.forEach(link => {
    const href = link.getAttribute('href'); // Haal href van de link
    if (currentPath === href) {
      link.classList.add('active'); // Voeg de 'active' klasse toe
    }
  });
}

// Run on page load and whenever the window resizes
function navbar() {
  window.addEventListener('resize', updateAfterWidth);
  updateAfterWidth();
  currentPage();
}

export default navbar;