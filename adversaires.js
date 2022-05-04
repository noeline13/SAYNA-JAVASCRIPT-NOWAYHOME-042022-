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

//cadre

let all_card = document.querySelectorAll(".card-hero")

all_card.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.querySelector('.card-content').style.display = "block";
        card.style.transform = "scale(1.2)";
        card.style.border = "none";
        card.style.height = "600px";
        card.style.marginTop = "80px";
        card.style.marginBottom = "80px";
        card.querySelector('.card-image').style.transform = "scale(0.9)";
        card.querySelector(".card-title").style.marginLeft = " 30px";
        card.querySelector(".card-title").style.color = " white";

    })
});

all_card.forEach(card => {
    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.border = "9px solid";
        card.style.marginTop = "20px";
        card.style.marginBottom = "20px";
        card.querySelector(".card-title").style.color = " black";
        card.querySelector('.card-content').style.display = "none";
        card.style.height = "300px";
    })
});

let para = document.querySelectorAll(".card-content")
for (let i = 0; i < para.length; i++) {
    para[i].classList.add("slide")
}