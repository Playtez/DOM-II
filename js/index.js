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
    console.log("wheel scrolling the logo");
    e.target.style.transform = "rotate(180deg)";
});

//====  _ [ ] `load`

window.addEventListener("load", event => {
    logo.setAttribute("draggable", true); /// adding attribute
    console.log("load :: page is fully loaded");
    const header = document.querySelector("a:nth-of-type(2)");
    header.textContent = "changed";
});

// ==========  _ [ ] `drag / drop` ??  ===========

const firstH2Tag = document.querySelector("h2:nth-of-type(1)");
console.log(firstH2Tag);
logo.addEventListener("drag", e => {
    console.log("is it dragging?");
});

firstH2Tag.addEventListener("drop", e => {
    console.log("hello");
});

// _ [ ] `focus`

const img = document.querySelector("a:nth-of-type(3)");
img.addEventListener("focus", e => {
    e.target.style.color = "red";
    e.target.style.backgroundColor = "lightgrey";
    e.target.style.transform = "rotate(180deg)";
});
// _ [ ] `resize`
const roundImg = document.querySelector(".img-fluid");

window.addEventListener("resize", () => {
    roundImg.src =
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
});

// _ [ ] `scroll`

window.addEventListener("scroll", e => {
    console.log("dodgerblue color when scrolling");
    e.target.body.style.backgroundColor = "dodgerblue";
});
// _ [ ] `select`
const selectEl = document.querySelector("select");
selectEl.addEventListener("change", e => {
    console.log(e.type);
});

// _ [ ] `dblclick`

const lastbtn = document.querySelector(".btn"); // :nth-of-type(3)
lastbtn.addEventListener("dblclick", e => {
    e.target.textContent = "Started";
});

document.querySelector("nav").addEventListener("click", function(event) {
    event.preventDefault();
});

document.querySelector(".div1").addEventListener("click", e => {
    alert("div1");
    e.stopPropagation();
});
document.querySelector(".div2").addEventListener("click", e => {
    alert("div2");
});