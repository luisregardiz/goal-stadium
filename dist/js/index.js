const menuResponsive = document.querySelector("#bg-menu-responsive");
const sidebarResponsive = document.querySelector("#sidebar-responsive");
const btnMenu = document.querySelector("#btn-menu");

const svgX = `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`;

const svgMenu = `<svg
xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewbox="0 0 24 24"
stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>`;

btnMenu.addEventListener("click", () => {
    if (menuResponsive.classList.contains("hidden")) {
        menuResponsive.classList.remove("hidden");
        btnMenu.innerHTML = svgX;
        sidebarResponsive.classList.add(
            "animate__animated",
            "animate__fadeInLeft",
            "animate__faster"
        );
    } else {
        menuResponsive.classList.add("hidden");
        btnMenu.innerHTML = svgMenu;
    }
});

menuResponsive.addEventListener("click", (ev) => {
    ev.stopPropagation();
    menuResponsive.classList.add("hidden");
    btnMenu.innerHTML = svgMenu;
});
