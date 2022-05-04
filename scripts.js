// effet sur le button 2
let button2 = document.querySelector(".button2");
button2.addEventListener("mouseover", myFunction);

function myFunction() {
    let css = button2.style;
    css.fontWeight = "800";
    css.backgroundColor = "white";
    css.color = "red";
    css.boxShadow = " inset 0 0 15em 0 white ,0 0 0.5em 0 white";
    css.textShadow = "inset 0 0 15em 0 red , 0 0 0.5em 0 red";
};
button2.addEventListener("mouseout", myFunctions);

function myFunctions() {
    let css = button2.style;
    css.fontWeight = "400";
    css.backgroundColor = "transparent";
    css.color = "white";
    css.boxShadow = "none";
    css.textShadow = "none";
}

//effet sur le button 1
let button1 = [...document.querySelectorAll(".button1")];
button1.forEach(btn => {
    btn.addEventListener("mouseover", () => { myFunctio(btn) })
});

function myFunctio(btn) {
    let css = btn.style;
    css.fontWeight = "800";
    css.backgroundColor = "red";
    css.color = "white";
    css.boxShadow = " inset 0 0 15em 0 red ,0 0 0.5em 0 red";
    css.textShadow = "inset 0 0 15em 0 white , 0 0 0.5em 0 white";
};
button1.forEach(btn => {
    btn.addEventListener("mouseout", () => { myFunctios(btn) })
});

function myFunctios(btn) {
    let css = btn.style;
    css.fontWeight = "400";
    css.backgroundColor = "white";
    css.color = "red";
    css.boxShadow = "none";
    css.textShadow = "none";
};

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

//fade in paragraphe
let paragraphe = document.querySelectorAll("p")
for (let i = 0; i < paragraphe.length; i++) {
    paragraphe[i].classList.add("slide")
}
// fade in sur le logo
let logo = document.querySelector("#marvel")
logo.classList.add("move");

//scroll des image spiderman
const slideSpiderman = document.getElementsByClassName('slideSpiderman')
const spiderNoir = document.getElementsByClassName('spiderNoir')

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 150 && scroll < 1560) {
        slideSpiderman.classList.add('opa')
    } else if (window.scrollY >= 1560 && window.scrollY < 1570) {
        slideSpiderman.classList.remove('opa')
    } else if (window.scrollY >= 1570 && window.scrollY < 1700) {
        spiderNoir.classList.add('opa')
    } else if (window.scrollY < 1570) {
        spiderNoir.classList.remove('opa')
        console.log(window(scrollY));
    }
})


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

/* Une fois que l’utilisateur complète le formulaire et clique sur le bouton “Envoyer” ou
“S’ inscrire à la newsletter”, une Popup Box doit s’ afficher pour signaler que l’ opération a
été effectuée.La Popup Box doit être fondu dans le site.Pour cela il faudra reprendre la
couleur de fond et mettre une opacité de 90 % .Le texte doit être en gras et il vous faudra
faire preuve d’ originalité(à vous de proposer des messages de confirmation).Voici un
exemple pour la Popup Box“ Deviens Spiderman”.*/