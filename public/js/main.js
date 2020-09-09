/*!Package Name: Website v1.2.1
Package URI: https://quentinboitel.netlify.app/
Description: The Package for my website
Author: Quentin Boitel
Version: 1.2.1*/

/* Dark Theme Toggle */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

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

/* Navbar Burger Active */
document.addEventListener('DOMContentLoaded', () => {
  
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });

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
})