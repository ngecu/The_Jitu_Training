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
const queryString2 = window.location.search;
const urlParams2 = new URLSearchParams(queryString2);
const PRODUCT_ID = urlParams2.get('product');
const getProductDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    if (PRODUCT_ID != null) {
        document.title = PRODUCT_ID;
    }
    const product_wrapper = document.querySelector('.products_by_category');
    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/${PRODUCT_ID}`;
    const response = yield fetch(CATEGORY_PRODUCT_API);
    const data = response.json();
    data.then(json => {
        const product_title_container = document.querySelector('.product_title_container');
        const product_title = product_title_container.querySelector('h3');
        product_title.innerText = json.title;
        const product_image = document.querySelector('.product-image');
        product_image.src = json.image;
        const current_price = document.querySelector('.current_price');
        current_price.innerText = `Ksh. ${json.price}`;
        const product_description = document.querySelector('.product_description');
        product_description.innerHTML = `Description : <br/> ${json.description}`;
        const product_ratings_container = document.querySelector('.product_ratings_container');
        product_ratings_container.innerHTML = `${json.rating.count} reviews`;
        console.log(json);
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
});
getProductDetails();
const add_to_cart_btn2 = document.querySelector('.add_to_cart');
if (add_to_cart_btn2) {
    console.log("is rthre");
    add_to_cart_btn2.addEventListener("click", () => {
        console.log("btn clicked");
    });
}
