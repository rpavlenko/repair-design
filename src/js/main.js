// document.addEventListener("DOMContentLoaded", function (event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');


//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
    
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

//   // close modal when click out of modal
//   window.onclick = function (event) {
//     if (event.target == modal) {
//       switchModal();
//     }
//   }
  
//   // close modal when Escape pressed
//   window.addEventListener('keydown', function (event) {
//     if (event.key === 'Escape') {
//       modal.classList.remove('modal--visible')
//     }
//   })

// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]');
      closeBtn = $('.modal__close');
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  // scroll up button
  $("#button").on("click", function () {
    $("html").animate({
      scrollTop: 0
    }, 1500);
  });

  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  // sliders


  var completedProjectsSwiper = new Swiper('.completed-projects-swiper', {
    loop: true,
    navigation: {
      nextEl: '.completed-projects-next',
      prevEl: '.completed-projects-prev',
    },
    pagination: {
      el: '.completed-projects-pagination',
      type: 'bullets',
    },
    
  });
  var next = $('.completed-projects-next');
  var prev = $('.completed-projects-prev');
  var bullets = $('.completed-projects-pagination');
  next.css('left', prev.width() + 30 + bullets.width() + 12);
  bullets.css('left', 30 + prev.width());
  

  var sixStepsSwiper = new Swiper('.six-steps-swiper', {
    controller: {
        control: fractionSwiper,
    },

    pagination: {
      el: '.swiper-pagination-six-steps',
      type: 'bullets',
    },

  });

  var fractionSwiper = new Swiper('.six-steps-swiper-images', {
    controller: {
      control: sixStepsSwiper,
    },
    pagination: {
      el: '.secondPagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-six-steps',
      prevEl: '.swiper-button-prev-six-steps',
    },
    
  });

  fractionSwiper.on('slideChange', function () {
    var activeSlide = ('.slide-' + fractionSwiper.realIndex);
    var prevSlide = ('.slide-' + fractionSwiper.previousIndex)
    if ($(activeSlide).hasClass("active")) {
      $(activeSlide).removeClass("active");
    } else {
      $(prevSlide).removeClass("active");
      $(activeSlide).addClass("active");
    }
  });

  document.querySelector('.slide-0').addEventListener('click', function (e) {
    e.preventDefault();
    fractionSwiper.slideTo(0);
  });

  document.querySelector('.slide-1').addEventListener('click', function (e) {
    e.preventDefault();
    fractionSwiper.slideTo(1);
  });

  document.querySelector('.slide-2').addEventListener('click', function (e) {
    e.preventDefault();
    fractionSwiper.slideTo(2);
  });

  document.querySelector('.slide-3').addEventListener('click', function (e) {
    e.preventDefault();
    fractionSwiper.slideTo(3);
  });

  document.querySelector('.slide-4').addEventListener('click', function (e) {
    e.preventDefault();
    fractionSwiper.slideTo(4);
  });

  document.querySelector('.slide-5').addEventListener('click', function (e) {
    e.preventDefault();
    fractionSwiper.slideTo(5);
  });





  var nextSixSteps = $('.swiper-button-next-six-steps');
  var prevSixSteps = $('.swiper-button-prev-six-steps');
  var bulletsSixSteps = $('.swiper-pagination-six-steps');
  nextSixSteps.css('left', prevSixSteps.width() + 30 + bulletsSixSteps.width() + 12);
  bulletsSixSteps.css('left', 30 + prevSixSteps.width());
});

