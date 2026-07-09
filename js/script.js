// ==========================
// MUSIC
// ==========================

const music = document.getElementById("music");

window.addEventListener("load", () => {
    music.volume = 0.35;
});

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

reveals.forEach(section=>{

    observer.observe(section);

});