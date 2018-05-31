var canvas = document.getElementById("canvas");
var counter2 = document.getElementById("counter2");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  icon.style.top = -6800 + y * 1.022 + "px";
  icon.innerHTML = y + "px";

/////////////////slide in
if (y>1600){
counter2.style.left="50px";
}else{ counter2.style.left="-250px";
}

if (y>4000){
counter3.style.right="50px";
}else{ counter3.style.right= "-250px";
}

if (y>4000){
counter4.style.left="50px";
}else{ counter4.style.left= "-250px";
}



///////////////pop up





};
