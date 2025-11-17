document.addEventListener('DOMContentLoaded', function () {

  // Nav buttons on homepage
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(button.getAttribute('aria-label') + ' clicked');
    });
  });

  // Plus button on chat page
  const plusButton = document.querySelector('.plus-btn');
  if (plusButton) {
    plusButton.addEventListener('click', () => {
      alert('New chat started!');
    });
  }
});

