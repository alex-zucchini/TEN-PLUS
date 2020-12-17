// Catalog menu

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


// function popupCatalogMenu() {
//     let popupStatus = false;
//     let mouseOverPopup = false;
  
//     catalogBtn.onmouseenter = function () {
//         catalog.style.display = "block";
//       popupStatus = true;
//     };
  
//     catalogBtn.onmouseleave = function () {
//       if (popupStatus == true && mouseOverPopup == false) {
//         catalog.style.display = "none";
//       } else {
//         catalog.style.display = "flex";
//       }
//     };
  
//     catalog.onmouseenter = function () {
//         catalog.style.display = "block";
//       mouseOverPopup = true;
//       popupStatus = true;
//     };
  
//     catalog.onmouseleave = function () {
//         catalog.style.display = "none";
//       popupStatus = false;
//       mouseOverPopup = false;
//     };

//   }
  
//   popupCatalogMenu();





const mobileCatalogSubmenuContainer = document.createElement('div')
mobileCatalogSubmenuContainer.className = "hidden-menu__mobile-content"

catalogBtn.onclick = function () {
    catalog.classList.toggle("shown")

    const heroTiltElements = document.querySelector(".index-page-hero__wrapper")
    if (document.body.contains(heroTiltElements)) {
        // Hide main page hero 3D-elements
        heroTiltElements.classList.toggle("index-page-hero__wrapper--hidden")
    }
}

function refreshCatalogMenuItems() {
    for (let item of catalogMenuItems) {
        item.classList.remove("chosen")
    }
}

if (window.innerWidth > 759) {

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
    
}


// Mobile catalog menu

function refreshMobileCatalogSubmenu() {
    for (let item of catalogMenuItems) {
        if (document.body.contains(mobileCatalogSubmenuContainer)) {
            item.parentNode.removeChild(mobileCatalogSubmenuContainer)
        }
        item.querySelector(".hidden-menu__contains__item-arrow").classList.remove("hidden-menu__contains__item-arrow--chosen")
        item.querySelector(".hidden-menu__contains__item-arrow-icon").classList.remove("hidden-menu__contains__item-arrow-icon--chosen")
    }
}

if (window.innerWidth < 760) {

    document.querySelector(".hidden-menu__content").style.display = "none"

    catalogContain1.addEventListener("click", function () {
        refreshCatalogMenuItems()
        refreshMobileCatalogSubmenu()
        this.classList.add("chosen")
        this.querySelector(".hidden-menu__contains__item-arrow").classList.add("hidden-menu__contains__item-arrow--chosen")
        this.querySelector(".hidden-menu__contains__item-arrow-icon").classList.add("hidden-menu__contains__item-arrow-icon--chosen")
        this.parentNode.insertBefore(mobileCatalogSubmenuContainer, this.nextSibling)
        mobileCatalogSubmenuContainer.innerHTML = `<ul>
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

        // if (this.classList.contains("chosen")) {
        //     refreshCatalogMenuItems()
        //     refreshMobileCatalogSubmenu()
        // }
    })
    
    catalogContain2.addEventListener("click", function () {
        refreshCatalogMenuItems()
        refreshMobileCatalogSubmenu()
        this.classList.add("chosen")
        this.querySelector(".hidden-menu__contains__item-arrow").classList.add("hidden-menu__contains__item-arrow--chosen")
        this.querySelector(".hidden-menu__contains__item-arrow-icon").classList.add("hidden-menu__contains__item-arrow-icon--chosen")
        this.parentNode.insertBefore(mobileCatalogSubmenuContainer, this.nextSibling)
        mobileCatalogSubmenuContainer.innerHTML = `<ul>
        <li><a href="#">ТЭНы</a></li>
        <li><a href="#">Помпы</a></li>
        <li><a href="#">Магнитные электроклапаны</a></li>
        <li><a href="#">Подшипники</a></li>
        <li><a href="#">Смазки, средства и спреи</a></li>
        <li><a href="#">Сальники</a></li>
        <li><a href="#">Ремни</a></li>
        </ul>`
    })

    catalogContain3.addEventListener("click", function () {
        refreshCatalogMenuItems()
        refreshMobileCatalogSubmenu()
        this.classList.add("chosen")
        this.querySelector(".hidden-menu__contains__item-arrow").classList.add("hidden-menu__contains__item-arrow--chosen")
        this.querySelector(".hidden-menu__contains__item-arrow-icon").classList.add("hidden-menu__contains__item-arrow-icon--chosen")
        this.parentNode.insertBefore(mobileCatalogSubmenuContainer, this.nextSibling)
        mobileCatalogSubmenuContainer.innerHTML = `<ul>
        <li><a href="#">Конфорки чугунные</a></li>
        <li><a href="#">Электроконфорки промышленные</a></li>
        <li><a href="#">Газовые плиты</a></li>
        <li><a href="#">Электроплиты</a></li>
        </ul>`
    })
    
    catalogContain4.addEventListener("click", function () {
        refreshCatalogMenuItems()
        refreshMobileCatalogSubmenu()
        this.classList.add("chosen")
        this.querySelector(".hidden-menu__contains__item-arrow").classList.add("hidden-menu__contains__item-arrow--chosen")
        this.querySelector(".hidden-menu__contains__item-arrow-icon").classList.add("hidden-menu__contains__item-arrow-icon--chosen")
        this.parentNode.insertBefore(mobileCatalogSubmenuContainer, this.nextSibling)
        mobileCatalogSubmenuContainer.innerHTML = `<ul>
        <li><a href="#">Переключатели</a></li>
        <li><a href="#">Термостаты</a></li>
        <li><a href="#">Терморегуляторы</a></li>
        <li><a href="#">Реле</a></li>
        <li><a href="#">Магнетроны</a></li>
        <li><a href="#">Предохранительные клапаны</a></li>
        </ul>`
    })
    
    catalogContain5.addEventListener("click", function () {
        refreshCatalogMenuItems()
        refreshMobileCatalogSubmenu()
        this.classList.add("chosen")
        this.querySelector(".hidden-menu__contains__item-arrow").classList.add("hidden-menu__contains__item-arrow--chosen")
        this.querySelector(".hidden-menu__contains__item-arrow-icon").classList.add("hidden-menu__contains__item-arrow-icon--chosen")
        this.parentNode.insertBefore(mobileCatalogSubmenuContainer, this.nextSibling)
        mobileCatalogSubmenuContainer.innerHTML = `<ul>
        <li><a href="#">Заглушки в ТЭН</a></li>
        <li><a href="#">Шнур сетевой</a></li>
        <li><a href="#">Защита водонагревателя</a></li>
        </ul>`
    })

    if (document.body.contains(catalogContain1)) {
        catalogContain1.click();
    }
    
}
