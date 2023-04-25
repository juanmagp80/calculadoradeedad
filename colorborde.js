
const inputs = document.querySelectorAll('myinput');

inputs.forEach((input) => {
  myinput.addEventListener('focus', (event) => {
    event.target.style.borderColor = 'hsl(259, 100%, 65%)';
  });

  myinput.addEventListener('blur', (event) => {
    event.target.style.borderColor = '#ccc';
  });
});