// IMPORT MODULES under test here:
import { renderBlazers, renderCoens } from './utils.js';
import { coenMovies, blazerPlayers } from '../data.js';

const test = QUnit.test;

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
    const actual = renderBlazers(blazerPlayers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});