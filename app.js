// import functions and grab DOM elements
import { renderCoens, 
    renderBlazers, 
    renderSandwiches,
    renderBands } from './test/utils.js';
import { coenMovies, 
    blazerPlayers, 
    sandwiches, 
    bands } from './data.js';

const moviesList = document.getElementById('movies-list');
const blazersList = document.getElementById('blazers-list');
const sandwichList = document.getElementById('sandwich-list');
const bandList = document.getElementById('band-list');

moviesList.append(renderCoens(coenMovies));

for (let blazer of blazerPlayers) {
    const div = renderBlazers(blazer);
    blazersList.append(div);
}

for (let sandwich of sandwiches) {
    const div = renderSandwiches(sandwich);
    sandwichList.append(div);
}

for (let band of bands) {
    const div = renderBands(band);
    bandList.append(div);
}



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

