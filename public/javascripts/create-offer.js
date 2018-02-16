
const button = document.getElementById('create-btn');
const form = document.getElementById('offer-container');

button.addEventListener('click', () => {
  form.style.display = 'block';
  button.style.display = 'none';
});
