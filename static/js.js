function registration () {
    let registrationBtn = document.getElementById("registrationBtn");
    registrationBtn.addEventListener('click', function () {
        let email = document.getElementById("regEmail").value;
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
            // do something to response
            console.log(this.responseText);
        };
        xhttp.send(input);
    });
}
