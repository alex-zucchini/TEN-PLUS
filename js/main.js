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
