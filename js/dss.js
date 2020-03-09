"use strict";

function didziausiasSkaiciusSarase( list ) {

    let biggest = 0;

    // validavimas
    if ( !Array.isArray(list)) {
        return console.error('Error: klaida!');
    }


    // logika




    return console.log(biggest, '-->', correct);
}



didziausiasSkaiciusSarase( 'pomidoras' );
didziausiasSkaiciusSarase( 515 );
didziausiasSkaiciusSarase( true );
didziausiasSkaiciusSarase( false );
didziausiasSkaiciusSarase( null );
didziausiasSkaiciusSarase( undefined );



didziausiasSkaiciusSarase( [ 1 ] );
// rezultatas: 1
didziausiasSkaiciusSarase( [ 1, 2, 3 ] );
// rezultatas: 3
didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] );
// rezultatas: 78
didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] );
// rezultatas: 69
didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] );
// rezultatas: -1
didziausiasSkaiciusSarase( [] );
// rezultatas: “Pateiktas sąrašas negali būti tuščias.”



