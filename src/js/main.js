'use strict';

const listDrinks = document.querySelector('.js_listDrinks');
const input = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_buttonSearch');
const buttonReset = document.querySelector('.js_buttonReset');
const listFavouriteDrinks = document.querySelector('.js_favouriteDrinks');
let drinks = []; //listado completo de bebidas
let favouriteDrinks = []; //listado bebidas favoritas

//PINTAR HTML

function renderListDrinks() {
  let html = '';
  for (const drinksOptions of drinks) {
    html += `<li class= "js_liDrinks" id= ${drinksOptions.idDrink} >`;
    html += `<h3 class="nameDrinks"> ${drinksOptions.strDrink}</h3>`;
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

//FAVORITOS

// CURRENT TARGET PARA SABER A QUE ELEMENTO DAMOS CLICK
function handleClickDrink(event) {
  // console.log(event.currentTarget.id);
  const idDrinks = event.currentTarget.id;

  //Comprobar si la bebida está en el listado de favoritos: buscando en la lista de todas las bebidas, y comprobando si coincide un id en la lista de favorits que sea igual a un id de toda la lista de bebidas
  const foundFavoriteDrink = drinks.find((favorites) => {
    return favorites.idDrink === idDrinks;
  });
  console.log(foundFavoriteDrink);
  const foundIndexFavoritedrink = favouriteDrinks.findIndex((favorites) => {
    return favorites.idDrink === idDrinks;
  });

  if (foundIndexFavoritedrink === -1) {
    favouriteDrinks.push(foundFavoriteDrink);
  } else {
    favouriteDrinks.splice(foundIndexFavoritedrink, 1);
  }
  //guardar en LS, mi lista de bebidas favoritas
  localStorage.setItem('listFavouriteDrinks', JSON.stringify(favouriteDrinks));
  //PINTAR LISTA FAV
  renderFavouriteDrinks();
}

//FUNCIÓN QUE PINTA LOS FAVORITOS EN LA LISTA DE FAVORITOS
function renderFavouriteDrinks() {
  let htmlFav = '';
  for (const favouriteOptions of favouriteDrinks) {
    htmlFav += `<li class= "favouriteDrinks js_liFavourite" ${favouriteOptions.idDrink}>`;
    htmlFav += `<h3 class="favouriteName"> ${favouriteOptions.strDrink}</h3>`;
    htmlFav += `<img src=${favouriteOptions.strDrinkThumb} alt="Imagen Bebida" class="drinks_Image_Favourite"/>`;
    htmlFav += `</li>`;
  }
  listFavouriteDrinks.innerHTML = htmlFav;
}

//LOCAL STORAGE

const listFavouriteDrinksLS = JSON.parse(
  localStorage.getItem('listFavouriteDrinks')
);
if (listFavouriteDrinksLS !== null) {
  favouriteDrinks = listFavouriteDrinksLS; //guardo lo que tenía en mi lista de favoritos en mi variable favoritos
  renderFavouriteDrinks(favouriteDrinks);
}

function handleClickResearch(event) {
  event.preventDefault();
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      drinks = data.drinks;

      //IMG PREDETERMINADA, recorrer array de drinks, y darle src predeterminada.

      renderListDrinks();
    });
}

//FUNCIÓN RESET
function handleReset() {
  console.log('holia');
}

//EVENTOS BOTONES
buttonSearch.addEventListener('click', handleClickResearch);
buttonReset.addEventListener('click', handleReset);
