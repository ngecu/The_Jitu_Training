
let error_message = document.querySelector('.error') as HTMLParagraphElement;
let message = document.querySelector('.message') as HTMLParagraphElement;
let modal = document.getElementById("myModal") as HTMLElement;

let form = document.querySelector('form') as HTMLFormElement;
let dismiss_btn = document.querySelector('.dismiss-btn') as HTMLFormElement;


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let email_input = document.querySelector('input') as HTMLInputElement
    let container = document.querySelector('.container') as HTMLInputElement

    
let input_value:string = email_input.value

    if(input_value.includes("@") && input_value.includes(".")){
        modal.style.display = "block";
        message.innerHTML = `A confirmation email has been sent to <b>${input_value} </b> 
        Please open it and click the button inside to confirm your subscription.`;
        container.style.display ="none";
        console.log("success")
    }
    else{
        console.log("error");
        error_message.innerText = "Valid email required";
        email_input.style.border = "solid 1px hsl(4, 100%, 67%)"
        email_input.style.backgroundColor = "#FFE8E6"
        return false
    }

    
})

dismiss_btn.addEventListener("click",()=>{

    let container_same = document.querySelector('.container') as HTMLInputElement

    modal.style.display = "none";
    container_same.style.display ="block";
})
