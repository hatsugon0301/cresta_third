$(function () {
  var fvHeight = $('.fv').outerHeight();

  $(window).on('load scroll', function () {

    if ($(this).scrollTop() > fvHeight) {
      $('header').addClass('black-bg');
    } else {
      $('header').removeClass('black-bg');
    }
  });
  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('close');
    $('.header-nav,.mask,.fv-content').toggleClass('open');
  });
}());