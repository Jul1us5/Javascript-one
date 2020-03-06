"use strict";

function  skaitmenuKiekisSkaiciuje(num, correct) {
    let count = 0;
    // validuojame input
    if (typeof(num) !== 'number' ) {
        return console.error('ERROR: skaicius netinkamas (1)')
    }
    if ( !isFinite(num) ) {
        return console.error('ERROR: skaicius netinkamas (2)')  
    }


    // skaiciuojame
    const skaiciusTekstu = ''+num;
    count = skaiciusTekstu.length;

    // jei randame minusa, tai
    if ( num < 0) {
         count--;
    } 



        // jei randame kaleli, tai
    if ( num % 1 !== 0) {
        count--;
    } 




    return console.log(count, '-->', correct);
}

skaitmenuKiekisSkaiciuje( 'asd' );
skaitmenuKiekisSkaiciuje( [51] );
skaitmenuKiekisSkaiciuje( [51, 488] );
skaitmenuKiekisSkaiciuje( undefined );
skaitmenuKiekisSkaiciuje( true );
skaitmenuKiekisSkaiciuje( false );
skaitmenuKiekisSkaiciuje( null );
skaitmenuKiekisSkaiciuje( [] );
skaitmenuKiekisSkaiciuje( ['asd']);
skaitmenuKiekisSkaiciuje( ['asd', 'asdf'] );
skaitmenuKiekisSkaiciuje( NaN );
skaitmenuKiekisSkaiciuje( Infinity );
skaitmenuKiekisSkaiciuje( -Infinity );



skaitmenuKiekisSkaiciuje( 5, 1 );
skaitmenuKiekisSkaiciuje( 781, 3 );
skaitmenuKiekisSkaiciuje( 37060123456, 11 );
skaitmenuKiekisSkaiciuje( -1987, 4 );
skaitmenuKiekisSkaiciuje( 3.1415, 5 );
skaitmenuKiekisSkaiciuje( -3.1415, 5 );

skaitmenuKiekisSkaiciuje( 1212121221341423423423423423423412, 36 );

