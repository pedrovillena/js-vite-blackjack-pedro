import {valorCarta} from './valor-carta'

/**
 * 
 * @param {String} carta Carta seleccionada
 * @param {Number} turno Turno del jugador
 * @param {HTMLElement} puntosHTML 
 * @param {Array<Number>} puntosJugadores El puntaje de los jugadores
 * @returns {Number} El puntaje del jugador según su turno
 */

export const acumularPuntos = (carta, turno, puntosHTML, puntosJugadores)=>{
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}