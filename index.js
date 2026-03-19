let Body = document.querySelector('body');
let heading = document.querySelector('h1');
let redBtn = document.querySelector('#Red');
let greenBtn = document.querySelector('#Green');
let blueBtn = document.querySelector('#Blue');
let yellowBtn = document.querySelector('#Yellow');
let pinkBtn = document.querySelector('#Pink');
let bluevioletBtn = document.querySelector('#Blueviolet');
let defaultbtn = document.querySelector('#btn');
//create all remove color function....
const myFunction = (colortype, textColor) => {
    Body.classList.remove("light", "red", "green", "blue", "yellow", "pink", "blueviolet");
    Body.classList.add(colortype);
    heading.style.color = textColor;
}
redBtn.addEventListener("click", () => {
    myFunction("red", "white");
});

greenBtn.addEventListener("click", () => {
    myFunction("green", "rgb(70, 70, 70)");
});

blueBtn.addEventListener("click", () => {
    myFunction("blue", "white");
});

yellowBtn.addEventListener("click", () => {
    myFunction("yellow", "black");
});

pinkBtn.addEventListener("click", () => {
    myFunction("pink", "black");
});

bluevioletBtn.addEventListener("click", () => {
    myFunction("blueviolet", "white");
});
defaultbtn.addEventListener("click", () => {
    myFunction("light", "rgb(70, 70, 70)");
})