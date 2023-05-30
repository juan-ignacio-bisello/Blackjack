let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


// crea una nuevo deck desordenada
const crearDeck = () => {
    for ( let i = 2; i <= 10; i++){
        for ( let tipo of tipos ){
            deck.push( i + tipo);
        }
    }

    for ( let tipo of tipos) {
        for ( let esp of especiales) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    console.log(deck);
}

crearDeck();

// Tomá una carta del deck y la elimina de este
const pedirCarta = () => {
    const carta = deck.shift();
    
    if (deck.length === 0){
        throw 'No quedan mas cartas';
    }
    console.log(carta);
    return carta;
}

pedirCarta();

const valorCarta = ( carta ) => {
    const valor = carta.substring( 0, carta.length - 1);

    return ((  isNaN( valor ) ) ? 
        ( valor === 'A' ) ? 11 : 10 
        : valor * 1)
   
}


const valor = valorCarta(pedirCarta())