var noofButton=document.querySelectorAll(".xylo").length;
for(var i=0; i<noofButton;i++){
	document.querySelectorAll(".xylo")[i].addEventListener("click",function(){

	

   var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
});
}


document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
     
     case "c":
      var c = new Audio("sound/n1.wav");
       c.play();
      break;

    case "d":
      var d = new Audio("sound/n2.wav");
      d.play();
      break;

    case "e":
      var e = new Audio('sound/n3.wav');
      e.play();
      break;

    case "f":
      var f = new Audio('sound/n4.wav');
      f.play();
      break;

    case "g":
      var g = new Audio('sound/n5.wav');
      g.play();
      break;

    case "h":
      var h = new Audio('sound/n6.wav');
      h.play();
      break;

    case "a":
      var a = new Audio('sound/n7.wav');
      a.play();
      break;


    case "b":
      var b = new Audio('sound/n1.wav');
      b.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
