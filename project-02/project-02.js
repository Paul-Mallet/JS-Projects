
const number = document.querySelector('section .container .number')

let i_number = 0
// number.innerText = i_number // valeur de number sauv si rien dans html

const all_btn = document.querySelectorAll('section .container .all_btn button').forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.className === "dec") {
            number.textContent =  --i_number
            if (i_number < 0) {
                number.style.color = "red"
            } else if (i_number === 0) {
                number.style.color = ""
            }
        } else if (btn.className === "res") {
            i_number = 0
            number.textContent = i_number
            if (i_number === 0) {
                number.style.color = ""
            }
        } else if (btn.className === "inc") {
            number.textContent =  ++i_number
            if (i_number > 0) {
                number.style.color = "green"
            } else if (i_number === 0) {
                number.style.color = ""
            }
        }
    })
})






// const dec_btn = document.querySelector('section .container .all_btn .dec')
// const res_btn = document.querySelector('section .container .all_btn .res')
// const inc_btn = document.querySelector('section .container .all_btn .inc')


// dec_btn.addEventListener("click", () => {
//     number.textContent =  --i_number //= a la let sauvegarder et on décrémente avt la valeur actuelle 0 sinon doit clicker 2x

//     if (i_number < 0) {
//         number.style.color = "red"
//     } else if (i_number === 0) {
//         number.style.color = ""
//     }
// })

// res_btn.addEventListener("click", () => {
//     i_number = 0
//     number.textContent =  i_number //= a la let sauvegarder et on décrémente avt la valeur actuelle 0 sinon doit clicker 2x

//     if (i_number === 0) {
//         number.style.color = ""
//     }
// })

// inc_btn.addEventListener("click", () => {
//     number.textContent =  ++i_number //= a la let sauvegarder et on décrémente avt la valeur actuelle 0 sinon doit clicker 2x

//     if (i_number > 0) {
//         number.style.color = "green"
//     } else if (i_number === 0) {
//         number.style.color = ""
//     }
// })


// Bonus
// 1. Selectionner tous les btn avec querySelectorAll et appliquer un event à chaque btn
// 2. Appliquer dans la boucle de chaque btn les conditions d'inc, dec et les colors