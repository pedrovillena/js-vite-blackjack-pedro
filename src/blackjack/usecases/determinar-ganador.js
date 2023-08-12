/**
 * 
 * @param {Array<Number>} puntosJugadores Los puntos de los jugadores
 */

export const determinarGanador = (puntosJugadores)=>{
    
    const [puntosMinimos,puntosComputadora] = puntosJugadores;

    setTimeout(()=>{
        if(puntosComputadora === puntosMinimos){
            alert('Nadie ganó');
        } else if (puntosMinimos>21){
            alert('Perdiste');
        } else if (puntosComputadora>21){
            alert('Ganaste');
        } else {
            alert('Perdiste');
        }   

    },100);  
}