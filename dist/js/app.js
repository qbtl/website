/*
    Package Name: Website JS
    Package URI: https://quentinboitel.netlify.app/dist/js/app.js
    Description: Webiste Package
    Author: Quentin Boitel
    Version: 2.0.0
*/
/**
 * @param {int} scrollY Window scroll from top
 * @function navbar_top Keep the navbar at the top of the page
 * @function navbar_bottom Keep the navbar at the bottom of the page
 */
/** When the page is loaded */
document.addEventListener("DOMContentLoaded", function () {
    /** If the user scrolls */
    document.addEventListener("scroll", function () {
        /** Check the scroll from top */
        if (window.scrollY >= 787) {
            /** If scroll is >= 787 then keep the navbar on top */
            navbar_top()
        } else if (window.scrollY <= 788 && window.scrollY >= 0) {
            /** If scroll is <= 788 and >= 0 then keep the navabr at the bottom */
            navbar_bottom()
        }
    })
})
/* Add the classes to keep the navbar on top */
function navbar_top() {
    navbar.classList.remove("navbar-fixed-bottom")
    navbar.classList.add("navbar-sticky-top");
}
/* Add the classes to keep the navbar at the bottom */
function navbar_bottom() {
    navbar.classList.remove("navbar-sticky-top");
    navbar.classList.add("navbar-fixed-bottom")
}

/**
 * @param {string} APIURL Url of the GitHub API
 * @param {innerHTML} main The html element that contain the github profile card
 * @param {string} username The username of the github account you want to
 */
const APIURL = "https://api.github.com/users/";
const main = document.getElementById("github-profile");

getUser("qbtl");
async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    createUserCard(respData);
}
function createUserCard(user) {
    const cardHTML = `
        <div class="github-card">
            <div class="row">
                <div class="col-12 col-md logo">
                    <a href="${user.html_url}"><img class="avatar" src="${user.avatar_url}" alt="${user.name}"/></a>
                </div>
                <div class="user-info col-12 col-md">
                    <h2>${user.name}</h2>
                    <p>${user.bio}</p>
                    <br>
                    <ul class="info">
                        <li>${user.followers}<strong>Followers</strong></li>
                        <li>${user.following}<strong>Following</strong></li>
                        <li>${user.public_repos}<strong>Repositories</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    main.innerHTML = cardHTML;
}

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