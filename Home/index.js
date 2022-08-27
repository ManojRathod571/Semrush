// *****************************************  Insight functions **********************************************************
let button = document.querySelectorAll("#content-flex div");
let border = document.querySelectorAll("#content-flex span");
console.log('border:', border.length)
let icons = document.querySelectorAll(".fa-solid");
let content = document.querySelectorAll(".content-div");
let heading = document.querySelectorAll("#content-flex > div > p")

function showContent(index) {

    border.forEach((item) => {
        item.style.borderBottomColor = "rgb(234, 233, 233)"
    })

    icons.forEach((item) => {
        item.style.color = "gray";
    })

    icons[index].style.color = "rgb(39, 39, 148)";
    border[index].style.borderBottomColor = "rgb(39, 39, 148)"

    content.forEach((item) => {
        item.style.display = "none";
    })
    content[index].style.display = "flex";

    heading.forEach((item) => {
        item.style.color = "black";
    })
    heading[index].style.color = "rgb(39, 39, 148)"
}
showContent(0)


// *****************************************  Image slider functions **********************************************************
let colors = ["rgb(230, 187, 219)", "#c9EDFF", "#BAFFD6", "#FFE3C9", "#E8D1E8", "#FACFD6"];
let tags = document.querySelectorAll("#tags-1 > button");
let div = document.querySelectorAll(".testomonial-div");
let crauser = document.querySelector("#crauser");

const ChangeSlide = (index) => {
    div.forEach((item) => {
        item.style.display = "none";
    })
    div[index].style.display = "block";

    tags.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "black"
    })
    // tags[index].style.transition = ".500s", "ease-in-out";
    tags[index].style.backgroundColor = "#421983"
    tags[index].style.color = "white";
    // crauser.style.transition = "3s", "ease-in-out";
    crauser.style.backgroundColor = colors[index];
}
ChangeSlide(0);
let sliderCount = document.querySelector(".slider-count")
let slide = document.getElementsByClassName("testomonial-div");
console.log('slide:', slide.length)
let state = 1;

function Arrow(n) {
    showSlides(state += n);
    console.log("clicked")
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


const showSlides = (n) => {
    sliderCount.innerHTML = null
    if (n > slide.length) { state = 1 };
    if (n < 1) { state = slide.length };
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    let span = document.createElement("span")
    span.innerText = `${state} / 6`
    sliderCount.append(span)
    slide[state - 1].style.display = "block";
    crauser.style.backgroundColor = colors[state];
    console.log("first")
}
showSlides(state);