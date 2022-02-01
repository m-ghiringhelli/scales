// IMPORT MODULES under test here:
import { renderCoens } from './utils.js';
import { coenMovies } from '../animals.js';

console.log(coenMovies);

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
