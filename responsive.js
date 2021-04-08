const navLinks = document.querySelector(".nav-links");

const menu = document.querySelector(".fa-bars");



menu.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  } else {
    navLinks.classList.add("active");
  }
});
