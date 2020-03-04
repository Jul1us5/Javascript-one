let a = [1, 2, 3, 4];
console.log(a);

// console.log(a.length);
console.log('kintamajame a yra ' + a.length + ' skaiciai');


const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(adc);
console.log(abc);


//Rekomenduojama naudoti: >, <, >=, <=, ===, !==
//(NE)Rekomenduojama naudoti: ==, !=
const s1 = 4;
const s2 = '4';

if ( s1 == s2 ) {
    console.log(true);
} else {
    console.log(false);
}


// _______________________________________


const riba = 18;
const metai = 20;

if ( riba < metai ) {
    console.log('Sveikinu! gali pirkt');
    console.log('gal noretum xxxxxx? kaina tik yy.cc eur');

    if ( metai > 99 ) {
        console.log('akcija: tau nemokai!');
    }

} else {
    console.log('Bandyk dar karta');
}

console.log('----------------------');


// let s = 0;
// for ( let i = 574; i < 815; i++) {
//     s++;
//     console.log(s);
// }
// console.log(s);

let res = 0;
let x = -70;
for ( x; x < 30; x++ ) {
    res++
    console.log(x);
    console.log(res);
}
// console.log(x);
console.log('----------------------');

let sum = 0; 
for (let i = -70; i <= 30; i++) {
    sum += i;
    // console.log(i);
}
console.log(sum);


console.log('-----------------------------');


// Play with prompt and alert //

let name = prompt('Koks tavo vardas?','');

if ( name == 'Julius') {
    alert('TAIP');
} else if ( name == 'Tomas') {
    alert('Na, kad nelabai :D');
} else  {
    alert('Ne...')
}
