// import functions and grab DOM elements
import { renderCoens, renderBlazers, renderSandwiches } from './test/utils.js';
import { coenMovies, blazerPlayers, sandwiches } from './data.js';

const moviesList = document.getElementById('movies-list');
const blazersList = document.getElementById('blazers-list');
const sandwichList = document.getElementById('sandwich-list');

moviesList.append(renderCoens(coenMovies));

for (let blazer of blazerPlayers) {
    const div = renderBlazers(blazer);
    blazersList.append(div);
}

for (let sandwich of sandwiches) {
    const div = renderSandwiches(sandwich);
    sandwichList.append(div);
}




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

