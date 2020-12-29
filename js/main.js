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

const mobileCatalogSubmenuContainer = document.createElement('div')
mobileCatalogSubmenuContainer.className = "hidden-menu__mobile-content"

const heroTiltElements = document.querySelector(".index-page-hero__wrapper")

catalogBtn.onclick = function () {
    catalog.classList.toggle("shown")
    if (document.body.contains(heroTiltElements)) {
        // Hide main page hero 3D-elements
        heroTiltElements.classList.toggle("index-page-hero__wrapper--hidden")
    }
}

// Hide catalog menu after 1 sec
let headerCatalogMenuTimer

catalog.onmouseleave = function () {
    headerCatalogMenuTimer = setTimeout(function () {
        catalog.classList.remove("shown")
        if (document.body.contains(heroTiltElements)) {
            // Show main page hero 3D-elements
            heroTiltElements.classList.remove("index-page-hero__wrapper--hidden")
        }
    }, 1000)
}

catalog.onmouseenter = function () {
    clearTimeout(headerCatalogMenuTimer)
}

catalogBtn.onmouseenter = function () {
    clearTimeout(headerCatalogMenuTimer)
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

// sidebar open close

let popup = document.querySelector('.sidebar')
let openBtn = document.querySelector('.header__hamburger-wrapper')
let headerMenuCLoseButton = popup.querySelector('.header__menu-close-button')

openBtn.addEventListener('click', function () {
    popup.classList.add('sidebar-opn')
    openBtn.classList.add('openbtnon')
});

headerMenuCLoseButton.addEventListener('click', function () {
    popup.classList.remove('sidebar-opn')
    openBtn.classList.remove('openbtnon')
});




// Изменяем положение поиска в зависимости от ширины экрана
let catalogSearch = document.querySelector('.header__search');

function change_search_position() {
    if (window.innerWidth>=768) {
		document.querySelector('.search-wrap--desktop').prepend(
			catalogSearch
		);
	};
    if (window.innerWidth<768) {
		document.querySelector('.search-wrap--mobile').prepend(
			catalogSearch
		);
	};

};

change_search_position();
let initialWindowHeight = window.innerHeight;

window.onresize = function() {
	let newWindowHeight = window.innerHeight;
	if (initialWindowHeight == newWindowHeight) {
		change_search_position();
	}
};

// up button

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 2000) {
    upButton.classList.add('show-up-button');
  } else {
    upButton.classList.remove('show-up-button');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};
