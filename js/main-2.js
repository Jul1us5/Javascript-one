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
   



// let res = 0;
// let x = -70;
// for ( x; x < 30; x++ ) {
//     res++
//     console.log(x);
//     console.log(res);




// }
// console.log(x);
console.log('----------------------');

// let sum = 0; 
// for (let i = -70; i <= 30; i++) {
//     sum += i;
// }
// console.log(sum);


console.log('-----------------------------');


// Play with prompt and alert //

// let name = prompt('Koks tavo vardas?','');

// if ( name == 'Julius') {
//     alert('TAIP');
// } else if ( name == 'Tomas') {
//     alert('Na, kad nelabai :D');
// } else  {
//     alert('Ne...')
// }





// let i;

// for( i = 0; i < 100; i++) {
//     console.log(i);
// }



let n = 'abcdefg';
let i = n.length;
for (i = 0; i < n.length; i++) {

    console.log(n[i]);
}

console.log('-----------------------------');

let pazymiai = [10, 5, 2, 8, 7, 1, 2];
console.log(pazymiai);

console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);
console.log(pazymiai[3]);
console.log(pazymiai[4]);

for ( let i = 0; i<4; i++) {
    console.log( pazymiai[0] );
}
console.log('-----------------------------');


let all = pazymiai.length;


for (let i = 0; i<all; i++) {
    console.log(i, '->', pazymiai[i]);
}

console.log('-----------------------------');

for (let m=10; m>0; m--) {
    console.log(m);
}

console.log('----------------LAIKAS-------------');

// for (let h=0; h<12; h++) {
//     console.log(h + ':' + '00');
//     for (  let m=0; m<60; m=m+5 ) {
//         for (  let s =0; s<60; s++ ) {
//             console.log(h + ':' + m + ':' + s);
//         }
//     }
// }

console.log('----------------DIENOS-------------');


// const dienos = [31, 29, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31];
// console.log(dienos);
// let counter = 0;
// let menuo = 0;
// let diena = 0;

// for ( let m=0; m<12; m++ ) {
//     for ( let d=1; d<dienos[m]; d++ ) {
//     counter++;
//     menuo = m+1;
//     diena = d+1;
//     console.log('('+counter+')' + menuo + ':' + diena ); }
// }

console.log('-----------------------------');


let nuo = 0;
let iki = 4;
let suma = 0;
let kiek = 0;

for ( let i = nuo; i<=iki; i++ ) {
    suma = suma + i;
    kiek++;
}

console.log(nuo, iki, suma, kiek);


console.log('-----------------------------');


const tekstas = 'abcdef';
let atv = '';
for ( let i=0; i < tekstas.length; i++) {
    atv = tekstas[i] + atv;

}

console.log(tekstas + '-->' + atv);

console.log('-----------------------------');

let from = -3;
let till = 3;
let divider = 3;
let count = 0;

for (let i=from; i<=till; i++) {
    console.log( i + '-->' +(i % divider));
    if ( i % divider === 0) {
        count++;
    }
}

console.log('cont:' + count);















