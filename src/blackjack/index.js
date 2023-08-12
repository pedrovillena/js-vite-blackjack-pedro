import _ from 'underscore';
// import crearDeck,{ nombreMuestra } from './usecases/crear-deck';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
import { acumularPuntos, crearCarta, crearDeck, pedirCarta, turnoComputadora } from './usecases';


let deck = [];
const tipos = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];

// let puntosJugador = 0,
//     puntosComputadora = 0;

let puntosJugadores = [];

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');

// Esta función inicializa el juego
const inicializarJuego = (numjugadores = 2)=>{
    deck = crearDeck(tipos, especiales); 
    puntosJugadores = [];
    for(let i = 0; i < numjugadores; i++){
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

deck = crearDeck(tipos, especiales );


// Turno: 0 = primer jugador y el último será la computadora

// Turno computadora

// Eventos

btnPedir.addEventListener('click',()=>{

    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta,0,puntosHTML,puntosJugadores);
    crearCarta(carta,0,divCartasJugadores);

    if(puntosJugador>21){
        console.warn('Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador,deck,puntosJugadores, puntosHTML,divCartasJugadores);
    } else if (puntosJugador === 21){
        console.warn('21, bien!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador,deck,puntosJugadores, puntosHTML,divCartasJugadores);
    }

});

btnDetener.addEventListener('click',()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0],deck,puntosJugadores, puntosHTML,divCartasJugadores);
});

btnNuevo.addEventListener('click',()=>{

    inicializarJuego();
});
