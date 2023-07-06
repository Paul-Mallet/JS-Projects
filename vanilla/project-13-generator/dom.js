
/**
 * 
 * @param {number} value 
 * @param {[string]} tab 
 * @param {Element} div
 * @return {Element}
 */
export function createPara(value, tab, div) {    //value : 5
    for (let i = 0; i < value; i++) {
        const p = document.createElement("p")   //1 p
        const randValue = tab[Math.floor(Math.random() * value)]  //index random entre 0 et 4, ! va dépasser
        p.innerHTML = randValue
        div.append(p)
    }
    return
}