const mobileNavBar = document.getElementById("mobileNavBar");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");

openMenuButton.addEventListener("click", ((e) => {
  e.stopPropagation();

  mobileNavBar.classList.add("active");
  document.body.classList.add("menu-open");
}));

closeMenuButton.addEventListener("click", ((e) => {
  e.stopPropagation();

  mobileNavBar.classList.remove("active");
  document.body.classList.remove("menu-open");
}));