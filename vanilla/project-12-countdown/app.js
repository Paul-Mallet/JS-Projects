import {timer} from './dom.js'


const body = document.querySelector("body")

window.addEventListener("load", () => {
    body.innerHTML = `
    <main>
        <section>
            <div class="container">
                <article>
                    <img src="./img/iphone-14-purple.jpg" alt="phone-picture"/>
                </article>
                <article class="infos">
                    <h1>OLD IPHONE GIVEAWAY</h1>
                    <h2>Promotion ends on <span></span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod harum itaque ad in sit iste cupiditate aperiam molestias aspernatur quaerat dolorum necessitatibus, tempora unde corporis! Voluptates molestias excepturi quisquam?</p>
                </article>
            </div>
        </section>
    </main>
    `
    const spanInfos = document.querySelector("span")
    const articleInfos = document.querySelector(".infos")
    console.log(articleInfos)

    timer(spanInfos)
})

