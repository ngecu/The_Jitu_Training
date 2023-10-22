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
        const product_title = product_title_container.querySelector('h1') as HTMLElement;
        product_title.innerText = json.title;

        const product_image = document.querySelector('.product-image') as HTMLImageElement;
        product_image.src = json.image
        
        const current_price = document.querySelector('.current_price') as HTMLDivElement;
        current_price.innerText = `Ksh. ${json.price}`;
        
        const product_description = document.querySelector('.product_description') as HTMLImageElement;
        product_description.innerText = json.description

        
        
        console.log(json);
    
    })

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

   
}

getProductDetails()


const add_to_cart_btn2 = document.querySelector('.add_to_cart') as HTMLButtonElement;
if(add_to_cart_btn2){
  console.log("is rthre");

    add_to_cart_btn2.addEventListener("click",()=>{
        console.log("btn clicked")
    })
}
