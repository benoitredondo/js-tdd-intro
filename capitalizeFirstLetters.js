// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            output += input[0].toUpperCase();
        } else if (i > 0) { // si l'index [i] est supérieur à Zéro alors :
            if (input[i-1] === ' ') { // si le caractère précédent est un espace, alors prend l'index [i] en cours et rajouter une majuscule
                output += input[i].toUpperCase();
            } else if (input[i-1] !== ' ') { // si le caractère précédent est différent d'un espace affiche à l'identique le caractère
                output += input[i];
            }
        }
    }
    return output;
};

module.exports = capitalizeFirstLetters;
