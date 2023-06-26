
// revoir méthode CSS overflow pour passer le ul links en dessous quand width < 800px
// toggle sur le btn nav-toggle qui rajoute la class show-links

const btn_open = document.querySelector(".btn-open-modal")
const close_btn = document.querySelector(".close-btn")
const overlay = document.querySelector(".modal-overlay")

// Avec fonction toggle
btn_open.addEventListener("click", () => {
    overlay.classList.add("open-modal")
})

close_btn.addEventListener("click", () => {
    overlay.classList.remove("open-modal")
})