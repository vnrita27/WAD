
function renderCart() {
    const cartContainer = document.querySelector(".cart p");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length > 0) {
      cartContainer.innerHTML =
        "Your Cart Items:<br>" +
        cart
          .map(
            (item, index) => `
        <div class="cart-item" style="margin: 10px 0;">
          <span>- ${item.productName}</span>
          <button class="btn btn-outline-danger" onclick="deleteCartItem(${index})" style="margin-left: 10px;">Delete</button>
        </div>
      `
          )
          .join("");
    } else {
      cartContainer.innerText = "Your cart is empty!";
    }
  }
  
  function deleteCartItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
  
  document.addEventListener("DOMContentLoaded", renderCart);
  