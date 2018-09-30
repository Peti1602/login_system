function registration () {
    let registrationBtn = document.getElementById("registrationBtn");
    registrationBtn.addEventListener('click', function () {
        let email = document.getElementById("regEmail").value;
        let checkEmail = looksLikeMail(email);
        if (checkEmail === true){
            let password = document.getElementById("regPwd").value;
            let frtName = document.getElementById("regFn").value;
            let lstName = document.getElementById("regLn").value;
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/registration", true);
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            var input = JSON.stringify({
                "Email": email,
                "Password": password,
                "FirstName": frtName,
                "LastName": lstName,
            });
            xhttp.onload = function () {
                if (this.responseText === "bad email"){
                    console.log("there is already email")
                    let dangerBtn = document.getElementById("regEmail");
                    let cell = dangerBtn.previousElementSibling;
                    cell.classList.add("danger");
                } else if (this.responseText === "fine"){
                    console.log("registration is ok")
                } else {
                    console.log("connection between database and server is fail")
                }
            };
            xhttp.send(input);
        } else {
            console.log("bad email address")
        }
    });
}

function looksLikeMail(str) {
    var lastAtPos = str.lastIndexOf('@');
    var lastDotPos = str.lastIndexOf('.');
    if (lastAtPos > 2 && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2){
        return true;
    } else {
        return false;
    }
}
