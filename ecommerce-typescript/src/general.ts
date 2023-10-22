// window.onload = function(){
//     const add_to_cart_btn = document.querySelectorAll('.add_to_cart');
//     console.log("btns are ",add_to_cart_btn);

//     add_to_cart_btn.forEach((btn,index)=>{
        
//         btn.addEventListener("click",()=>{
            
//         })
//     }
//     )
//   };


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


const add_to_cart = async (product_id: number) => {
    console.log(product_id);

    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/${product_id}`;

    const response = await fetch(CATEGORY_PRODUCT_API);
    const data = response.json();

    data.then(json => {
        let current_cart: Product[] = JSON.parse(localStorage.getItem("cartItems") || '[]');

        if (current_cart.some(item => item?.id === json.id)) {
            alert("Item exists in the cart");
        } else {
            current_cart.push(json);

            localStorage.setItem("cartItems", JSON.stringify(current_cart));

            console.log("Updated cart items:", current_cart);
        }

        const wrapper = document.querySelector('.basket-icon-wrapper');
        const cartItemCount = current_cart.length;
        if(wrapper){
            // console.log(getComputedStyle(wrapper, ':before').getPropertyValue('content'));
            wrapper.setAttribute('data-count', cartItemCount.toString());
        }

   


    });
}

const remove_from_cart = (product_id:number,index:number) =>{
    console.log(product_id);
    let current_cart: Product[] = JSON.parse(localStorage.getItem("cartItems") || '[]');

    current_cart.splice(index,1)

    console.log(current_cart.length);
    
    localStorage.setItem("cartItems", JSON.stringify(current_cart));
    
    const wrapper = document.querySelector('.basket-icon-wrapper');
    const cartItemCount = current_cart.length;
    if(wrapper){
        // console.log(getComputedStyle(wrapper, ':before').getPropertyValue('content'));
        wrapper.setAttribute('data-count', cartItemCount.toString());
    }

            // Find the second <tbody> element
const TbodyToRemove = document.querySelector(`table.cart_table tbody:nth-child(${index+1})`);

if (TbodyToRemove) {
    // Remove the second <tbody> element if it exists
    TbodyToRemove.remove();
}

const total_cart_items_span = document.querySelector('.total_cart_items_span') as HTMLDivElement;


if(total_cart_items_span){
    total_cart_items_span.innerText = `${current_cart.length}`;
}
    

}

