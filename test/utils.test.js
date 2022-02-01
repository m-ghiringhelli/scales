// IMPORT MODULES under test here:
import { renderBlazers, renderCoens, renderSandwiches } from './utils.js';
import { coenMovies, blazerPlayers } from '../data.js';

const oneBlazer = {
    name: 'Damian Lillard',
    height: `6' 2"`,
    college: 'Weber State',
};

const oneSandwich = {
    name: 'BLT',
    temperature: 'cold',
    ingredients: [
        'bacon',
        'lettuce',
        'tomato'
    ]
};

const test = QUnit.test;

test('renderSandwiches() should display sandwiches, ingredients, etc', (expect) => {
    const expected = `<div class="sandwich"><h3>BLT</h3><span>A cold sandwich</span><ul>Ingredients<li>bacon</li><li>lettuce</li><li>tomato</li></ul></div>`;

    const actual = renderSandwiches(oneSandwich);

    expect.equal(actual.outerHTML, expected);
});

test('renderCoens() should display a list of coen bros. movies', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul><li>The Big Lebowski</li><li>O Brother, Where Art Thou?</li><li>Raising Arizona</li><li>Inside Llewyn Davis</li></ul>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCoens(coenMovies);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderBlazers() should display a list of Blazer players', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="blazer-player"><h3>DAMIAN LILLARD</h3><span>Height: 6' 2"</span><span>College: Weber State</span></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBlazers(oneBlazer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});