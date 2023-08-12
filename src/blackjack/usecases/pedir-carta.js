/**
 * Esta función me permite tomar una carta 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta siguiente del deck
 */

export const pedirCarta = (deck) => {


    if(!deck || deck.length === 0){
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
};

export default pedirCarta;