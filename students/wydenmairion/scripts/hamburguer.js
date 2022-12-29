const menu = document.getElementById("menu-hamburguer");
const nav = document.getElementById("nav");

const hamburguerMenu = () => {
  if (nav.style.display == "none") {
    nav.style.display = "flex";
    return;
  }
  nav.style.display = "none";
};

menu.addEventListener("click", hamburguerMenu);
