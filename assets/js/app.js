$(document).ready(function() {
  $("#btn-bars").on('click', function(event){
    event.preventDefault();
    $(".menu-top-big").toggleClass('active-mobile', 1000, "easeOutSine");
  });

  
  var swiper = new Swiper('.swiper-container', {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  
});