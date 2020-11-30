function selectImage(controlImage) {
    mainImg = document.querySelector(".product-gallery__main-img")
    controlImages = document.querySelectorAll(".product-gallery__controls-img-wrapper")

    controlImages.forEach((element) => {
        element.style.borderColor = "#FBF2F2";
    })
    controlImage.style.borderColor = "#E5DBDB";

    mainImg.src = controlImage.children[0].src
}
