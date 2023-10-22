const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const CATEGORY_TYPE = urlParams.get("category")

if (CATEGORY_TYPE != null) {
  document.title = CATEGORY_TYPE
}

const createCategoryProductCard = product => {
  const random_discount = Math.floor(Math.random() * 5) + 1
  const previous_price = ((100 - random_discount) / 100) * product.price

  const card = `<div class="product-card card">
     <div class="product-image">
         <img src="${product.image}" alt="Product Image">
         <div class="discount-badge"><p>-${random_discount}%</p></div>
     </div>
     <div class="card-body">
         <div class="product-title">
             <a href="product.html?product=${product.id}">${product.title}</a>
         </div>
         <div class="product-price-container">
             <div class="prev-price">
                 Ksh. ${previous_price}
             </div>
             <div class="current-price">
                 Ksh. ${product.price}
             </div>
         </div>
 
         <div class="ratings-container">
            
         </div>
 
         <div class="add-to-cart-btn-container">
         <button class="add_to_cart" onclick="add_to_cart(${product.id})">ADD TO CART</button>
         </div>
     </div>
 </div>`

  return card
}

const getCategotryProducts = async () => {
  const product_wrapper = document.querySelector(".product_container")
  const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/category/${CATEGORY_TYPE}`
  const category_name_span = document.querySelector(".category_span")

  if (category_name_span && CATEGORY_TYPE) {
    category_name_span.innerText = CATEGORY_TYPE
    category_name_span.style.textTransform = "UPPERCASE"
  }

  const response = await fetch(CATEGORY_PRODUCT_API)
  const data = response.json()
  data.then(json => {
    json.forEach(element => {
      const product_card = createCategoryProductCard(element)
      product_wrapper.innerHTML += product_card
    })
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
}

getCategotryProducts()

document.addEventListener("DOMContentLoaded", () => {
  const add_to_cart_btn3 = document.querySelectorAll(".add_to_cart ")
  // console.log(add_to_cart_btn3);

  if (add_to_cart_btn3) {
    add_to_cart_btn3.forEach(element => {
      element.addEventListener("click", () => {
        console.log("Button clicked")
      })
    })
  }
})
