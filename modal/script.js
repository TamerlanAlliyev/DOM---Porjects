"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
});

const closeModal = () => {
    modalEl.classList.add("hidden");
    overlayEl.classList.add("hidden");
};

window.addEventListener("keydown",(event)=>{
    if(event.key === "Escape"){
        closeModal();
    }
})

closeBtn.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);


