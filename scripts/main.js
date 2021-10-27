//Le logo pour la barre de navigation du moteur de recherche.
document.querySelector( "head" ).innerHTML +=
'<link rel="icon" type="image/png" sizes="16x16" href="assets/log.png">' +
'<link rel="stylesheet" href="scripts/main.css">';

// On Ajoute du contenu html pour le header.
document.querySelector( "header" ).innerHTML +=
'<a href="index.html">' +
    '<nav>' +
        '<img class="logo" src="assets/log.png">' +
        '<h1>+30 Jours de Javascript</h1>' +
    '</nav>' +
'</a>' +
'<div id="toggle">' +
    '<i class="indicator"></i>' +
'</div>';

//Toggle Button Night switch
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const color_figure = document.querySelector('.color-figure');
const color_figcaption = document.querySelector('figcaption');

//Shake Class on click
//const href_null = document.querySelector('.href_null');


toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    color_figure.classList.toggle('active');
    color_figcaption.classList.toggle('active');
};