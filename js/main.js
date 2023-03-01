const mobileMenuBtn = document.querySelector(".mobile-navigation__btn");
const menuListBtn = document.querySelector(".mobile-menu__btn");
const menuPage = document.querySelector(".mobile-menu");
const mobileMenu = document
  .querySelector(".mobile-navigation__content")
  .querySelector(".modal");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("modal--open");
  menuPage.classList.add("mobile-menu--open");
  menuPage.classList.remove("mobile-menu--close");
  document.querySelector("body").style.position = "fixed";
});

menuListBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("modal--open");
  menuPage.classList.add("mobile-menu--close");
  menuPage.classList.remove("mobile-menu--open");
  document.querySelector("body").style.position = "relative";
});
