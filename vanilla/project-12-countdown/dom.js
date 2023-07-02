
export function addDate (elem) {
    const endPromotion = new Date(2023, 6, 10, 0, 0, 0) // ex: Monday, 10 July 2023 00:00am
    elem.innerHTML = endPromotion
} 

export function timer(elem) {
    window.setInterval(addDate(elem), 1000)
}

//load window toute les sec en rajoutant la new Date() au span