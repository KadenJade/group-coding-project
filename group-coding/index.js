const cocktailMenu = document.getElementById('cocktail-menu')
const ulItem = document.getElementById('ingre')
const posterImage = document.querySelector("#ramen-detail .detail-image");
const liElements = document.createElement('li')
const posterName = document.querySelector("#ramen-detail .name");
const instructionSection = document.getElementById("instruction-display")
const button = document.getElementById("btnSearch");
const objectArray =[]

fetch('http://localhost:3000/drinks')
    .then((response) => response.json())
    .then((drinksArray) => {
        drinksArray.forEach((drink) => {
            appendCocktailToMenu(drink);
        });
    });


function appendCocktailToMenu(drinkObj) {
    const imageDomElement = document.createElement('img');
    imageDomElement.src = drinkObj.strImageSource;
    cocktailMenu.append(imageDomElement)
        objectArray.push(drinkObj)
      imageDomElement.addEventListener('click', () => {
        //const ingredientsLi = document.createElement('li')
        posterImage.src = drinkObj.strImageSource;
        posterName.textContent = drinkObj.strDrink;
        liElements.textContent = drinkObj.ingredients;
        
        ulItem.append(liElements)

        instructionSection.appendChild(document.createElement('p'))
        instructionSection.innerHTML = drinkObj.strInstructions
           
    });
}
const form = document.querySelector("#new-margarita");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newName = event.target['new-name'].value;
    const newIngredients = event.target['new-ingredients'].value;
    const newInstructions = event.target['new-instructions'].value;
    const newImage = event.target['new-image'].value;
/*
    const allListItems = document.querySelectorAll('li');
    debugger;
    const selectedValue = event.target.value;
    allListItems.forEach((currentListItem) => {
        const currentListItemText = currentListItem.textContent;
        if (currentListItemText === selectedValue) {
            currentListItem.style.display = 'block';
        } else {
            currentListItem.style.display = 'none'
        }
    }) 
*/

    const newMargarita = {
        strDrink: newName,
        ingredients: newIngredients,
        strInstructions: newInstructions,
        strImageSource: newImage

    };
    appendCocktailToMenu(newMargarita);
    
});

function loveMe() {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const work = objectArray[Math.floor(Math.random() * objectArray.length)];
      console.log(work);
  
      const ramenImgPopup = document.querySelector("#ramen-detail .detail-image");
      ramenImgPopup.src = work.strImageSource;

  
      const drinkName = document.querySelector("#ramen-detail .name");
      drinkName.innerHTML = work.strDrink;
  
      const drinkIngredients = document.getElementById("ingre");
      drinkIngredients.innerHTML = work.ingredients;
  
      const instructions = document.getElementById("instruction-display");
      instructions.innerHTML = work.strInstructions;
    });
  }



/*
  const ulItem = document.getElementById('ingre')
  //ingredients
  const ingredient1 = drinkObj.strMeasure1 + " " + drinkObj.strIngredient1
  const ingredient2 = drinkObj.strMeasure2 + " " + drinkObj.strIngredient2
  const ingredient3 = drinkObj.strMeasure3 + " " + drinkObj.strIngredient3
  const ingredient4 = drinkObj.strMeasure4 + " " + drinkObj.strIngredient4
  const ingredient5 = drinkObj.strMeasure5 + " " + drinkObj.strIngredient5
  const ingredient6 = drinkObj.strMeasure6 + " " + drinkObj.strIngredient6
  const ingredient7 = drinkObj.strMeasure7 + " " + drinkObj.strIngredient7
  //  const ingreArray = []
  const li1 = document.getElementById('num1')
  const li2 = document.getElementById('num2')
  const li3 = document.getElementById('num3')
  const li4 = document.getElementById('num4')
  const li5 = document.getElementById('num5')
  const li6 = document.getElementById('num6')
  const li7 = document.getElementById('num7')
  li1.innerHTML = ingredient1
  li2.textContent = ingredient2
  li3.textContent = ingredient3
  li4.textContent = ingredient4
  li5.textContent = ingredient5
  li6.textContent = ingredient6
  li7.textContent = ingredient7
  ulItem.append(li1)
  ulItem.append(li2)
  ulItem.append(li3)
  ulItem.append(li4)
  ulItem.append(li5)
  ulItem.append(li6)
  ulItem.append(li7)
  */