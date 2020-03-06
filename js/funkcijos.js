"use strict"


const skaicius1 = 2;
const skaicius2 = -8;
const skaicius3 = 5;




function daugyba( num1, num2) {
    console.log('dave:', num1, num2)
    return num1 * num2;
}
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

console.log('-------------------');

let arr = [];
let count = '';

for (let i = 0; i < 17; i++) {
    arr += i;

    // console.log(i);
    if (i % 2 == 1) {
        console.log('Julius');
    } else {
        console.log(i);
    }
    count++;
} 
console.log('-------------------');
// console.log(arr.length);
console.log('Veiksmu:' + count);


