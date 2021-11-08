//Le code ci-dessous est une aide from Github !!! 
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


// Première tentative #Failed x). 
/*window.addEventListener('keydown', function(event){ //e = event ou evenement, on écoute l'évenement dans la fonction 
    const audio = document.querySelector('audio[data-key="${event.keyCode}"]');
    const key = document.querySelector('.key[data-key="${event.keyCode}"]');
    console.log(event.keyCode);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList('playing')
});*/