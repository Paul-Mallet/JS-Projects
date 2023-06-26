
// revoir méthode CSS overflow pour passer le ul links en dessous quand width < 800px
// toggle sur le btn nav-toggle qui rajoute la class show-links

const btn_toggle = document.querySelector(".sidebar-toggle")
const btn_remove = document.querySelector(".sidebar-remove")
const sidebar = document.querySelector(".sidebar")

// Avec fonction toggle
btn_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
})

btn_remove.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")
})