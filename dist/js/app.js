/*
    Package Name: Website JS
    Package URI: https://quentinboitel.netlify.app/dist/js/app.js
    Description: Webiste Package
    Author: Quentin Boitel
    Version: 2.0.2
*/
/** When the page is loaded */


/**
 * @param {innerHTML} forms Fetch all forms to validate
 */
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
    // Loop over forms and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})();

/**
 * @param {innerHTML} button Back to top button
 */
back_top = document.getElementById("back-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (window.scrollY > 933) {
        console.log(window.scrollY)
        back_top.style.display = "flex";
    } else {
        back_top.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}