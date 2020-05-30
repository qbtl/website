$(document).ready(function () {
  $('nav ul li a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 2000);
    $('.homeNav').removeClass('active');
    $('.aboutNav').removeClass('active');
    $('.portfolioNav').removeClass('active');
    $('.experienceNav').removeClass('active');
    $('.contactNav').removeClass('active');
    $(this).addClass('active');
    $('.navLinks').removeClass('navActive');
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

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navLinks');
  const navLinks = document.querySelectorAll('.navLinks li');

  burger.addEventListener('click', ()=>{
    // Toggle Nav
    nav.classList.toggle('navActive');
    // Animate Links 
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ``
      } else {
        link.style.animation = `navLinksFade .5s ease forwards ${index / 9 + 0,1}s`
      }
    });
    // Burger animation 
    burger.classList.toggle('toggle');
  });
}

navSlide();