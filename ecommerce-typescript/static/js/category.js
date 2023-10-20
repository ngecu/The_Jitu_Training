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
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const CATEGORY_TYPE = urlParams.get('category');
if (CATEGORY_TYPE != null) {
    document.title = CATEGORY_TYPE;
}
const createCategoryProductCard = (product) => {
    const category_card = document.createElement('div');
    console.log(product);
    const product_container = document.createElement('div');
    const product_card = document.createElement('div');
    const product_image_container = document.createElement('div');
    const product_image = document.createElement('img');
    product_image.src = product === null || product === void 0 ? void 0 : product.image;
    const discount_badge_container = document.createElement('div');
    const actual_discount = document.createElement('p');
    const card_body = document.createElement('div');
    const product_title_container = document.createElement('div');
    const product_title = document.createElement('a');
    product_title.href = `product.html?product=${product.id}`;
    product_title.innerText = product.title;
    const product_price_container = document.createElement('div');
    const prev_price = document.createElement('div');
    const current_price = document.createElement('div');
    const ratings_container = document.createElement('div');
    ratings_container.className = "ratings_container";
    const add_to_cart_btn_container = document.createElement('div');
    add_to_cart_btn_container.className = "add_to_cart_btn_container";
    const add_to_cart = document.createElement('button');
    add_to_cart.className = "add_to_cart";
    add_to_cart_btn_container.appendChild(add_to_cart);
    product_price_container.appendChild(prev_price);
    product_price_container.appendChild(current_price);
    card_body.appendChild(product_title_container);
    product_title_container.appendChild(product_title);
    card_body.appendChild(product_price_container);
    card_body.appendChild(ratings_container);
    card_body.appendChild(add_to_cart_btn_container);
    product_image_container.appendChild(product_image);
    product_image_container.appendChild(discount_badge_container);
    discount_badge_container.appendChild(actual_discount);
    product_card.appendChild(card_body);
    product_card.appendChild(product_image_container);
    product_container.appendChild(product_card);
    console.log(product_container);
    return product_container;
};
const getCategotryProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const product_wrapper = document.querySelector('.products_by_category');
    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/category/${CATEGORY_TYPE}`;
    const response = yield fetch(CATEGORY_PRODUCT_API);
    const data = response.json();
    data.then(json => {
        json.forEach((element) => {
            const product_card = createCategoryProductCard(element);
            product_wrapper.appendChild(product_card);
        });
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
});
getCategotryProducts();
