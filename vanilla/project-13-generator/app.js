import { createPara } from "./dom.js"

const paragraphs = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus facilis velit maiores ut in, ipsam eveniet repellat, natus tempora aliquid perspiciatis laborum quo vitae nesciunt doloremque debitis error nobis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque omnis eligendi incidunt ullam nemo? Laboriosam quisquam officia distinctio, aut qui est a officiis commodi, labore eos delectus esse cupiditate. Assumenda?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maxime, esse dolorum laudantium est eveniet aliquid minima? At consequuntur doloribus accusamus eius, nobis quibusdam dolorem est illum neque facere tempora.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates doloremque perspiciatis at a? Necessitatibus repudiandae sequi ipsum officiis dicta nihil, fugit nam corrupti ullam impedit distinctio, quasi cupiditate aperiam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit ab placeat, inventore dicta quia accusantium aspernatur a perspiciatis, corrupti reiciendis debitis nulla dolor magnam ad sed nam tempore sequi."
]

// Random, unique sauf si > nbre valeur dans []

const nber = document.querySelector("input")
const btn = document.querySelector("button")
const para = document.querySelector(".paragraphs")

btn.addEventListener("click", () => {
    const nberPara = nber.value
    if (para.value != undefined) {
        // p.remove()
        console.log(para.value)
        createPara(nberPara, paragraphs, para)
    } else {
        createPara(nberPara, paragraphs, para)
        console.log(para)
    }
})

// essayer avec .json avec node.js

// essayer une API avec fetch()