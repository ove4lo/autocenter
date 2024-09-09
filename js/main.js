//Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
    loop: true,
    startPosition: 1,
    margin: 10,
    items: 4,
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

 document.querySelector('.request__form').addEventListener('submit', function (e) {
   e.preventDefault(); // Предотвращаем отправку формы по умолчанию

   const nameField = document.getElementById('name');
   const phoneField = document.getElementById('phone');
   let valid = true;

   // Валидация поля "Имя"
   if (nameField.value.trim() === '') {
       setError(nameField, 'Это поле обязательно для заполнения');
       valid = false;
   } else {
       clearError(nameField);
   }

   // Валидация поля "Телефон"
   const phoneRegex = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
   if (!phoneRegex.test(phoneField.value)) {
       setError(phoneField, 'Номер введен некорректно');
       valid = false;
   } else {
       clearError(phoneField);
   }

   if (valid) {
       alert('Форма отправлена.');
   }
});

// Функция добавления ошибки
function setError(element, message) {
   element.style.border = '1px solid red';
   if (!element.nextElementSibling || !element.nextElementSibling.classList.contains('error')) {
       const error = document.createElement('div');
       error.className = 'error';
       error.style.color = 'red';
       error.style.fontSize = '12px';
       error.textContent = message;
       element.parentElement.appendChild(error);
   }
}

// Функция очистки ошибки
function clearError(element) {
   element.style.border = '';
   if (element.nextElementSibling && element.nextElementSibling.classList.contains('error')) {
       element.nextElementSibling.remove();
   }
}

// Форматирование номера телефона
document.getElementById('phone').addEventListener('input', function (e) {
   let phone = e.target.value.replace(/\D/g, ''); 


   if (phone.length > 11) {
       phone = phone.substring(0, 11); 
   }

   if (phone.startsWith('7')) {
       phone = '+' + phone;
   } else {
       phone = '+7' + phone;
   }

   if (phone.length > 2) {
       phone = phone.substring(0, 2) + ' ' + phone.substring(2);
   }
   if (phone.length > 6) {
       phone = phone.substring(0, 6) + ' ' + phone.substring(6);
   }
   if (phone.length > 10) {
       phone = phone.substring(0, 10) + ' ' + phone.substring(10);
   }
   if (phone.length > 13) {
       phone = phone.substring(0, 13) + ' ' + phone.substring(13);
   }

   e.target.value = phone;
});

