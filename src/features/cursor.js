function noCursor() {
  const wrappersWithoutCursor = document.querySelectorAll(".no-cursor");

  wrappersWithoutCursor.forEach((wrapper) => {
    wrapper.addEventListener('mouseenter', () => {
      document.body.style.cursor = "none";
    });

    wrapper.addEventListener('mouseleave', () => {
      document.body.style.cursor = "";
    });
  });
}

export default noCursor;