// Simple cart system
let cart = [];
let total = 0;

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const item = e.target.closest(".card-body");
      const name = item.querySelector(".card-title").innerText;
      const price = parseFloat(item.querySelector(".card-text").innerText.replace("$", ""));
      cart.push({ name, price });
      alert(`${name} added to cart!`);
      updateOrderPage();
    });
  });

  updateOrderPage();
});

function updateOrderPage() {
  const orderList = document.getElementById("order-list");
  const totalPrice = document.getElementById("total-price");

  if (orderList && totalPrice) {
    orderList.innerHTML = "";
    total = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `${item.name} <span>$${item.price.toFixed(2)}</span>`;
      orderList.appendChild(li);
      total += item.price;
    });

    totalPrice.innerText = total.toFixed(2);
  }
}
