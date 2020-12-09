// show catalog menu

let catalogBtn = document.querySelector(".header__catalog")
let catalog = document.querySelector(".hidden-menu")

catalogBtn.onclick = function() {
    catalog.classList.toggle("shown")
    
}

let catalogContain1 = document.querySelector(".hidden-menu__contains1")
let catalogContain2 = document.querySelector(".hidden-menu__contains2")
let catalogContent = document.querySelector(".hidden-menu__content")

catalogContain1.onclick = function() {
    catalogContent.innerHTML = `<ul class="hidden-menu__tens">
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
}







