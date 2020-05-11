$(document).ready(function () {
  $('.menu-icon').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.menu-icon').click(function(e){
    e.preventDefault();
    $this = $(this);
    if($this.hasClass('is-opened')){
      $this.addClass('is-closed').removeClass('is-opened');
    }else{
      $this.removeClass('is-closed').addClass('is-opened');
    }
  })

  $('.top-nav .nav-list .nav-link').on('click', function () {
    $('.menu-icon').removeClass('is-opened');
    $('.menu-icon').toggleClass('is-closed');
    $('.top-nav').removeClass('open');
  });

  $('nav ul li a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 2000);
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