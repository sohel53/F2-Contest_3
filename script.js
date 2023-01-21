const userData = []

let uname = document.getElementById('uname');
let email = document.getElementById('email');
let psw = document.getElementById("psw");
let ConfPsw = document.getElementById("ConfPsw");
let signbtn = document.getElementById("signbtn");

signbtn.addEventListener('click', signUp)

function signUp() {
    let sname = uname.value;
    let semail = email.value;
    let spsw = psw.value;
    let sConfpsw = ConfPsw.value;

    if(psw != "") {

        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(spsw.match(decimal)) { 
            return true;
        }
        else { 
            return false;
        }
            
    }
    if(psw.value == ConfPsw.value) { 
        console.log("Please")
        return true;
    }
    else {
        alert("Please enter same password!")
    }
    if(sname != "" && semails != "" &&  spsw != "" && sConfpsw != "") {
        console.log("error");
        window.location = 'login.html';

    }
    else {
        alert("Please fill required deatils!")
    }
} 
