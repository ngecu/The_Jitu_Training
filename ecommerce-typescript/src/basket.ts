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

let current_cart: Product[] = JSON.parse(localStorage.getItem("cartItems") || '[]');
const cart_table = document.querySelector('.cart_table') as HTMLTableElement;
let total_cart_price = 0



if (current_cart.length == 0) {
    cart_table.innerHTML = `<tr class="empty">
        <td>Cart Item is Empty</td>
    
    </tr>`
    
}
else{
    current_cart.forEach((item:Product,index:number)=>{
        const itemRow = `<tr>
        <td>
        <img src="${item.image}"/>
        </td>
        <td>
       ${item.title}
        </td>

        <td>*
        ${item.count}
         </td>

        <td>
       Ksh. ${item.price}
         </td>

         <td>
         Ksh. ${item.count * item.price}
           </td>

         <td> <button class="remove-btn"  onclick="remove_from_cart(${item.id},${index})" > <ion-icon name="trash"></ion-icon> </button>
    
    </tr>`

    cart_table.innerHTML += itemRow;
    total_cart_price += item.count * item.price


    const wrapper = document.querySelector('.basket-icon-wrapper');
let cartItemCount = 0;
cartItemCount  += item.count

if(wrapper){
    wrapper.setAttribute('data-count', cartItemCount.toString());
}

    })
}

const total_cart_items_span = document.querySelector('.total_cart_items_span') as HTMLDivElement;
const total_sh = document.querySelector('.total_sh') as HTMLParagraphElement;
let cart_total = 0;

if(total_cart_items_span && total_sh){
    current_cart.forEach(element => {
        cart_total += element.count
    });
    total_cart_items_span.innerText = `${cart_total}`;
    total_sh.innerText = `Ksh. ${total_cart_price}`

}


