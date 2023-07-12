/**
 * Value entrée dans input, créer ul et 1 li(après click sur submit-btn)
 * 
 */


const groceryInput = document.querySelector("#grocery")
const submitBtn = document.querySelector(".submit-btn")
const groceryList = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(groceryInput.value)
})

// class TodoList {}
// class TodoLi {}