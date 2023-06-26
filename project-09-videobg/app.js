const button = document.querySelector(".container button")
const video = document.querySelector("#myVideo")

button.addEventListener("click", () => {
    if (video.paused) {
        video.play()
        button.innerHTML = "Pause"
    } else{
        video.pause()
        button.innerHTML = "Play !"
    }
})



// const btn = document.querySelector(".switch-btn");
// const video = document.querySelector(".video-container");

// btn.addEventListener("click", function () {
//   if (!btn.classList.contains("slide")) {
//     btn.classList.add("slide");
//     video.pause();
//   } else {
//     btn.classList.remove("slide");
//     video.play();
//   }
// });

// // preloader
// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//   preloader.classList.add("hide-preloader");
// });