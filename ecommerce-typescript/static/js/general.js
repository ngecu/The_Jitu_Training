"use strict";
// window.onload = function(){
//     const add_to_cart_btn = document.querySelectorAll('.add_to_cart');
//     console.log("btns are ",add_to_cart_btn);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const hideToast = () => {
    const toastContainer = document.querySelector('.toast-container');
    toastContainer.style.transform = 'translateX(100%)';
};
const showToast = (message) => {
    const toastContainer = document.querySelector('.toast-container');
    const toastMessage = toastContainer.querySelector('.toast-message');
    toastMessage.innerHTML = message;
    toastContainer.style.transform = 'translateX(0)';
    setTimeout(hideToast, 5000);
};
const add_to_cart = (product_id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(product_id);
    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/${product_id}`;
    const response = yield fetch(CATEGORY_PRODUCT_API);
    const data = response.json();
    data.then(json => {
        let current_cart = JSON.parse(localStorage.getItem("cartItems") || '[]');
        if (current_cart.some(item => (item === null || item === void 0 ? void 0 : item.id) === json.id)) {
            alert("Item exists in the cart");
        }
        else {
            current_cart.push(json);
            localStorage.setItem("cartItems", JSON.stringify(current_cart));
            console.log("Updated cart items:", current_cart);
            showToast("successfully added");
        }
        const wrapper = document.querySelector('.basket-icon-wrapper');
        const cartItemCount = current_cart.length;
        if (wrapper) {
            // console.log(getComputedStyle(wrapper, ':before').getPropertyValue('content'));
            wrapper.setAttribute('data-count', cartItemCount.toString());
        }
    });
});
const remove_from_cart = (product_id, index) => {
    console.log(product_id);
    let current_cart = JSON.parse(localStorage.getItem("cartItems") || '[]');
    current_cart.splice(index, 1);
    console.log(current_cart.length);
    localStorage.setItem("cartItems", JSON.stringify(current_cart));
    showToast("successfully removed");
    const wrapper = document.querySelector('.basket-icon-wrapper');
    const cartItemCount = current_cart.length;
    if (wrapper) {
        // console.log(getComputedStyle(wrapper, ':before').getPropertyValue('content'));
        wrapper.setAttribute('data-count', cartItemCount.toString());
    }
    // Find the second <tbody> element
    const TbodyToRemove = document.querySelector(`table.cart_table tbody:nth-child(${index + 1})`);
    if (TbodyToRemove) {
        // Remove the second <tbody> element if it exists
        TbodyToRemove.remove();
    }
    const total_cart_items_span = document.querySelector('.total_cart_items_span');
    if (total_cart_items_span) {
        total_cart_items_span.innerText = `${current_cart.length}`;
    }
};
