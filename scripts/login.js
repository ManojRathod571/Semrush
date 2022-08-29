
let signupLS = JSON.parse(localStorage.getItem("userData")) || [];
console.log(signupLS);

let checkflag = JSON.parse(localStorage.getItem("authentication")) || false;
console.log(checkflag);

if (checkflag == true) {
    window.location.href = "project.html"
}
document.querySelector("#loginLogo img").addEventListener("click",function(){
    window.location.href="index.html"
})
document.querySelector("form").addEventListener("submit", handleCheckCredentials);

function handleCheckCredentials(event) {
    event.preventDefault();
    if (signupLS.length === 0) {
        alert("No user till Now");
        return;
    }
    let logInMail = document.querySelector("#mail").value;
    let logInPassword = document.querySelector("#password").value;
    console.log(logInMail, logInPassword);

    for (let i = 0; i < signupLS.length; i++) {
        if (
            signupLS[i].email == logInMail &&
            signupLS[i].password == logInPassword
        ) {
            localStorage.setItem("authentication", true);
            localStorage.setItem("email", (signupLS[i].email))
            window.location.href="project.html"
            return alert("Login Successful");
        }
    }
    alert("Wrong Credentials");
    localStorage.setItem("authentication", false);
}
