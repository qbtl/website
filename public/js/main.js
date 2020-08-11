$(document).ready(function () {
  $('nav ul li a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 2000);
    $('.navbar-home').removeClass('active');
    $('.navbar-about').removeClass('active');
    $('.navbar-portfolio').removeClass('active');
    $('.navbar-exp').removeClass('active');
    $('.navbar-contact').removeClass('active');
    $(this).addClass('active');
    $('.navbar-list').removeClass('navbar-active');
    $('.burger').removeClass('toggle')
  });

  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});

const navbar_slide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar-list');
  const navbar_list = document.querySelectorAll('.navbar-list li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('navbar-active');
    // Animate Links 
    navbar_list.forEach((link, index) => {
      link.style.animation = `navbar-fade .5s ease forwards ${index / 10 + 0,1}s`
    });
    // Burger animation 
    burger.classList.toggle('toggle');
  });
}

navbar_slide();