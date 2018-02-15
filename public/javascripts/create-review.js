
var buttonReview = document.getElementsByClassName('review-btn');
var formReview = document.getElementsByClassName('review-container');
// const Coupon = require('./../models/coupon');

for (let i = 0; i < buttonReview.length; i++) {
  buttonReview[i].addEventListener('click', () => {
    formReview[i].style.display === 'block' ? formReview[i].style.display = 'none' : formReview[i].style.display = 'block';
    formReview[i].style.display === 'block' ? buttonReview[i].innerText = '- Do later' : buttonReview[i].innerText = '+ Add Review';
  });
}

// var useCoupon = document.getElementsByClassName('use-coupon');

// for (let i = 0; i < useCoupon.length; i++) {
//   useCoupon[i].addEventListener('click', (e) => {
//     console.log(e);
//     Coupon.findById({ couponId: Coupon._id })
//       .then((coupons) => {
//         coupons.status = true;
//         useCoupon[i].innerText = coupons._id;
//       });
//   });
// }
