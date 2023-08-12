import { acumularPuntos} from './acumular-puntos';
import { pedirCarta } from './pedir-carta';
import { crearCarta } from './crear-carta';
import { determinarGanador } from './determinar-ganador';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la compu necesita para ganar
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores
 * @param {HTMLElement} puntosHTML
 * @param {Array<HTMLDivElement>} divCartasJugadores
 */

export const turnoComputadora = (puntosMinimos,deck = [], puntosJugadores, puntosHTML,divCartasJugadores) => {
    
    if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if( !deck ) throw new Error('El deck es necesario');
    
    let puntosComputadora = 0;
    
    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1, puntosHTML,puntosJugadores);
        crearCarta(carta, puntosJugadores.length-1,divCartasJugadores);

    } while((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));

    determinarGanador(puntosJugadores);
}
