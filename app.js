// import functions and grab DOM elements
import { renderCoens, renderBlazers } from './test/utils.js';
import { coenMovies, blazerPlayers } from './data.js';

const moviesList = document.getElementById('movies-list');
const blazersList = document.getElementById('blazers-list');
// let state
moviesList.append(renderCoens(coenMovies));

for (let blazer of blazerPlayers) {
    const div = renderBlazers(blazer);
    blazersList.append(div);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

