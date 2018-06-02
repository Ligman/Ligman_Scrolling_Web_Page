var canvas = document.getElementById("canvas");
var counter2 = document.getElementById("counter2");
var icon = document.getElementById("icon");

window.onscroll = function(){

  var y = window.pageYOffset;

  console.log(y);

  icon.style.top = -7100 + y * 1.022 + "px";
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

if (y>6400){
counter4.style.left="50px";
}else{ counter4.style.left= "-250px";
}

if (y>9000){
counter5.style.right="50px";
}else{ counter5.style.right= "-250px";
}

if (y>12400){
counter6.style.left="50px";
}else{ counter6.style.left= "-250px";
}

if (y>15000){
counter7.style.right="50px";
}else{ counter7.style.right= "-250px";
}

if (y>16800){
counter8.style.left="50px";
}else{ counter8.style.left= "-250px";
}
if (y>18500){
counter9.style.right="325px";
}else{ counter9.style.right= "-700px";
}

};
