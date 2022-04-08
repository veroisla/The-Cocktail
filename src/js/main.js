'use strict';

const listDrinks = document.querySelector('.js_listDrinks');
const input = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_buttonSearch');
const buttonReset = document.querySelector('.js_buttonReset');
let drinks = []; //listado completo de bebidas
let favouriteDrinks = []; //listado bebidas favoritas

// CURRENT TARGET PARA SABER A QUE ELEMENTO DAMOS CLICK
function handleClickDrink(event) {
  console.log(event.currentTarget.id);
}

//PINTAR HTML

function renderListDrinks() {
  let html = '';
  for (const drinksOptions of drinks) {
    html += `<li class= "js_liDrinks" id= ${drinksOptions.idDrink} >`;
    html += `<h3> ${drinksOptions.strDrink}</h3>`;
    html += `<img src=${drinksOptions.strDrinkThumb} alt="Imagen Bebida" class="drinks_Image"/>`;
    html += `</li>`;
  }
  listDrinks.innerHTML = html;
  //llamamos a función listenerDrinks, una vez se han pintado las paletas
  listenerDrinks();
}

//ESCUCHAMOS EVENTO CLICK ASOCIADO A CADA COCKTAIL
function listenerDrinks() {
  const liDrinks = document.querySelectorAll('.js_liDrinks');
  for (const itemDrinks of liDrinks) {
    itemDrinks.addEventListener('click', handleClickDrink);
  }
}

function handleClickResearch() {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      drinks = data.drinks;
      // const image = document.createElement('img');
      // const imageCocktail = './images/cocktail.jpg';
      // if (strDrinkThumb === null) {
      //   img.src = data.imageCocktail;
      // } else {
      //   img.src = drinksOptions.strDrinkThumb;
      // }

      renderListDrinks();
    });
}

//EVENTOS BOTONES
buttonSearch.addEventListener('click', handleClickResearch);
