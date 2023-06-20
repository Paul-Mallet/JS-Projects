
const toggle_btn = document.querySelectorAll(".toggle-btn")

toggle_btn.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const questionParent = event.currentTarget.parentElement.parentElement
        questionParent.classList.toggle("show-text")
        })
    })

// quand doit select un element spécifique à l'event(parent) mieux vaut appliquer CSS
// mieux vaut appliquer un class reveal au parent qui contient les elems hide
// et créer des display block de chacun des elems enfants de ce parent