// Your code goes here
// ======== _ [ ] `mouseover` ========

const logo = document.querySelector("h1");
logo.addEventListener("mouseover", () => {
    logo.style.color = "lightgrey";
});

logo.addEventListener("mouseout", () => {
    logo.style.color = "black";
});

// ======= _ [ ] `keydown` =========

const body = document.querySelector("body");

body.addEventListener("keydown", () => {
    body.style.backgroundColor = "red";
});

body.addEventListener("keyup", () => {
    body.style.backgroundColor = "white";
});

// ====== _ [ ] `wheel`=========

logo.addEventListener("wheel", e => {
    e.target.style.transform = "rotate(180deg)";
});

// ==========  _ [ ] `drag / drop` ??  ===========

//const usedrag = document.querySelector("h1");

//====  _ [ ] `load`
console.log(1);
window.addEventListener("load", event => {
    console.log("page is fully loaded");
});
console.log(2);
// _ [ ] `focus`

const focusImg = document.querySelector("img:nth-of-type(1)");
focusImg.addEventListener("blur", e => {
    e.target;
});
// _ [ ] `resize`
// _ [ ] `scroll`
// _ [ ] `select`
// _ [ ] `dblclick`