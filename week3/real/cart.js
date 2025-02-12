document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".btn-success");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.parentElement.querySelector(".card-text").innerText;
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push({ productName });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} added to cart!`);
        });
    });
});
