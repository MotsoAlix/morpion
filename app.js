//recuperer les elements du DOM

let cases = [ ... document.getElementsByClassName("case")];
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");

//creer un objet nomme state qui va contenir tous les elemets du jeu

let state ={
    joueurEnCours: 1,
    scoreJ1: 0,
    scoreJ2: 0,
    matchNuls: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
};

const jouerCase = (e) => {
    let idCase = e.target.id;
   
}

cases.forEach((element) => {
    element.addEventListener("click", jouerCase);
});