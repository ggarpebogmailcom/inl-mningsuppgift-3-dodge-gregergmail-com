const writtenName = document.getElementById("productInput");
const writtenPrice = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

addButton.addEventListener("click", addProduct);

function addProduct() {
  const name = writtenName.value;
  const price = Number(writtenPrice.value);

  if (name !== "" && price > 0) {
    let found = false;

    for (let item of cart) {
      if (item.productName === name) {
        item.quantity = item.quantity + 1;
        found = true;
      }
    }

    if (!found) {
      const item = {
        productName: name,
        price: price,
        quantity: 1
      };

      cart.push(item);
    }

    writtenName.value = "";
    writtenPrice.value = "";

    showCart();
  }
}

function showCart() {
  cartList.innerHTML = "";

  for (let item of cart) {
    const li = document.createElement("li");
    li.innerText = item.productName + " - " + item.price + " Kr (Antal: " + item.quantity + ")";
    cartList.appendChild(li);
  }
}