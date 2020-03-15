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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  var sixStepsSwiper = new Swiper('.six-steps-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-six-steps',
      type: 'bullets',
    },
  });


    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');
    next.css('left', prev.width() + 30 + bullets.width() + 12);
    bullets.css('left', 30 + prev.width());
    
    var next = $('.swiper-button-next-six-steps');
    var prev = $('.swiper-button-prev-six-steps');
    var bulletsSixSteps = $('.swiper-pagination-six-steps');
    nextSixSteps.css('left', prev.width() + 30 + bulletsSixSteps.width() + 12);
    bulletsSixSteps.css('left', 30 + prev.width());
})
