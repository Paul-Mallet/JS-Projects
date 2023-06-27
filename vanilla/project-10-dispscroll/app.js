// Après scroll de 70 pxl(height nav)en Y, 
// header position absolute -> fixed

// docs MDN
// element.scroll(x, y) ou ({top: n, left: n, behavior: "smooth"})
// window/document.addEventListener("scroll", (e) => {})
// window.scrollY : pxlY de la window(précis à plus que l'entier), pageYOffset(multi-nav compatible)


const navbar = document.querySelector("nav")
const links = document.querySelectorAll("nav .link")

window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
        navbar.classList.add("nav-appear")
        links.forEach(link => {
            link.classList.add("links-appear")
        })
    } else {
        navbar.classList.remove("nav-appear")
        links.forEach(link => {
            link.classList.remove("links-appear")
        })
    }
})