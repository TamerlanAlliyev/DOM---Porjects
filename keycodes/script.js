"use strict";

const insetElement = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
    insetElement.innerHTML = `
        <div div class="key" >
        ${event.key}
    <small>event.key</small>
    </div >
    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key"> ${event.code}
      <small>event.code</small>
    </div>
`
    console.log(event)
})