
export const promotionDate = function (elem, elem2) {
    let startNow = new Date()
    let endPromotion = new Date(2023, 6, 10, 23, 59, 59)
    let allDate = [
        endPromotion.getSeconds() - startNow.getSeconds(),  //date[0] -> nber
        endPromotion.getMinutes() - startNow.getMinutes(),
        endPromotion.getHours() - startNow.getHours(),
        endPromotion.getDate() - startNow.getDate()
    ]

    // Add Date to span h2
    elem.innerHTML = endPromotion

    // Create new Element div + class
    const divMain = document.createElement("div")
    divMain.setAttribute("class", "container")

    for (let date of allDate) {
        const divSingle = document.createElement("div")
        divSingle.setAttribute("class", "single")
        divSingle.innerHTML = date
        const span = document.createElement("span")

        switch (date) {
            case date = allDate[0] :
                span.innerText = "Secs"
                divSingle.append(span)
                break
            case date = allDate[1] :
                span.innerText = "Mins"
                divSingle.append(span)
                break
            case date = allDate[2] :
                span.innerText = "Hours"
                divSingle.append(span)
                break
            case date = allDate[3] :
                span.innerText = "Days"
                divSingle.append(span)
                break
            default :
                console.log("marche pas")
        }

        divMain.prepend(divSingle)
    }
    elem2.append(divMain)
}



export function timer(elem, elem2) {
    window.setInterval(() => {
        promotionDate(elem, elem2)
    }, 1000)
}


















// class (props -> endPromotion(réutilisable))

export class FullPromotionDiv {

    constructor() {

    }

    promotionDate() {

    } 

    promotionEndDate() {

    }

    timer() {

    }
}


// Créer le div.container + 4 divs
export class SingleDiv {
    elem = document.createElement("div")

    constructor(elem) {
        this.elem.setAttribute("class", "container")
        this.elem = elem
        


    }

    get element () {
        return this.elem
    }
}

// Créer 1 full div
// Créer 4 single div
// Intégrer 1 single dès que 1 date.getSeconds(), 1 single dès que 1 date.getMinutes()...
// Les stocker dans un [] dans full div, for of... pour parcourir le tableau

// Créer à partir d'une date -> 

class ToDoListItem {

    #element
    #todo

    /**@type {Todo} */
    constructor (todo) {
        this.#todo = todo
        const id = `todo-${todo.id}`
        const li = cloneTemplate('todolist-item').firstElementChild

        this.#element = li

        const checkbox = li.querySelector('input')
        checkbox.setAttribute('id', id)
        if (todo.completed) {
            checkbox.setAttribute('checked', '')
        }

        const label = li.querySelector('label')
        label.setAttribute('for', id)
        label.innerText = todo.title

        const button = li.querySelector('button')
        button.innerHTML = '<i class="bi-trash"></i>'

        this.toggle(checkbox)

        // ajout des events de suppression
        button.addEventListener('click', (e) => this.remove(e))
        checkbox.addEventListener('change', e => this.toggle(e.currentTarget))

        this.#element.addEventListener('delete', e => {
            console.log(e)
        })
        document.body.addEventListener('delete', e => {
            console.log('body', e)
        })
    }

    /**
     * 
     * @return {HTMLElement} element
     * ici met pas plus d'explication car nom de la méthode explique suffisamment
     */
    get element () {
        return this.#element
    }

    /**
     * 
     * @param {PointerEvent} e 
     */
    remove(e) {
        e.preventDefault()
        const event = new CustomEvent('delete', {
            detail: this.#todo,
            bubbles: true,
            cancelable: true
        })

        this.#element.dispatchEvent(event)
        if (event.defaultPrevented) {
            return
        }
        this.#element.remove()
    }

    /**
     * Change l'état à faire/fait de la tâche
     * @param {HTMLInputElement} checkbox 
     */
    toggle(checkbox) {
        if (checkbox.checked) {
            this.#element.classList.add('is-completed')
        } else {
            this.#element.classList.remove('is-completed')
        }
        const event = new CustomEvent('toggle', {
            detail: this.#todo,
            bubbles: true
        })
        this.#element.dispatchEvent(event)
    }
}