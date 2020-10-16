// jshint esversion:6
const btn = document.getElementById("get");
const display = document.getElementById("tables");


btn.addEventListener("click", function () {
    let number = document.getElementById("number").value;
    display.innerHTML = "";
    display.style.color = "black";
    number = parseInt(number);
    if (isNaN(number) || number === 0 || number > 9999999) {
        display.textContent = "Invalid input !!!";
        display.style.color = "red";
    } else {
        for (let i = 1; i <= 10; i++) {
            display.innerHTML += "<p>" + number + " * " + i + " = " + (number * i);
        }
    }
    display.style.visibility = "visible";
});