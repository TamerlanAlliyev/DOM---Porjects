"use strict";

const inputEl = document.getElementById("input");
const addBtn = document.getElementById("add");
const ulEl = document.querySelector(".taskList ul");
const tasks = [];

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const givenValue = inputEl.value.trim();

    if (givenValue === "") {
        return;
    }

    tasks.push(givenValue);
    displayTasks();

    inputEl.value = "";
});

const displayTasks = () => {
    ulEl.innerHTML = "";

    tasks.forEach((tasks, index) => {
        const liEl = document.createElement("li");
        const spanEl = document.createElement("span");
        const buttonEl = document.createElement("button");

        spanEl.textContent = tasks;
        buttonEl.className = "btn";
        buttonEl.textContent = "Delete";

        buttonEl.addEventListener("click", () => {
            deleteTask(index);
        });

        liEl.insertAdjacentElement("afterbegin", spanEl);
        liEl.insertAdjacentElement("beforeend", buttonEl)

        ulEl.insertAdjacentElement("afterbegin", liEl)
   });
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    displayTasks();
};
