document.querySelectorAll("button")[0].addEventListener("click", handleClickW);
document.querySelectorAll("button")[1].addEventListener("click", handleClickA);
document.querySelectorAll("button")[2].addEventListener("click", handleClickS);
document.querySelectorAll("button")[3].addEventListener("click", handleClickD);
document.querySelectorAll("button")[4].addEventListener("click", handleClickJ);
document.querySelectorAll("button")[5].addEventListener("click", handleClickK);
document.querySelectorAll("button")[6].addEventListener("click", handleClickL);

var AudioW = document.createElement("AUDIO");
var AudioA = document.createElement("AUDIO");
var AudioS = document.createElement("AUDIO");
var AudioD = document.createElement("AUDIO");
var AudioJ = document.createElement("AUDIO");
var AudioK = document.createElement("AUDIO");
var AudioL = document.createElement("AUDIO");

AudioW.src = "sounds/tom-1.mp3";
AudioA.src = "sounds/tom-2.mp3";
AudioS.src = "sounds/tom-3.mp3";
AudioD.src = "sounds/tom-4.mp3";
AudioJ.src = "sounds/crash.mp3";
AudioK.src = "sounds/kick-bass.mp3";
AudioL.src = "sounds/snare.mp3";

function handleClickW() {
  AudioW.fastSeek(0);
  AudioW.play();
}

function handleClickA() {
  AudioA.fastSeek(0);
  AudioA.play();
}

function handleClickS() {
  AudioS.fastSeek(0);
  AudioS.play();
}

function handleClickD() {
  AudioD.fastSeek(0);
  AudioD.play();
}

function handleClickJ() {
  AudioJ.fastSeek(0);
  AudioJ.play();
}

function handleClickK() {
  AudioK.fastSeek(0);
  AudioK.play();
}

function handleClickL() {
  AudioL.fastSeek(0);
  AudioL.play();
}
