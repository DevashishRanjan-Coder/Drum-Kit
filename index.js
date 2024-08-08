function doWork(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "s":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "d":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    default:
      console.log(key);
  }
}

function animateButton(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

function playShit() {
  var buttonText = this.innerHTML;
  doWork(buttonText);
  animateButton(buttonText);
}

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playShit);
}

document.addEventListener("keydown", function (event) {
  doWork(event.key);
  animateButton(event.key);
});
