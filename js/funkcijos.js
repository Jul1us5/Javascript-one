"use strict"

const skaicius1 = 2;
const skaicius2 = -8;
const skaicius3 = 5;




function daugyba( num1, num2) { 
    if ( typeof(num1) !== 'number' ) {
        return  console.error('Klaida (1)');
    }
    if ( num1 === Infinity || num1 === Infinity ) {
        return console.error('Klaida (0)');     
    }
    if ( num2 === Infinity || num2 === -Infinity ) {
        return console.error('Klaida (3)');     
    }
    if ( typeof(num2) !== 'number' ) {
        return console.error('Klaida (2)');
    }
    if ( ''+num1 === 'NaN' ) {
        return console.error('Klaida (4)');
    }
    const anw = num1 * num2;
    return console.log(anw);
}
daugyba( skaicius1, skaicius2 );
daugyba( skaicius3, skaicius2 );
daugyba( skaicius1, skaicius3 );


daugyba( '12', 1 );
daugyba( NaN, 0 );

// daubgyba( infinity, 855 );