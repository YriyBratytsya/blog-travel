let heart = document.querySelectorAll(".hearts");

heart.forEach((items) => {
  items.addEventListener("click", function () {
    if (items.classList.contains("heart-active")) {
      items.classList.remove("heart-active");
      items.classList.add("hearts");
    } else {
      items.classList.add("heart-active");
      items.classList.remove("hearts");
    }
  });
});

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu-wrap");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});
