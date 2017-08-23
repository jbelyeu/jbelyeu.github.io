$(".thumbnail").click(function(event){
  console.log("freek");
  var img = event.toElement;
  var modal = document.getElementById(img.id + "Modal");
  var modalImg = document.getElementById(img.id + "Img");
  var captionText = document.getElementById(img.id +"Capt");

  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
});

var closeFun = function(event) {
  var span = event.toElement;
  var spanID = span.id;
  var modalID = spanID.substring(0, spanID.length - 5) + "Modal";
  var modal = document.getElementById(modalID);
  modal.style.display = "none";
};

var spans = document.getElementsByClassName("close");
for (var i = 0; i < spans.length; ++i) {
  spans[i].onclick = closeFun;
}