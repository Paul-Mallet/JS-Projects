
const all_tab = {
    str_tab: ["blue", "red", "green", "yellow", "magenta", "cyan"],
    rgba_tab: ["rgba(0, 255, 255)", "rgba(255, 0, 255)", "rgba(255, 255, 0)", "rgba(0, 155, 255)", "rgba(255, 155, 255)", "rgba(155, 255, 255)"],
    hexa_tab: ["#000FFF", "#00F0FF", "#0F0FFF", "#FF0FFF", "#F0F0FF", "#FF0F0F"]
}


const section = document.querySelector('section')


function getRandomProperty(obj) {
    const key = Object.keys(obj)   // [clé1, clé2, clé3]
    const randomKey = key[Math.floor(Math.random() * key.length)]    //[clé1, clé2, clé3][index-random] = string(valeur)
    const valueKey = obj[randomKey]    // obj[ [clé1, clé2, clé3][index-random] ]
    
    const randomIndex = Math.floor(Math.random() * valueKey.length)
    const randomValue = valueKey[randomIndex]
    return randomValue
}


const bouton = document.querySelector('section .container-color-info button')
const simple = document.querySelector('nav .container-right #btn1')
const hexa = document.querySelector('nav .container-right #btn2')


bouton.addEventListener("click", () => {
    const color_value = section.style.background = getRandomProperty(all_tab)
    const section_span = document.querySelector('section .container-color-info .bg-color span')
    section_span.textContent = color_value
})

simple.addEventListener("click", () => {
    section.removeAttribute("style")
    const section_span = document.querySelector('section .container-color-info .bg-color span')
    section_span.textContent = "white"
})

hexa.addEventListener("click", () => {
    if (all_tab.hasOwnProperty('str_tab')) {
        delete all_tab.str_tab
        delete all_tab.rgba_tab
    } else {
        all_tab.str_tab = ["blue", "red", "green", "yellow", "magenta", "cyan"]
        all_tab.rgba_tab = ["rgba(0, 255, 255)", "rgba(255, 0, 255)", "rgba(255, 255, 0)", "rgba(0, 155, 255)", "rgba(255, 155, 255)", "rgba(155, 255, 255)"]
    }
})

// Bonus
// 1. Sauvegarder en localStorage
// 2. Ne pas avoir à recréer les 2 propriétés après leur suppression