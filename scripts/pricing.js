

//const data =document.querySelector(".question");
//console.log(data)
//data.forEach((question) => question.addEventListener("click" ,() =>{
//console.log("clicked")
//}))



//toggle
let toggle=document.querySelector(".toggle");
let dollar=document.querySelector(".dollar");
let or=document.querySelector(".or");
let subs=document.querySelector(".subs");

let dollar1=document.querySelector(".dollar1");
let or1=document.querySelector(".or1");
let subs1=document.querySelector(".subs1");
let decimal1=document.querySelector(".decimal1");

let dollar2=document.querySelector(".dollar2");
let or2=document.querySelector(".or2");
let subs2=document.querySelector(".subs2");



function animatedtoggle(){
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active"))
    {
     
      localStorage.setItem("plans","Every 12 Months");
      console.log("12 year");
        dollar.innerHTML="$99";
        or.innerHTML=null;
        subs.innerHTML=null;
        dollar1.innerHTML="$191";
        decimal1.innerHTML=".65"
        or1.innerHTML=null;
        subs1.innerHTML=null;
        dollar2.innerHTML="$374";
        or2.innerHTML=null;
        subs2.innerHTML=null;
    }
    else{
      
      
        dollar.innerHTML="$119";
        or.innerHTML="or";
        subs.innerHTML="Subscribe";
        dollar1.innerHTML="$229";
        decimal1.innerHTML=".95"
        or1.innerHTML="or";
        subs1.innerHTML="Subscribe";
        dollar2.innerHTML="$449";
        or2.innerHTML="or";
        subs2.innerHTML="Subscribe";

    }

}


let toggle2=document.querySelector(".toggle2");
let dollar3=document.querySelector(".dollar3");
let or3=document.querySelector(".or3");
let subs3=document.querySelector(".subs3");
let dollar4=document.querySelector(".dollar4");
let or4=document.querySelector(".or4");
let subs4=document.querySelector(".subs4");
let decimal2=document.querySelector(".decimal2");

let dollar5=document.querySelector(".dollar5");
let or5=document.querySelector(".or5");
let subs5=document.querySelector(".subs5");
function animatedtoggle1(){
    toggle2.classList.toggle("active");

    if(toggle2.classList.contains("active"))
    {
        dollar3.innerHTML="$99";
        or3.innerHTML=null;
        subs3.innerHTML=null;
        dollar4.innerHTML="$191";
        decimal2.innerHTML=".65"
        or4.innerHTML=null;
        subs4.innerHTML=null;
        dollar5.innerHTML="$374";
        or5.innerHTML=null;
        subs5.innerHTML=null;
    }
    else{
        dollar3.innerHTML="$119";
        or3.innerHTML="or";
        subs3.innerHTML="Subscribe";
        dollar4.innerHTML="$229";
        decimal2.innerHTML=".95"
        or4.innerHTML="or";
        subs4.innerHTML="Subscribe";
        dollar5.innerHTML="$449";
        or5.innerHTML="or";
        subs5.innerHTML="Subscribe";
}
}

//collapse
var coll = document.getElementsByClassName("flexp");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll1 = document.getElementsByClassName("tableflex");
var i;

for (i = 0; i < coll1.length; i++) {
  coll1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content1 = this.nextElementSibling;
    if (content1.style.display === "block") {
      content1.style.display = "none";
    } else {
      content1.style.display = "block";
    }
  });
}



//text slide show
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
    span.innerText = `${state} / 5`
    sliderCount.append(span)
    slide[state - 1].style.display = "block";
    crauser.style.backgroundColor = colors[state];
    console.log("first");
}
showSlides(state);



//redirect checkout page

function funredirect(){
  localStorage.setItem("plans","Monthly")
  console.log("months")
  location.href="checkout.html";
}











