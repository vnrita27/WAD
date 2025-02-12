document.addEventListener("DOMContentLoaded", function () {
    const registi = document.querySelector(".registi");
    const logini = document.querySelector(".logini");
    const isLo = JSON.parse(localStorage.getItem("isloginned"))
    if(isLo){
        logini.innerHTML= `Logout`;
        
        registi.innerHTML= ``;
    }

    
});

function logOut(){
    localStorage.setItem("isloginned", false);
}
