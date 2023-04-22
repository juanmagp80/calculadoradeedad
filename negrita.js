function makeBoldAndBlack() {
    var inputs = document.getElementsByClassName("myinput");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.fontWeight = "bold";
    inputs[i].style.color = "black";
  }
}