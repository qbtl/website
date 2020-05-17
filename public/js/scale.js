/**
 * 
 * @param {x} x | Spécifie la largeur max de la fenêtre
 */

function homeScale(x) {
    if (x.matches) { // If media query matches
        document.getElementById('homeText').innerHTML = "Quentin Boitel0".replace('0', '8');
    } else {
        document.getElementById('homeText').innerHTML = "Quentin Boitel0"
    }
};

var x = window.matchMedia("(max-width: 982px)");
homeScale(x); // Call listener function at run time
x.addListener(homeScale);