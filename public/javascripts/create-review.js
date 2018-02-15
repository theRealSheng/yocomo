
const buttonReview = document.querySelectorAll('.review-btn');
const formReview = document.querySelectorAll('.review-container');

buttonReview.forEach((btn) => {
  btn.addEventListener('click', () => {

  });
});

formReview.style.display === 'block' ? formReview.style.display = 'none' : formReview.style.display = 'block';
formReview.style.display === 'block' ? buttonReview.innerText = '- Do later' : buttonReview.innerText = '+ Add Review';
