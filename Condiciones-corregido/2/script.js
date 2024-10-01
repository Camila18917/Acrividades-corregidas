function mecuesta() {
  var checkBox = document.getElementById("tilde");
  var text = document.getElementById("opcion");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
