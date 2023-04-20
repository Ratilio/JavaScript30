//when a key is pressed, the function is called

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//asigns data-key of pressed key to the audio
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(e.keyCode); //prints keycode number of pressed key
  if (!audio) return;//stops function from running
  audio.currentTime = 0;//sets the time of audio at the start, so it does not have to wait to finish to play it again
  audio.play();

  key.classList.add('playing');
}

function removeTransition(e) {
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);//
  key.classList.remove('playing');
}


window.addEventListener('keyup', removeTransition);//also lets the animation stays if the key is hold down
  //if instead of another function, (e), the word keyCode is deprecated but here and in the playsound function we can use it
  //const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

window.addEventListener('keydown', playSound);
