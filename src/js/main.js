'use strict';

const listDrinks = document.querySelector('.js_listDrinks');
const input = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_buttonSearch');
const buttonReset = document.querySelector('.js_buttonReset');
let drinks = [];

//PINTAR HTML

function renderListDrinks() {
  let html = '';
  for (const drinksOptions of drinks) {
    html += `<li>`;
    html += `<h3>${drinksOptions.strDrink}</h3>`;
    html += `<img src=${drinksOptions.strDrinkThumb} alt="Imagen Bebida" class="drinks_Image"/>`;
    html += `</li>`;
  }
  listDrinks.innerHTML = html;
}

function handleClickResearch() {
  //Llamo al fecth, cuando la usuaria hace click en buscar, es entonces cuando me sale la lista de bebidas que incluyen lo que escribe la usuaria
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      drinks = data.drinks;

      renderListDrinks();
    });
}

//EVENTOS BOTONES
buttonSearch.addEventListener('click', handleClickResearch);
