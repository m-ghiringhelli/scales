// import functions and grab DOM elements
import { renderCoens } from './test/utils.js';
import { coenMovies } from './animals.js';

const moviesList = document.getElementById('movies-list');
// let state
moviesList.append(renderCoens(coenMovies));
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
