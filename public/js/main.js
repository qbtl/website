/*
Package Name: Website v1.4.1
Package URI: https://quentinboitel.netlify.app/
Description: The Package for my website
Author: Quentin Boitel
Version: 1.4.1
*/

/* Dark Theme Toggle */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const theme = localStorage.setItem('theme', 'dark');
const currentTheme = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
/* End Dark Theme Toggle */

/* Check if Website Content is Loaded */
document.addEventListener('DOMContentLoaded', () => {
  /* Navbar Burger */
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

/* Back to Top Button */
const bck_top_btn = document.querySelector('.bck-top-btn')
bck_top_btn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/* Timer */
/*
var deadline = new Date("Jul 11, 2020 16:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + "j " +
        hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Temps dépassé";
    }
}, 1000);
*/