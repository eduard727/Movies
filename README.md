Indicaciones del proyecto:

Estudiante:
Eduardo Calderon C.

Utilizar proyecto realizado anteriormente en tareas . 
El proyecto utiliza localstorage para almacenar datos seleccionados por usuario, 
Context API para el manejo y manipulación de estos datos. 
El proyecto es una “filmoteca” en el cual el usuario puede 
seleccionar películas como ya vistas, en lista , darle un puntaje a una película.

En el Home se debe de ver una lista de películas por cada API endpoint , 
cada película debe mostrar: 

Imagen, 
titulo, 
año y 
calificación. 

Además debe de tener 2 botones cada uno con un icono. 
Un botón sera el que agregue la película a la lista de  visto, y el otro el wishlist. 

Puntos extra si se agrega un filtro por cada lista en el cual 
pueda ordenar alfabéticamente, o basado en rating. Cada película 
se puede clickear y abrir una nueva ruta “/pelicula/:id” en el cual 
se va a mostrar todos los detalles de la película, y se le 
permita el usuario darle un ratea la película.


El Contexto se debe de usar como el medio por el cual el 
estado de datos se cambia en el localstorage, además que 
desde este se hace la carga inicial de localstorage, de no 
existir define la estructura de datos. 

Debe existir otra ruta “/profile” en el cual el usuario 
pueda ver sus listas, puede reutilizar componente visual 
del preview de la película. Además puntos extra si el Context 
además utiliza un tema el cual cual se puede cambiar 
entre ellos desde la navegación principal.

API URLs:
Upcoming Movies: https://developers.themoviedb.org/3/movies/get-upcoming 
Top-Rated TV Shows:  https://developers.themoviedb.org/3/tv/get-top-rated-tv 
Popular Movies: https://developers.themoviedb.org/3/movies/get-popular-movies 
Rate Movie: https://developers.themoviedb.org/3/movies/rate-movie



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
