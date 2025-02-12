/**
 * @jest-environment jsdom
 */

// In most Jest setups, you do *not* need to import { expect } from "@jest/globals";
// Jest provides a global `expect` automatically.



describe("Cart functionality", () => {
  beforeEach(() => {
    jest.resetModules();
    // Sätt upp en "falsk" HTML-struktur
    document.body.innerHTML = `
      <input id="productInput" />
      <input id="priceInput" />
      <button id="addButton">Lägg till i varukorgen</button>
      <ul id="cartList"></ul>
    `;

    require("./src/script.js");
  });

  test("should add a new product to the cart", () => {
    const productInput = document.getElementById("productInput");
    const priceInput = document.getElementById("priceInput");
    const addButton = document.getElementById("addButton");

    const productName = "Äpplen";
    const productPrice = "10";

    productInput.value = productName;
    priceInput.value = productPrice;
    addButton.click();

    const cartList = document.getElementById("cartList");
    expect(cartList.children.length).toBe(1);
    expect(cartList.children[0].textContent).toBe(`${productName} - ${productPrice}kr (x1)`);
  });

  test("should clear input fields after adding product", () => {
    const productInput = document.getElementById("productInput");
    const priceInput = document.getElementById("priceInput");
    const addButton = document.getElementById("addButton");

    const productName = "Äpplen";
    const productPrice = "10";

    productInput.value = productName;
    priceInput.value = productPrice;
    addButton.click();

    expect(productInput.value).toBe("");
    expect(priceInput.value).toBe("");
  });
});
