'use strict';

const listDrinks = document.querySelector('.js_listDrinks');
const input = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_buttonSearch');
const buttonReset = document.querySelector('.js_buttonReset');
const buttonResetFav = document.querySelector('.js_resetfav');
let listFavouriteDrinks = document.querySelector('.js_favouriteDrinks');
let drinks = [];
let favouriteDrinks = [];

//PINTAR LISTA TOTAL BEBIDAS

function renderListDrinks() {
  let html = '';

  for (const drinksOptions of drinks) {
    let classFavourite = '';
    let nameFavourite = '';

    const foundIndexFavoritedrink = favouriteDrinks.findIndex((favorites) => {
      return favorites.idDrink === drinksOptions.idDrink;
    });

    if (foundIndexFavoritedrink !== -1) {
      classFavourite = 'favouriteCocktail';
      nameFavourite = 'nameFavourite';
    } else {
      classFavourite = '';
      nameFavourite = '';
    }

    html += `<li class= "section__cocktails__item js_liDrinks " id= ${drinksOptions.idDrink} >`;
    html += `<h3 class="section__cocktails__name  ${nameFavourite}"> ${drinksOptions.strDrink}</h3>`;
    html += `<img src=${drinksOptions.strDrinkThumb} alt="Imagen Bebida" class="section__cocktails__image ${classFavourite}"/>`;
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

//---FAVORITOS

// CURRENT TARGET PARA SABER A QUE ELEMENTO DAMOS CLICK
function handleClickDrink(event) {
  const idDrinks = event.currentTarget.id;

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
  renderListDrinks(); // volvemos a llamar a función pintar lsta normal.
  renderFavouriteDrinks(); //llamo pintar lista fav
}

//FUNCIÓN QUE PINTA LOS FAVORITOS EN LA LISTA DE FAVORITOS

function renderFavouriteDrinks() {
  let htmlFav = '';
  for (const favouriteOptions of favouriteDrinks) {
    htmlFav += `<li class= "section__favourites__item js_liFavourite" ${favouriteOptions.idDrink}>`;
    htmlFav += `<h3 class="section__favourites__name"> ${favouriteOptions.strDrink}</h3>`;
    htmlFav += `<img src=${favouriteOptions.strDrinkThumb} alt="Imagen Bebida" class="section__favourites__image"/>`;
    htmlFav += `</li>`;
  }
  listFavouriteDrinks.innerHTML = htmlFav;
}

//---LOCAL STORAGE

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
      renderListDrinks();
    });
}

//FUNCIÓN RESET

function handleReset() {
  input.value = '';
  favouriteDrinks = [];
  localStorage.clear(favouriteDrinks);
  listFavouriteDrinks.innerHTML = '';
  listDrinks.innerHTML = '';
}

//EVENTOS BOTONES

buttonSearch.addEventListener('click', handleClickResearch);
buttonReset.addEventListener('click', handleReset);
