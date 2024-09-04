//Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});
$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})
$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})

//Burger Icon
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const navClick = document.querySelector('.nav');

navBtn.onclick = function(){
    navClick.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
}

/*LOCATION*/
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $(target);

       $('html, body').stop().animate({
          'scrollTop': $target.offset().top
       }, 900, 'swing', function() {
          window.location.hash = target;
       });
    });
 });

 /*ARROW*/
 $(document).ready(function() {
    // Отображение/скрытие кнопки при прокрутке
    $(window).scroll(function() {
       if ($(this).scrollTop() > 100) {
          $('#scroll-to-top-btn').fadeIn();
       } else {
          $('#scroll-to-top-btn').fadeOut();
       }
    });

    // Плавный скролл к верху страницы при нажатии на кнопку
    $('#scroll-to-top-btn').click(function() {
       $('html, body').animate({ scrollTop: 0 }, 800);
       return false;
    });
 });

