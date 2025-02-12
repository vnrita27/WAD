document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isLogin = false;

        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        const storedUser = JSON.parse(localStorage.getItem("user"));
        console.log(email, password, storedUser)

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login successful!");
            localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
            isLogin = true
            localStorage.setItem("isloginned",JSON.stringify(isLogin) )
            window.location.href = "catalog.html";
        } else {
            alert("Invalid email or password.");
        }
    });
});
