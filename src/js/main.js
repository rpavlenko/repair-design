document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');


  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
    
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  // close modal when click out of modal
  window.onclick = function (event) {
    if (event.target == modal) {
      switchModal();
    }
  }
  
  // close modal when Escape pressed
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.classList.remove('modal--visible')
    }
  })

});