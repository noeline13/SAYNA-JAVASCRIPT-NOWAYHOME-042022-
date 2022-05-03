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
    css.backgroundColor = "white";
    css.color = "red";
    css.boxShadow = " inset 0 0 15em 0 white ,0 0 0.5em 0 white";
    css.textShadow = "inset 0 0 15em 0 red , 0 0 0.5em 0 red";
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

//footer