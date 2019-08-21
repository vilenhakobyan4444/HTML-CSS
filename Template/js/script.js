                                // DROPMENU
         
var click = 0;
function menu() {
   var dropBlock = document.getElementById("globalNav");
   click++;
   if(click%2!=0){
        dropBlock.style.display = "block";
   }
   else{
        dropBlock.style.display = "none";  
   }
}

                                // NAVBAR SCROLL

function func(){
    var y = scrollY;
     var nav = document.getElementById("navbar");
     document.getElementById("haupt").style.top = "0"
     nav.style.top = "0";
     nav.style.transition = "1" + "s";
}



                                // ***SLIDER***

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
