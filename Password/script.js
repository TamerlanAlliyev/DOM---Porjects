const input = document.getElementById("input");
const eyeBtn = document.querySelector("img")
let clicked = false;

eyeBtn.addEventListener("click", () => {
    clicked = !clicked;
    if (clicked) {
        input.type = "text";
        eyeBtn.src = "./assets/icons/closeEye.svg";
    } else {
        input.type = "password";
        eyeBtn.src = "./assets/icons/openEye.svg";
    }
});
