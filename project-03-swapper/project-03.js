
// surprise = Math.random (0, 1, 2)

const reviews = [
    {
        img: "person-1.jpeg",
        name: "anna johnson",
        job: "the boss",
        parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt blanditiis quasi quas ratione. Necessitatibus placeat obcaecati, ullam quasi perferendis vero. Dicta nulla quisquam ducimus inventore exercitationem, error autem! Corrupti."
    },
    {
        img: "person-2.jpeg",
        name: "melina dumont",
        job: "intern",
        parag: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
    },
    {
        img: "person-3.jpeg",
        name: "peter jones",
        job: "web developper",
        parag: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        img: "person-4.jpeg",
        name: "jack elvis",
        job: "designer",
        parag: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    }
]

// select elem
const img = document.querySelector('img')
const nameh4 = document.querySelector('.main-container .container .card h4')
const job = document.querySelector('#job')
const info = document.querySelector('#info')

// btn
const prev_btn = document.querySelector('.prev-btn')
const next_btn = document.querySelector('.next-btn')
const surprise = document.querySelector('.surprise')

// 0 -> 2 -> 1 -> 0 à chaque fois qu'il vaut 0 il regagne en valeur 2
let currentIndex = 0   //2

function showPerson (person) {
    const prop = reviews[person]

    img.setAttribute("src", prop.img)
    nameh4.innerText = prop.name
    job.innerText = prop.job
    info.innerText = prop.parag
}

// intégrer les valeurs de reviews[0] dans les elem HTML au démarrage de l'appli web
showPerson(currentIndex)


// si 1er prop de reviews alors affiche le dern(reviews.length-1) : if (reviews[0].name) { reviews[reviews.length-1]}
next_btn.addEventListener("click", () => {
    currentIndex++
    if (currentIndex > reviews.length-1) {   // si il est === 2
        currentIndex = 0
    }
    showPerson(currentIndex)
})

prev_btn.addEventListener("click", () => {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = reviews.length-1
    }
    showPerson(currentIndex)
})

surprise.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * reviews.length)
    showPerson(currentIndex)
})

// (nameh4.textContent === reviews[0].name) && (objInReviews === reviews.length)
// objInReviews > -1

// dans if
// nameh4.textContent = reviews[objInReviews].name
// job.textContent = reviews[objInReviews].job
// info.textContent = reviews[objInReviews].parag

// intégrer les valeurs de reviews[0] dans les elem HTML
// img.setAttribute("src", reviews[objIndex].img)
// nameh4.innerText = reviews[objIndex].name
// job.innerText = reviews[objIndex].job
// info.innerText = reviews[objIndex].parag