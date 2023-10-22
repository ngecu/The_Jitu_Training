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
    const random_discount = Math.floor(Math.random() * 5) + 1;
    const previous_price = ((100 - random_discount) / 100 * product.price);
    const productCard = document.createElement('div');
    productCard.className = 'product-card card';
    const productImageContainer = document.createElement('div');
    productImageContainer.className = 'product-image';
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = 'Product Image';
    const discountBadgeContainer = document.createElement('div');
    discountBadgeContainer.className = 'discount-badge';
    const actualDiscount = document.createElement('p');
    actualDiscount.innerText = `-${random_discount}%`;
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const productTitleContainer = document.createElement('div');
    productTitleContainer.className = 'product-title';
    const productTitle = document.createElement('a');
    productTitle.href = `product.html?product=${product.id}`;
    productTitle.innerText = product.title;
    const productPriceContainer = document.createElement('div');
    productPriceContainer.className = 'product-price-container';
    const prevPrice = document.createElement('div');
    prevPrice.innerText = `Ksh. ${previous_price}`;
    const currentPrice = document.createElement('div');
    currentPrice.innerText = `Ksh. ${product.price}`;
    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'ratings-container';
    const addToCartBtnContainer = document.createElement('div');
    addToCartBtnContainer.className = 'add-to-cart-btn-container';
    const addToCart = document.createElement('button');
    addToCart.className = 'add_to_cart';
    addToCart.innerText = 'ADD TO CART';
    discountBadgeContainer.appendChild(actualDiscount);
    productImageContainer.appendChild(productImage);
    productImageContainer.appendChild(discountBadgeContainer);
    productTitleContainer.appendChild(productTitle);
    productPriceContainer.appendChild(prevPrice);
    productPriceContainer.appendChild(currentPrice);
    cardBody.appendChild(productTitleContainer);
    cardBody.appendChild(productPriceContainer);
    cardBody.appendChild(ratingsContainer);
    cardBody.appendChild(addToCartBtnContainer);
    addToCartBtnContainer.appendChild(addToCart);
    productCard.appendChild(productImageContainer);
    productCard.appendChild(cardBody);
    return productCard;
};
const getCategotryProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const product_wrapper = document.querySelector('.product_container');
    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/category/${CATEGORY_TYPE}`;
    const category_name_span = document.querySelector('.category_span');
    if (category_name_span && CATEGORY_TYPE) {
        category_name_span.innerText = CATEGORY_TYPE;
        category_name_span.style.textTransform = "UPPERCASE";
    }
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
document.addEventListener('DOMContentLoaded', () => {
    const add_to_cart_btn3 = document.querySelectorAll('.add_to_cart ');
    // console.log(add_to_cart_btn3);
    if (add_to_cart_btn3) {
        add_to_cart_btn3.forEach(element => {
            element.addEventListener('click', () => {
                console.log('Button clicked');
            });
        });
    }
});
