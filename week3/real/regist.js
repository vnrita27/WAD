document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        console.log(name, email, password)

        if (name && email && password) {
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Registration successful! Redirecting to login.");
            window.location.href = "login.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});
