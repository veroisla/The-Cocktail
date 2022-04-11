# **`Proyecto Final Módulo JavaScript`** 💻

<br>

### ➡️ Enunciado:

---

El ejercicio consiste en desarrollar una aplicación web que contiene un listado
de las bebidas y cócteles de todo el mundo, que nos permite des/marcar las
bebidas como favoritas y guardarlas en local storage.

Hay que resolver varios puntos:

🟨 ESTRUCTURA BÁSICA:

La aplicación de búsqueda de cócteles consta de dos partes:

- Un campo de texto y un botón para buscar un cóctel por su título.
- Un listado de resultados de búsqueda donde aparece la imagen del cóctel y el
  nombre.

🟨 BÚSQUEDA:

- Al hacer click sobre el botón de "buscar", la aplicación debe conectarse al
  API abierto de TheCocktailDB.
- Para construir la URL de búsqueda hay que recoger el texto que ha introducido
  la usuaria en el campo de búsqueda.
- Por cada cóctel contenido en el resultado de la búsqueda hay que pintar una
  tarjeta donde mostramos una imagen del cóctel y el nombre.

🟨 FAVORITOS:

Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son
nuestros cócteles favoritos. Para ello, al hacer clic sobre una cóctel debe
pasar lo siguiente:

- El color de fondo y el de fuente se intercambian, indicando que es un cóctel
  favorito
- Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del
  formulario de búsqueda, con los cócteles favoritos. Os recomendamos crear un
  variable o constante de tipo array en JS para almacenar los cócteles
  favoritos.
- Los cócteles favoritos deben seguir apareciendo a la izquierda aunque la
  usuaria realice otra búsqueda.

🟨 ALMACENAMIENTO LOCAL:

Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al
recargar la página el listado de favoritos debe mostrarse.

<br>
### ➡️ Bonus:

---

🟨 Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que
borrar el favorito clicado de la lista y del localStorage.

🟨 Añadir/quitar como favorito al hacer clic sobre un cóctel del lado de la
derecha. Y que, si realizamos una nueva búsqueda y sale un cóctel que ya es
favorito, aparezca ya resaltado en los resultados de búsqueda (con colores de
fondo y texto intercambiados).

🟨 Afinar la maquetación.
