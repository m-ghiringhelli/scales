//import { blazersList } from "../data";

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
