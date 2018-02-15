
var buttonReview = document.getElementsByClassName('review-btn');
var formReview = document.getElementsByClassName('review-container');

for (let i = 0; i < buttonReview.length; i++) {
  buttonReview[i].addEventListener('click', () => {
    console.log(buttonReview[i]);
    formReview[i].style.display === 'block' ? formReview[i].style.display = 'none' : formReview[i].style.display = 'block';
    formReview[i].style.display === 'block' ? buttonReview[i].innerText = '- Do later' : buttonReview[i].innerText = '+ Add Review';
  });
}
