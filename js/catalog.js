let catalogBtn = document.querySelector(".header__catalog")
let catalog = document.querySelector(".hidden-menu")

catalogBtn.onclick = function() {
    catalog.classList.toggle("shown")
    catalog.classList.toggle("hidden-menu__shown")
}
