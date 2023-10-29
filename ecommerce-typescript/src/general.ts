
interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: Rating;
    title: string;
    count: number;
}

const add_to_cart = async (product_id: number) => {

    const CATEGORY_PRODUCT_API = `https://fakestoreapi.com/products/${product_id}`;

    try {
        const response = await fetch(CATEGORY_PRODUCT_API);
        const data: Product = await response.json();

        let current_cart: Product[] = JSON.parse(localStorage.getItem("cartItems") || '[]');

        const productInCartIndex = current_cart.findIndex((item: Product) => item?.id === data.id);

        if (productInCartIndex !== -1) {
            current_cart[productInCartIndex].count += 1;
        } else {
            data.count = 1;
            current_cart.push(data);
        }

        localStorage.setItem("cartItems", JSON.stringify(current_cart));

        showToast();

        const wrapper = document.querySelector('.basket-icon-wrapper');
        const cartItemCount = current_cart.length;

        if (wrapper) {
            wrapper.setAttribute('data-count', cartItemCount.toString());
        }
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
};


function showToast() {
    var x = document.getElementById("snackbar") as HTMLDivElement;
    if(x){
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }

  } 

const remove_from_cart = (product_id:number,index:number) =>{
    let current_cart: Product[] = JSON.parse(localStorage.getItem("cartItems") || '[]');

    current_cart.splice(index,1)    
    localStorage.setItem("cartItems", JSON.stringify(current_cart));
    
    const wrapper = document.querySelector('.basket-icon-wrapper');
    const cartItemCount = current_cart.length;
    if(wrapper){
        wrapper.setAttribute('data-count', cartItemCount.toString());
    }

const TbodyToRemove = document.querySelector(`table.cart_table tbody:nth-child(${index+1})`);

if (TbodyToRemove) {
    TbodyToRemove.remove();
}

const total_cart_items_span = document.querySelector('.total_cart_items_span') as HTMLDivElement;


if(total_cart_items_span){
    total_cart_items_span.innerText = `${current_cart.length}`;
}
showToast()
    

}

const checkCart = () =>{
    const wrapper = document.querySelector('.basket-icon-wrapper');
    let cartItemCount = 0;

    let current_cart: Product[] = JSON.parse(localStorage.getItem("cartItems") || '[]');

    current_cart.forEach((item:Product)=>{
    cartItemCount  += item.count
    
    if(wrapper){
        wrapper.setAttribute('data-count', cartItemCount.toString());
    }
})
}

checkCart()