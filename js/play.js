"use strict"


// let a = 'Julius';
// let res = '';

// for (let i = 0; i < a.length; i++) {
//     res = a[i] + res;
// }
// console.log(res);

// let nuo = 0;
// let iki = 11;
// let suma = 0;
// let kiek = 5;


// for (nuo; nuo <= iki; nuo++) {
//     console.log(nuo);
//     if ( nuo % kiek === 0) {
//         suma++;
//     }
// }
// console.log('kiek: ' + suma);

console.log('-----------------------');
let a = true;
let b = 3;
let suma;


function result(a, b) {
    if ( typeof(a) !== 'number' || typeof(b) !== 'number' ) {
        return console.error('Tai ne skaicius!');
    }
    if ( ''+a === 'NaN') {
        return console.error('NaN....');
    }


    suma = a + b;
    return console.log(suma);

}
result( a, b );