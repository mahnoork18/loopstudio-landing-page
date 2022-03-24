const btnMenu = document.querySelector("#ham");
const closeBnt = document.querySelector("#close");
function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.add("show");
}
function closeMenu() {
  mobileMenu.classList.remove("show");
}
btnMenu.addEventListener("click", toggleMenu);
closeBnt.addEventListener("click", closeMenu);
