let userData = JSON.parse(localStorage.getItem("userData")) || [];

let checkflag = JSON.parse(localStorage.getItem("authentication")) || false;


if (checkflag == true) {
    window.location.href = "project.html"
}

document.querySelector("form").addEventListener("submit", handleSignUp);

function handleSignUp(event) {
    event.preventDefault();

    let obj = {
        email: document.querySelector("#mail").value,
        password:document.querySelector("#password").value
    }
    let flag = true;
    if (obj.email == "" || obj.password == "") {
        alert("Fill all credentials")
        flag = false;
        return;
    }
      
    for (let i = 0; i < userData.length; i++) {
        if (
            userData[i].email == obj.email) {
            localStorage.setItem("authentication", false);
            return alert("User Already Exists");
        }
    }
    if (flag === true) {
        userData.push(obj);
        alert("SignUp Successfully")
        localStorage.setItem("authentication", true);
        localStorage.setItem("userData", JSON.stringify(userData));
    }
}