
const inputs = document.querySelectorAll('myinput');

inputs.forEach((input) => {
  input.addEventListener('focus', (event) => {
    event.target.style.borderColor = 'hsl(259, 100%, 65%)';
  });

  input.addEventListener('blur', (event) => {
    event.target.style.borderColor = '#ccc';
  });
});