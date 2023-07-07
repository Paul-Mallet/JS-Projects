import { paragraphs } from "./data.js"
import { createPara, removeAllPara } from "./dom.js"

// Random, unique sauf si > nbre valeur dans []

const nber = document.querySelector("input")
const btn = document.querySelector("button")
const para = document.querySelector(".paragraphs")

btn.addEventListener("click", () => {
    const nberPara = nber.value
    if (para.childNodes) {
        removeAllPara(para)
        createPara(nberPara, paragraphs, para)
    } else {
        createPara(nberPara, paragraphs, para)
    }
})

// Important : e.preventDefault() permet de ne pas envoyer de req via le form -> donc pas de params dans url et pas de chargement de page inutile !

// essayer avec .json avec node.js

// essayer une API avec fetch()

// const form = document.querySelector(".lorem-form");
// const amount = document.getElementById("amount");
// const result = document.querySelector(".lorem-text");

// form.addEventListener("submit", function (e) {
//   // A click on a form submit button – initiates its submission to the server.

//   e.preventDefault();

//   const value = parseInt(amount.value);
//   const random = Math.floor(Math.random() * text.length);

//   if (isNaN(value) || value < 0 || value > 9) {
//     result.innerHTML = `<p class="result">${text[random]}</p>`;
//   } else {
//     let tempText = text.slice(0, value);
//     tempText = tempText
//       .map(function (item) {
//         return `<p class="result">${item}</p>`;
//       })
//       .join("");
//     result.innerHTML = tempText;
//   }
// });