const buttonReview = document.getElementById('review-btn');
const formReview = document.getElementById('review-container');

buttonReview.addEventListener('click', () => {
  formReview.style.display === 'block' ? formReview.style.display = 'none' : formReview.style.display = 'block';
  formReview.style.display === 'block' ? buttonReview.innerText = '- Do later' : buttonReview.innerText = '+ Add Review';
});
