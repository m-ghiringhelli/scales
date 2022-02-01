export function renderCoens(films) {
    const ul = document.createElement('ul');
    for (let film of films) {
        const li = document.createElement('li');
        li.textContent = film;
        ul.append(li);
    }
    return ul;
}
