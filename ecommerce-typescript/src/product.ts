const queryString2 = window.location.search;
const urlParams2 = new URLSearchParams(queryString2);
const PRODUCT_ID   = urlParams2.get('product')



const getProductDetails = async ()=>{
    if(PRODUCT_ID != null){
        document.title = PRODUCT_ID;
    
    }

    const product_wrapper = document.querySelector('.products_by_category') as HTMLDivElement;
    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/${PRODUCT_ID}`

  const response = await fetch(CATEGORY_PRODUCT_API)
    const data = response.json();
    

    data.then(json =>{
        const product_title_container  = document.querySelector('.product_title_container') as HTMLDivElement;
        const product_title = product_title_container.querySelector('h3') as HTMLElement;
        product_title.innerText = json.title;
        product_title.style.textTransform = "UPPERCASE"

        const product_image = document.querySelector('.product-image') as HTMLImageElement;
        product_image.src = json.image
        
        const current_price = document.querySelector('.current_price') as HTMLDivElement;
        current_price.innerText = `Ksh. ${json.price}`;
        
        const product_description = document.querySelector('.product_description') as HTMLImageElement;
        product_description.innerHTML = `Description : <br/> ${json.description}`

        const product_ratings_container = document.querySelector('.product_ratings_container') as HTMLDivElement;
        product_ratings_container.innerHTML = `${json.rating.count} reviews`
        
        const add_to_cart_btn = document.querySelector('.add_to_cart') as HTMLButtonElement;
        add_to_cart_btn.addEventListener("click",()=>{
          add_to_cart(json.id)
        })
        
        console.log(json);
    
    })

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

   
}

getProductDetails()


