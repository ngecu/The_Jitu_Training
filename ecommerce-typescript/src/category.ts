const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const CATEGORY_TYPE   = urlParams.get('category')

if(CATEGORY_TYPE != null){
    document.title = CATEGORY_TYPE;

}
interface Rating{
    rate:number,
    count:number

}

interface Product {
    id:number,
    category:string,
    description:string,
    image:string,
    price:number,
    rating:Rating,
    title:string
}

const createCategoryProductCard = (product:Product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productImageContainer = document.createElement('div');
    productImageContainer.className = 'product-image';

    const productImage = document.createElement('img');
    productImage.src = product?.image;
    productImage.alt = product?.title;

    const discountBadgeContainer = document.createElement('div');
    discountBadgeContainer.className = 'discount-badge';
    const actualDiscount = document.createElement('p');
    actualDiscount.innerText = `product?.discount`;

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
    prevPrice.innerText = `product.prevPrice`;
    const currentPrice = document.createElement('div');
    currentPrice.innerText = `${product.price}`;

    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'ratings-container';

    const addToCartBtnContainer = document.createElement('div');
    addToCartBtnContainer.className = 'add-to-cart-btn-container';

    const addToCart = document.createElement('button');
    addToCart.className = 'add-to-cart';
    addToCart.classList.add('add_to_cart');

    addToCart.innerText = 'Add To Cart';

    // Construct the card structure
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


const getCategotryProducts = async ()=>{
    const product_wrapper = document.querySelector('.product_container') as HTMLDivElement;
    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/category/${CATEGORY_TYPE}`
    const category_name_span = document.querySelector('.category_span') as HTMLSpanElement
    
    if(category_name_span && CATEGORY_TYPE){
        category_name_span.innerText = CATEGORY_TYPE;
        category_name_span.style.textTransform ="UPPERCASE"

    }

  const response = await fetch(CATEGORY_PRODUCT_API)
    const data = response.json();
    data.then(json =>{
        json.forEach((element:Product) => {

            const product_card =createCategoryProductCard(element)
            product_wrapper.appendChild(product_card)
        });
      
    }
    )

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

   
}

getCategotryProducts()


document.addEventListener('DOMContentLoaded', () => {
    const add_to_cart_btn3 = document.querySelectorAll('.add-to-cart ') as NodeListOf<HTMLButtonElement>;
    // console.log(add_to_cart_btn3);

    if (add_to_cart_btn3) {
        add_to_cart_btn3.forEach(element => {
            element.addEventListener('click', () => {
                console.log('Button clicked');
            });
        });
    }
});

