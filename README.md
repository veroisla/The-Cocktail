# **`Proyecto Final M贸dulo JavaScript`** 馃捇

<br>

### 鉃★笍 Enunciado:

---

El ejercicio consiste en desarrollar una aplicaci贸n web que contiene un listado
de las bebidas y c贸cteles de todo el mundo, que nos permite des/marcar las
bebidas como favoritas y guardarlas en local storage.

Hay que resolver varios puntos:

馃煥 ESTRUCTURA B脕SICA:

La aplicaci贸n de b煤squeda de c贸cteles consta de dos partes:

- Un campo de texto y un bot贸n para buscar un c贸ctel por su t铆tulo.
- Un listado de resultados de b煤squeda donde aparece la imagen del c贸ctel y el
  nombre.

馃煥 B脷SQUEDA:

- Al hacer click sobre el bot贸n de "buscar", la aplicaci贸n debe conectarse al
  API abierto de TheCocktailDB.
- Para construir la URL de b煤squeda hay que recoger el texto que ha introducido
  la usuaria en el campo de b煤squeda.
- Por cada c贸ctel contenido en el resultado de la b煤squeda hay que pintar una
  tarjeta donde mostramos una imagen del c贸ctel y el nombre.

馃煥 FAVORITOS:

Una vez aparecen los resultados de b煤squeda, la usuaria puede indicar cu谩les son
nuestros c贸cteles favoritos. Para ello, al hacer clic sobre una c贸ctel debe
pasar lo siguiente:

- El color de fondo y el de fuente se intercambian, indicando que es un c贸ctel
  favorito
- Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del
  formulario de b煤squeda, con los c贸cteles favoritos. Os recomendamos crear un
  variable o constante de tipo array en JS para almacenar los c贸cteles
  favoritos.
- Los c贸cteles favoritos deben seguir apareciendo a la izquierda aunque la
  usuaria realice otra b煤squeda.

馃煥 ALMACENAMIENTO LOCAL:

Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al
recargar la p谩gina el listado de favoritos debe mostrarse.

<br>
### 鉃★笍 Bonus:

---

馃煥 Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que
borrar el favorito clicado de la lista y del localStorage.

馃煥 A帽adir/quitar como favorito al hacer clic sobre un c贸ctel del lado de la
derecha. Y que, si realizamos una nueva b煤squeda y sale un c贸ctel que ya es
favorito, aparezca ya resaltado en los resultados de b煤squeda (con colores de
fondo y texto intercambiados).

馃煥 Afinar la maquetaci贸n.
