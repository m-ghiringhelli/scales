//import { blazersList } from "../data";
export function renderBands(band) {
    const div = document.createElement('div');
    div.classList = 'band';
    const h3 = document.createElement('h3');
    h3.textContent = band.name.toUpperCase();
    const span = document.createElement('span');
    span.textContent = `Years Active: ${band.yearsActive}`;
    const ul = document.createElement('ul');
    ul.textContent = 'Best Album: ';
    for (let property in band.favoriteAlbum) {
        const li = document.createElement('li');
        li.textContent = `${band.favoriteAlbum[property]}`;
        ul.append(li);
    }
    div.append(h3, span, ul);
    return div;
}

export function renderSandwiches(sandwich) {
    const div = document.createElement('div');
    div.classList = 'sandwich';
    const h3 = document.createElement('h3');
    h3.textContent = sandwich.name;
    const span = document.createElement('span');
    span.textContent = `A ${sandwich.temperature} sandwich`;
    const ul = document.createElement('ul');
    ul.textContent = 'Ingredients';
    for (let ingredient of sandwich.ingredients) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.append(li);
    }
    div.append(h3, span, ul);
    return div;
}

export function renderCoens(films) {
    const ul = document.createElement('ul');
    for (let film of films) {
        const li = document.createElement('li');
        li.textContent = film;
        ul.append(li);
    }
    return ul;
}

export function renderBlazers(blazer) {
    const div = document.createElement('div');
    div.classList = 'blazer-player';
    const h3 = document.createElement('h3');
    h3.textContent = blazer.name.toUpperCase();
    const span1 = document.createElement('span');
    span1.textContent = `Height: ${blazer.height}`;
    const span2 = document.createElement('span');
    span2.textContent = `College: ${blazer.college}`;
    div.append(h3, span1, span2);
    return div;
}
