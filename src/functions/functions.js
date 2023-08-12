function focusOnSection(id) {
  const section = document.getElementById(id);
  section.focus()
  const offsetPixels = 150; // Adjust this value as needed
  console.log('focussing')
  window.scrollTo({
    top: section.offsetTop - offsetPixels,
    behavior: 'smooth'
  });
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Use 'auto' for instant scrolling
  });
}
export {focusOnSection ,scrollToTop}