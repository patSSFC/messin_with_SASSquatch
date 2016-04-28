$(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    center: true,
    autoplayTimeout: 3000,
    autoWidth: true,
    autoHeight: true,
    }
  );
  $('.hamburger').on ('click', function() {
    $('.res').slideToggle();
  });
});
