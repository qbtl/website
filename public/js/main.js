$(document).ready(function () {
  $('.menuIcon').on('click', function () {
    $(this).toggleClass('open');
    $('.topNav').toggleClass('open');
  });

  $('.menuIcon').click(function (e) {
    e.preventDefault();
    $this = $(this);
    if ($this.hasClass('isOpened')) {
      $this.addClass('isClosed').removeClass('isOpened');
    } else {
      $this.removeClass('isClosed').addClass('isOpened');
    }
  })

  $('.topNav .navList .navLink').on('click', function () {
    $('.menuIcon').removeClass('isOpened');
    $('.menuIcon').toggleClass('isClosed');
    $('.topNav').removeClass('open');
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