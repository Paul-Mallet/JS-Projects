
// revoir méthode CSS overflow pour passer le ul links en dessous quand width < 800px
// toggle sur le btn nav-toggle qui rajoute la class show-links

const btn_toggle = document.querySelector(".nav-toggle")
const ul_links = document.querySelector(".links")

// Avec fonction toggle
btn_toggle.addEventListener("click", () => {
    ul_links.classList.toggle("show-links")
})

// btn_toggle.addEventListener("click", () => {
//     if (ul_links.classList.contains("show-links")) {
//         ul_links.classList.remove("show-links")
//     } else if (ul_links.classList.contains("links")) {
//         ul_links.classList.add("show-links")
//     }
// })