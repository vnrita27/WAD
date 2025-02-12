document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-control");
    const productCards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        console.log(searchValue)

        productCards.forEach(card => {
            const productName = card.querySelector(".card-text").innerText.toLowerCase();
            card.style.display = productName.includes(searchValue) ? "block" : "none";
        });
    });
});
