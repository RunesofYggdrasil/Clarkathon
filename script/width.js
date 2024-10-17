function handlePageWidth() {
  const root = document.querySelector(":root");
  const innerWidth = window.innerWidth;
  const scrollbarWidth = innerWidth - root.clientWidth;
  const pageWidth = innerWidth - scrollbarWidth - 16;
  root.style.setProperty("--page-width", pageWidth + "px");
}
window.addEventListener("load", () => {
  handlePageWidth();
});
window.addEventListener("resize", () => {
  handlePageWidth();
});
