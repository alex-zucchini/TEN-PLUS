// show catalog menu

let catalogBtn = document.querySelector(".header__catalog")
let catalog = document.querySelector(".hidden-menu")

catalogBtn.onclick = function () {
    catalog.classList.toggle("shown")

}

let catalogContain1 = document.querySelector(".hidden-menu__contains1")
let catalogContain2 = document.querySelector(".hidden-menu__contains2")
let catalogContain3 = document.querySelector(".hidden-menu__contains3")
let catalogContain4 = document.querySelector(".hidden-menu__contains4")
let catalogContain5 = document.querySelector(".hidden-menu__contains5")
let catalogContain6 = document.querySelector(".hidden-menu__contains6")
let catalogContent = document.querySelector(".hidden-menu__content")

catalogContain1.addEventListener("mouseover", function () {
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
    catalogContain2.classList.remove("chosen")
    catalogContain3.classList.remove("chosen")
    catalogContain4.classList.remove("chosen")
    catalogContain5.classList.remove("chosen")
    catalogContain6.classList.remove("chosen")
    catalogContain1.classList.add("chosen")
})

catalogContain2.addEventListener("mouseover", function () {
    catalogContent.innerHTML = `<ul>
    <li><a href="#">ТЭНы</a></li>
    <li><a href="#">Помпы</a></li>
    <li><a href="#">Магнитные электроклапаны</a></li>
    <li><a href="#">Подшипники</a></li>
    <li><a href="#">Смазки, средства и спреи</a></li>
    <li><a href="#">Сальники</a></li>
    <li><a href="#">Ремни</a></li>
    </ul>`
    catalogContain1.classList.remove("chosen")
    catalogContain3.classList.remove("chosen")
    catalogContain4.classList.remove("chosen")
    catalogContain5.classList.remove("chosen")
    catalogContain6.classList.remove("chosen")
    catalogContain2.classList.add("chosen")
})

catalogContain3.addEventListener("mouseover", function () {
    catalogContent.innerHTML = `<ul>
    <li><a href="#">Конфорки чугунные</a></li>
    <li><a href="#">Электроконфорки промышленные</a></li>
    </ul>`
    catalogContain2.classList.remove("chosen")
    catalogContain1.classList.remove("chosen")
    catalogContain4.classList.remove("chosen")
    catalogContain5.classList.remove("chosen")
    catalogContain6.classList.remove("chosen")
    catalogContain3.classList.add("chosen")
})

catalogContain4.addEventListener("mouseover", function () {
    catalogContent.innerHTML = `<ul>
    <li><a href="#">Газовые плиты</a></li>
    <li><a href="#">Электроплиты</a></li>
    </ul>`
    catalogContain2.classList.remove("chosen")
    catalogContain3.classList.remove("chosen")
    catalogContain1.classList.remove("chosen")
    catalogContain5.classList.remove("chosen")
    catalogContain6.classList.remove("chosen")
    catalogContain4.classList.add("chosen")
})

catalogContain5.addEventListener("mouseover", function () {
    catalogContent.innerHTML = `<ul>
    <li><a href="#">Переключатели</a></li>
    <li><a href="#">Термостаты</a></li>
    <li><a href="#">Терморегуляторы</a></li>
    <li><a href="#">Реле</a></li>
    <li><a href="#">Магнетроны</a></li>
    <li><a href="#">Предохранительные клапаны</a></li>
    </ul>`
    catalogContain2.classList.remove("chosen")
    catalogContain3.classList.remove("chosen")
    catalogContain4.classList.remove("chosen")
    catalogContain1.classList.remove("chosen")
    catalogContain6.classList.remove("chosen")
    catalogContain5.classList.add("chosen")
})

catalogContain6.addEventListener("mouseover", function () {
    catalogContent.innerHTML = `<ul>
    <li><a href="#">Заглушки в ТЭН</a></li>
    <li><a href="#">Шнур сетевой</a></li>
    <li><a href="#">Защита водонагревателя</a></li>
    </ul>`
    catalogContain2.classList.remove("chosen")
    catalogContain3.classList.remove("chosen")
    catalogContain4.classList.remove("chosen")
    catalogContain5.classList.remove("chosen")
    catalogContain1.classList.remove("chosen")
    catalogContain6.classList.add("chosen")
})