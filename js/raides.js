"use strict";


function isrinktRaides( text, step) {
    // validuojame teksta
    if (typeof(text) !== 'string') {
        return 'ERROR: pirma reiksme turi buti tekstine.';
    }



    // validuojame zingsni
    if (typeof(text) !== 'string') {
        return 'ERROR: antra reiksme turi buti skaitine.';
    }


    // all good -> logika
    let answer = '';
    return;
}

console.log( isrinktRaides( 1561, 2 ), '->', 'ERROR' );

console.log( isrinktRaides( 'abcdefg', 2 ), '->', 'ERROR');
console.log( isrinktRaides( 'abcdefghijkl', 3 ), '->', 'ERROR');
console.log( isrinktRaides( 'abc', 0 ), '->', 'ERROR' );
console.log( isrinktRaides( 'abc', 4 ), '->', 'ERROR' );
console.log( isrinktRaides( 'abc', Infinity ), '->', 'ERROR' );
console.log( isrinktRaides( 'abc', NaN ), '->', 'ERROR' );
console.log( isrinktRaides( 'abc', 4 ), '->', 'ERROR' );


// isrinktiRaides( "abcdefg", 2 );
// isrinktiRaides( "abcdefghijkl", 3 );
// isrinktiRaides( "abc", 0 );
// isrinktiRaides( "abc", 4 );
// isrinktiRaides( 1561, 2 );