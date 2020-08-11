/**
 * 
 * @param {x} x | Spécifie la largeur max de la fenêtre
 */

function header_scale(x) {
    if (x.matches) { // If media query matches
        document.getElementById('home-text').innerHTML = "Quentin" + "<br>" + "Boitel0".replace('0', '8');
    } else {
        document.getElementById('home-text').innerHTML = "Quentin Boitel0"
    }
};

var x = window.matchMedia("(max-width: 768px)");
header_scale(x); // Call listener function at run time
x.addListener(header_scale);