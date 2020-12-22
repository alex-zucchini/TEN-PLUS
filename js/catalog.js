



// Power range slider

let powerRangeSlider = new ZBRangeSlider('power-range-slider');

powerRangeSlider.onChange = function (min, max) {
    powerRangeSlider.slider.parentElement.querySelector('.range-slider__result-min').innerHTML = min;
    powerRangeSlider.slider.parentElement.querySelector('.range-slider__result-max').innerHTML = max;
}

powerRangeSlider.didChanged = function (min, max) {
    powerRangeSlider.slider.parentElement.querySelector('.range-slider__result-min').innerHTML = min;
    powerRangeSlider.slider.parentElement.querySelector('.range-slider__result-max').innerHTML = max;
}

// call reset if needed
// powerRangeSlider.reset();



// length range slider

let lengthRangeSlider = new ZBRangeSlider('length-range-slider');

lengthRangeSlider.onChange = function (min, max) {
    lengthRangeSlider.slider.parentElement.querySelector('.range-slider__result-min').innerHTML = min;
    lengthRangeSlider.slider.parentElement.querySelector('.range-slider__result-max').innerHTML = max;
}

lengthRangeSlider.didChanged = function (min, max) {
    lengthRangeSlider.slider.parentElement.querySelector('.range-slider__result-min').innerHTML = min;
    lengthRangeSlider.slider.parentElement.querySelector('.range-slider__result-max').innerHTML = max;
}

// call reset if needed
// lengthRangeSlider.reset();



// Catalog filters open close (mobile)

let filters = document.querySelector('.catalog__filters')
let filtersOpenButton = document.querySelector('.catalog__filter-open-button')
let filtersCLoseButton = document.querySelector('.catalog__filters-close-button')
let filtersApplyButton = document.querySelector('.catalog__filters-apply-button')

filtersOpenButton.addEventListener('click', function () {
    filters.style.opacity = "1";
    filters.style.right = "0";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

filtersCLoseButton.addEventListener('click', function () {
    filters.style.opacity = "0";
    filters.style.right = "-100vw";
    filtersOpenButton.scrollIntoView();
});

filtersApplyButton.addEventListener('click', function () {
    filters.style.opacity = "0";
    filters.style.right = "-100vw";
    filtersOpenButton.scrollIntoView();
});