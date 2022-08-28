
$(document).ready(function(){
    $('.search_select select').selectpicker();
})

function fun(){
    location.href="project.html";
}



let card=document.getElementById("card");
let month=document.getElementById("month");
let cvc1=document.getElementById("cvc1");
let name=document.getElementById("name");
let selectoption=document.getElementById("selectoption");
let gst=document.getElementById("gst");

function order(){
    if(card.value=="" || month.value=="" || cvc1.value=="" || name.value=="" || selectoption.value=="" || gst.value=="")
    {
alert("Please fill all the details");
    }
    else{
        alert("Payment successful");
        setTimeout(redirect,1000)
    }
    
}

function redirect(){
    location.href="project.html";
}


let email = (localStorage.getItem("email"));
console.log("email:",email);
document.getElementById("user_email").innerText=email;



//plan value append

let value=(localStorage.getItem("plans"));
document.getElementById("subs_plan").innerText=value;
 

 


