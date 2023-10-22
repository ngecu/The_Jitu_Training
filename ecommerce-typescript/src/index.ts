const CATEGORIES_API_URI:string = "https://fakestoreapi.com/products/categories"



console.log("X");

const createCategoryCard = (category:string)=>{

const category_card = document.createElement('div');
category_card.className = "category_card";
const category_link_tag = document.createElement('a');
category_link_tag.href = `category.html?category=${category}`
const inner_category_card = document.createElement('div')
const category_img = document.createElement('img');
if(category == "electronics"){
  category_img.src = `https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg`
}
else if(category == "jewelery"){
  category_img.src = `https://africanboutique.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-29-at-3.36.10-AM.jpeg`
}
else if(category == "men's clothing"){
  category_img.src = `https://www.evolveclothing.com/Images/Homepages/MensHomepage/2023/Ireland-may/Shop-mens-jackets-ireland.jpg`
}
else if(category == "women's clothing"){
  category_img.src = `https://www.miladys.com/media/wysiwyg/Shop_Womens_Clothing_Online.jpg`
}

const category_title_container =document.createElement('div')
const category_title = document.createElement('b');
category_title.innerText = category;
category_title_container.appendChild(category_title)

inner_category_card.appendChild(category_img)
inner_category_card.appendChild(category_title_container)

category_link_tag.appendChild(inner_category_card)

category_card.appendChild(category_link_tag)

return category_card

}

const createCategoryProductCards = async (category:string)=>{
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const data = response.json();
  data.then(json =>{
     console.log(json);
     json.slice(0,4).forEach((el:Product) => {
     const card = `    <div class="product-card card">
     <div class="product-image">
         <img src="${el.image}" alt="Product Image">
         <div class="discount-badge"><p>-3%</p></div>
     </div>
     <div class="card-body">
         <div class="product-title">
             <a href="product.html?product=${el.id}">${el.title}</a>
         </div>
         <div class="product-price-container">
             <div class="prev-price">
                 Ksh. 200
             </div>
             <div class="current-price">
                 Ksh. ${el.price}
             </div>
         </div>
 
         <div class="ratings-container">
             <!-- Add your rating elements here -->
         </div>
 
         <div class="add-to-cart-btn-container">
             <button class="add-to-cart">ADD TO CART</button>
         </div>
     </div>
 </div>`

         // Append the HTML content for each category card, don't overwrite it
         let product_container;
         if(category == "women's clothing"){  
           product_container = document.querySelector('.women\\\'s\\ clothing_product_container');
         }
         if(category == "men's clothing"){
          product_container = document.querySelector('.men\\\'s\\ clothing_product_container');

         }
         else{
           product_container = document.querySelector(`.${category}_product_container`);

         }
         if (product_container) {
          product_container.innerHTML += card;
         }

     })
  })
  
}

const getCategories = async ()=>{
    const categoies_container = document.querySelector('.categories_container') as HTMLDivElement
  const response = await fetch(CATEGORIES_API_URI)
    const data = response.json();
    data.then(json =>{
        // console.log(json);
        localStorage.clear()
        localStorage.setItem("categories",json)
        json.forEach((el:string) => {
          createCategoryProductCards(el)
            const category_card = createCategoryCard(el)
            categoies_container.appendChild(category_card)
                    // Accumulate the HTML content for each category card
            const cat = `
            <div class="new_${el}_container">
                <h6>${el}</h6>

                <div class="products_by_category">
                <div class="${el}_product_container products-f">

                </div>
                </div>
            </div>
        `;
        // Append the HTML content for each category card, don't overwrite it
        const products_by_category_container = document.querySelector('.products_by_category_container');
        if (products_by_category_container) {
            products_by_category_container.innerHTML += cat;
        }


        });
    }
    )

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

   
}

getCategories()

const add_to_cart_btn1 = document.querySelector('.add_to_cart') as HTMLButtonElement;
if(add_to_cart_btn1){
  console.log("is rthre");

    add_to_cart_btn1.addEventListener("click",()=>{
        console.log("btn clicked")
    })
}
