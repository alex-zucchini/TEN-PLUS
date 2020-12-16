// show catalog menu

let catalogBtn = document.querySelector(".header__catalog")
let catalog = document.querySelector(".hidden-menu")

let catalogMenuItems = document.querySelectorAll(".hidden-menu__contains__item")
let catalogContain1 = document.querySelector(".hidden-menu__contains1")
let catalogContain2 = document.querySelector(".hidden-menu__contains2")
let catalogContain3 = document.querySelector(".hidden-menu__contains3")
let catalogContain4 = document.querySelector(".hidden-menu__contains4")
let catalogContain5 = document.querySelector(".hidden-menu__contains5")
let catalogContain6 = document.querySelector(".hidden-menu__contains6")
let catalogContent = document.querySelector(".hidden-menu__content")

catalogBtn.onclick = function () {
    catalog.classList.toggle("shown")

    const heroTiltElements = document.querySelector(".index-page-hero__wrapper")

    if (document.body.contains(heroTiltElements)) {
        heroTiltElements.classList.toggle("index-page-hero__wrapper--hidden")
    }
}

function refreshCatalogMenuItems() {
    for (let item of catalogMenuItems) {
        item.classList.remove("chosen")
    }
}

catalogContain1.addEventListener("mouseover", function () {
    refreshCatalogMenuItems()
    this.classList.add("chosen")
    catalogContent.innerHTML = `<ul>
    <li><a href="#">ТЭНы для водонагревателей</a></li>
    <li><a href="#">ТЭНы для стиральных машин</a></li>
    <li><a href="#">Воздушные ТЭНы</a></li>
    <li><a href="#">Водяные ТЭНы</a></li>
    <li><a href="#">ТЭНы для промышленных и бытовых плит</a></li>
    <li><a href="#">ТЭНы бытовые</a></li>
    <li><a href="#">ТЭНы для дистилляторов и кулеров</a></li>
    <li><a href="#">ТЭНы для сауны</a></li>
    <li><a href="#">Блоки ТЭН</a></li>
    <li><a href="#">Нагревательные элементы для конвекторов</a></li>
    <li><a href="#">Запчасти для ТЭНов</a></li>
    </ul>`
})

catalogContain2.addEventListener("mouseover", function () {
    refreshCatalogMenuItems()
    this.classList.add("chosen")
    catalogContent.innerHTML = `<ul>
    <li><a href="#">ТЭНы</a></li>
    <li><a href="#">Помпы</a></li>
    <li><a href="#">Магнитные электроклапаны</a></li>
    <li><a href="#">Подшипники</a></li>
    <li><a href="#">Смазки, средства и спреи</a></li>
    <li><a href="#">Сальники</a></li>
    <li><a href="#">Ремни</a></li>
    </ul>`
})

catalogContain3.addEventListener("mouseover", function () {
    refreshCatalogMenuItems()
    this.classList.add("chosen")
    catalogContent.innerHTML = `<ul>
    <li><a href="#">Конфорки чугунные</a></li>
    <li><a href="#">Электроконфорки промышленные</a></li>
    <li><a href="#">Газовые плиты</a></li>
    <li><a href="#">Электроплиты</a></li>
    </ul>`
})

catalogContain4.addEventListener("mouseover", function () {
    refreshCatalogMenuItems()
    this.classList.add("chosen")
    catalogContent.innerHTML = `<ul>
    <li><a href="#">Переключатели</a></li>
    <li><a href="#">Термостаты</a></li>
    <li><a href="#">Терморегуляторы</a></li>
    <li><a href="#">Реле</a></li>
    <li><a href="#">Магнетроны</a></li>
    <li><a href="#">Предохранительные клапаны</a></li>
    </ul>`
})

catalogContain5.addEventListener("mouseover", function () {
    refreshCatalogMenuItems()
    this.classList.add("chosen")
    catalogContent.innerHTML = `<ul>
    <li><a href="#">Заглушки в ТЭН</a></li>
    <li><a href="#">Шнур сетевой</a></li>
    <li><a href="#">Защита водонагревателя</a></li>
    </ul>`
})


// Mobile catalog menu
// const mobileCatalogSubmenuContainer = document.createElement('div')

// catalogContain1.addEventListener("mouseover", function () {
//     refreshCatalogMenuItems()
//     this.classList.add("chosen")
//     this.parentNode.insertBefore( mobileCatalogSubmenuContainer, this.nextSibling )
//     mobileCatalogSubmenuContainer.innerHTML = `<ul>
//     <li><a href="#">ТЭНы для водонагревателей</a></li>
//     <li><a href="#">ТЭНы для стиральных машин</a></li>
//     <li><a href="#">Воздушные ТЭНы</a></li>
//     <li><a href="#">Водяные ТЭНы</a></li>
//     <li><a href="#">ТЭНы для промышленных и бытовых плит</a></li>
//     <li><a href="#">ТЭНы бытовые</a></li>
//     <li><a href="#">ТЭНы для дистилляторов и кулеров</a></li>
//     <li><a href="#">ТЭНы для сауны</a></li>
//     <li><a href="#">Блоки ТЭН</a></li>
//     <li><a href="#">Нагревательные элементы для конвекторов</a></li>
//     <li><a href="#">Запчасти для ТЭНов</a></li>
//     </ul>`
// })