"use strict";

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const sliderImage = document.querySelector(".slider-image");

const images = ["beach", "building", "city", "mozaic", "sky"];
let index = 0;

rightBtn.addEventListener("click", () => {
    if (index < images.length - 1){
        index++;
    } else {
        index = 0;
    }
    displayImage();
});

leftBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    displayImage(); 
});

const displayImage = () => {
    sliderImage.style.backgroundImage = `url("images/${images[index]}.jpg")`;
};
