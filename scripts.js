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

//scroll image
const slideSpiderman = document.getElementById('spidermanSlide')
const spiderNoir = document.getElementById('spiderNoir')

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll >= 100 && scroll < 1560) {
        slideSpiderman.style.opacity = '80%'
        spiderNoir.style.opacity = '0%'
    } else if (scroll >= 1560 && scroll < 1570) {
        slideSpiderman.style.opacity = '0%'
        spiderNoir.style.opacity = '50%'
    }
})

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


/* Une fois que l’utilisateur complète le formulaire et clique sur le bouton “Envoyer” ou
“S’ inscrire à la newsletter”, une Popup Box doit s’ afficher pour signaler que l’ opération a
été effectuée.*/

let popup = document.getElementById("pupup")
let body = document.querySelector("body")

function opens() {
    popup.classList.add("open");
    body.style.visibility = "hidden";
    body.style.background = "white";


}

function closes() {
    popup.classList.remove("open")
    body.style.visibility = "visible"
}

/*Une barre audio doit apparaître pour gérer l’audio et ajouter de l’interactivité. Il est
possible d’appuyer sur le cœur (voir image en dessous) ce qui entraîne le remplissage
de celui-ci en blanc.
*/
let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let titre = document.querySelector("#titre");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration ");
let track_image = document.querySelector("#track_image");
let artist = document.querySelector("#artist");
let timer;
let index_no = 0;
let playing_song = 0;
let loves = document.querySelector(".fa-heart")
    // creation de l'audio
let track = document.createElement("audio");
// tous les music
let all_song = [{
        name: "first  song",
        path: "assets/audio/audio1.mp3",
        img: "assets/img/img34.png",
        singer: " first singer",
    },
    {
        name: "second  song",
        path: "assets/audio/audio1.mp3",
        img: "assets/img/img35.png",
        singer: " second singer",
    }
];

// tous les function
function load_track(index_no) {
    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    artist.innerHTML = all_song[index_no].singer;
    track.load();
    timer = setInterval(range_slider, 1000);

}
load_track(index_no);

// checking si les song sont jouer
function justPlay() {
    if (playing_song == false) {
        playSong();
    } else {
        pauseSong();
    }
}

// jouer le song
function playSong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class = "fa fa-pause"></i>'
}

// PUASE le song
function pauseSong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class = "fa fa-play"></i>'
}

// rempissage du couer
function love() {
    loves.classList.add("fa-solid")
}

// next song
function nextSong() {
    if (index_no < all_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playSong();
    } else {
        index_no = 0;
        load_track(index_no);
        playSong();
    }
};

// previous song
function previousSong() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playSong();
    } else {
        index_no = all_song.length;
        load_track(index_no);
        playSong();
    }
}

//change slider position
function change_duration() {
    slider_position = track_duration * (slider_value / 100);
    track_curretTime = slider_position
}

function range_slider() {
    let position = 0;
    if (!isNaN(track_duration)) {
        position = track_curretTime * (100 / track_duration);
        slider_value = position
    }
}

/*Les images des trois héros Spiderman doivent zoomer légèrement et individuellement
au passage de la souris */
let all_card = document.querySelectorAll(".card-unique")


all_card.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.querySelector('.card-text').style.display = "block";
        card.querySelector('.card-text').style.marginTop = "20px";
        card.querySelector('.card-text').style.marginBottom = "20px";
        card.querySelector('.card-img-top').style.transform = "scale(1.1)";
    })
});

all_card.forEach(card => {
    card.addEventListener("mouseout", () => {
        card.querySelector('.card-text').style.display = "none";
        card.querySelector('.card-img-top').style.transform = "scale(1)";

    })
});

//fade in paragraphe
let para = document.querySelectorAll(".card-text")
for (let i = 0; i < para.length; i++) {
    para[i].classList.add("slide")
}