const $btnMenu = document.querySelector("#btn-menu");
const $menu = document.querySelector("#menu");

// Evento menu hamburguesa
$btnMenu.addEventListener("click", () => {
  $menu.classList.toggle("active");
});
