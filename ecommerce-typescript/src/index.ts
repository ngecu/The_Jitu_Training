const CATEGORIES_API_URI:string = "https://fakestoreapi.com/products/categories"



console.log("X");

const createCategoryCard = (category:string)=>{const category_card = document.createElement('div');
category_card.className = "category_card";
const category_link_tag = document.createElement('a');
category_link_tag.href = `category.html?category=${category}`
const inner_category_card = document.createElement('div')
const category_img = document.createElement('img');
category_img.src = `https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png`

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

const getCategories = async ()=>{
    const categoies_container = document.querySelector('.categories_container') as HTMLDivElement
  const response = await fetch(CATEGORIES_API_URI)
    const data = response.json();
    data.then(json =>{
        // console.log(json);
        
        json.forEach((el:string) => {
            
            const category_card = createCategoryCard(el)
            categoies_container.appendChild(category_card)


        });
    }
    )

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

   
}

getCategories()