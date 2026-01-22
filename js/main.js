//JavaScript para abrir/cerrar el menú latera
const sideMenu = document.querySelector("#sideMenu");
const toggleBtn = document.querySelector(".open-menu");

toggleBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    toggleBtn.classList.toggle("active");

    toggleBtn.textContent =
        sideMenu.classList.contains("active") ? "✖" : "☰";
});