"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const add_to_cart = (product_id) => __awaiter(void 0, void 0, void 0, function* () {
    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/${product_id}`;
    try {
        const response = yield fetch(CATEGORY_PRODUCT_API);
        const data = yield response.json();
        let current_cart = JSON.parse(localStorage.getItem("cartItems") || '[]');
        const productInCartIndex = current_cart.findIndex((item) => (item === null || item === void 0 ? void 0 : item.id) === data.id);
        if (productInCartIndex !== -1) {
            current_cart[productInCartIndex].count += 1;
        }
        else {
            data.count = 1;
            current_cart.push(data);
        }
        localStorage.setItem("cartItems", JSON.stringify(current_cart));
        showToast();
        const wrapper = document.querySelector('.basket-icon-wrapper');
        const cartItemCount = current_cart.length;
        if (wrapper) {
            wrapper.setAttribute('data-count', cartItemCount.toString());
        }
    }
    catch (error) {
        console.error("Error adding to cart:", error);
    }
});
function showToast() {
    var x = document.getElementById("snackbar");
    if (x) {
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}
const remove_from_cart = (product_id, index) => {
    let current_cart = JSON.parse(localStorage.getItem("cartItems") || '[]');
    current_cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(current_cart));
    const wrapper = document.querySelector('.basket-icon-wrapper');
    const cartItemCount = current_cart.length;
    if (wrapper) {
        wrapper.setAttribute('data-count', cartItemCount.toString());
    }
    const TbodyToRemove = document.querySelector(`table.cart_table tbody:nth-child(${index + 1})`);
    if (TbodyToRemove) {
        TbodyToRemove.remove();
    }
    const total_cart_items_span = document.querySelector('.total_cart_items_span');
    if (total_cart_items_span) {
        total_cart_items_span.innerText = `${current_cart.length}`;
    }
    showToast();
};
const checkCart = () => {
    const wrapper = document.querySelector('.basket-icon-wrapper');
    let cartItemCount = 0;
    let current_cart = JSON.parse(localStorage.getItem("cartItems") || '[]');
    current_cart.forEach((item) => {
        cartItemCount += item.count;
        if (wrapper) {
            wrapper.setAttribute('data-count', cartItemCount.toString());
        }
    });
};
checkCart();
