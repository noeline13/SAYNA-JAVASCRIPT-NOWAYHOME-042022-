//souligner le menu
let menu = document.querySelectorAll("li")
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("mouseover", () => {
        menu[i].style.textDecoration = "line-through"
    })
    menu[i].addEventListener("mouseout", () => {
        menu[i].style.textDecoration = "none"
    })
}

//fade in titre
let title = document.querySelectorAll("h1")
for (let i = 0; i < title.length; i++) {
    title[i].classList.add("slider")
}

//fade in sub-title
let paragraphe = document.querySelectorAll(".fade")
for (let i = 0; i < paragraphe.length; i++) {
    paragraphe[i].classList.add("slide")
}

/*changement de couleur du  social media dans le footer*/
let footer = document.querySelectorAll(".image")
footer.forEach(img => {
    img.addEventListener("mouseover", () => { move(img) })
});

function move(img) {
    img.classList.add("hover")
};

footer.forEach(img => {
    img.addEventListener("mouseout", () => { moves(img) })
});

function moves(img) {
    img.classList.remove("hover")
};
//minuteur
var dateFin = new Date("05/04/2022 20:00:00").getTime();

function comptearebours() {
    let maintenant = new Date().getTime();
    let difftempsrestant = dateFin - maintenant;
    let jours = Math.floor(difftempsrestant / (1000 * 60 * 60 * 24));
    let heures = Math.floor((difftempsrestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difftempsrestant % (1000 * 60 * 60)) / (1000 * 60));
    let secondes = Math.floor((difftempsrestant % (1000 * 60)) / (1000));
    let minuteur = document.getElementById("minuteur");
    minuteur.innerHTML = `${jours} j: ${heures} h: ${minutes} mn: ${secondes}s`;

}