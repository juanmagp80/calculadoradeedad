<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="style.css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  
  <title>Frontend Mentor | Age calculator app</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>
  <div class= "Contenedorprincipal">
    <form class="formday" action="">
      <label for="formday">DAY</label>
      <input type="text" id="formday" class="myinput" onkeyup="makeBoldAndBlack()" name="formday" placeholder="DD " required ">
    </form>
 
    <form class="formmonth" action="">
      <label for="formmonth">MONTH</label>
      <input type="text" id="formmonth" class="myinput" onkeyup="makeBoldAndBlack()" name="formmonth" placeholder="MM " required>
    </form>
    <form class="formyear" action="">
      <label for="year">YEAR</label>
      <input type="text" id="foryear" class="myinput" name="formyear" placeholder="YY " required>
    </form>
    <script src="negrita.js"></script>
    <
<script>
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  console.log(input.name);
  input.addEventListener('focus', (event) => {
    event.target.style.borderColor = 'red';
  });

  input.addEventListener('blur', (event) => {
    event.target.style.borderColor = '#ccc';
  });
}); 
</script>
