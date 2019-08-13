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

