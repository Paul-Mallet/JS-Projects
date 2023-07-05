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


// ********** fixed navbar ************

// const navbar = document.getElementById("nav");
// const topLink = document.querySelector(".top-link");

// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   const navHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navHeight) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }
//   // setup back to top link

//   if (scrollHeight > 500) {
//     console.log("helo");

//     topLink.classList.add("show-link");
//   } else {
//     topLink.classList.remove("show-link");
//   }
// });