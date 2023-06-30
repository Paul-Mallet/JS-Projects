const allButton = document.querySelectorAll(".container button")
const content = document.querySelector(".content-bot")

allButton.forEach(button => {
    button.addEventListener("click", (e) => {
        button.parentElement.querySelector('.active').classList.remove('active')
        button.classList.toggle("active")
        const dataValue = e.target.dataset.value
        if(dataValue === "history") {
            content.innerHTML = `
            <h2>History</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel, cum deleniti, est quod a labore atque esse aliquam harum minima beatae excepturi tempora similique eligendi expedita dolorem optio eius!</p>
            `
        } else if(dataValue === "vision") {
            content.innerHTML = `
            <h2>Vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel, cum deleniti, est quod a labore atque esse aliquam harum minima beatae excepturi tempora similique eligendi expedita dolorem optio eius!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel, cum deleniti, est quod a labore atque esse aliquam harum minima beatae excepturi tempora similique eligendi expedita dolorem optio eius!</p>
            `
        } else {
            content.innerHTML = `
            <h2>Goals</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel, cum deleniti, est quod a labore atque esse aliquam harum minima beatae excepturi tempora similique eligendi expedita dolorem optio eius!</p>
            <ul>
                <li>Goal 1</li>
                <li>Goal 2</li>
                <li>Goal 3</li>
                <li>Goal 3</li>
                <li>Goal 3</li>
                <li>Goal 3</li>
                <li>Goal 3</li>
            </ul>
            `
        }
    })
})