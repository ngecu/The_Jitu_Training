"use strict";
const add_to_cart_btn = document.querySelector('.add_to_cart');
if (add_to_cart_btn) {
    add_to_cart_btn.addEventListener("click", () => {
        console.log("btn clicked");
    });
}
