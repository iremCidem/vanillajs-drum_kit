
window.addEventListener("keydown", (event) => handleKey(event));
function handleKey(event){
  const key = event.keyCode;
  const drum = document.querySelector(`div[data-key="${key}"]`); 
  const sound = document.querySelector(`audio[data-key="${key}"]`);
  if(!sound) return;
  drum.classList.add("clicked")
  setTimeout(() => drum.classList.remove("clicked") ,700);
  sound.currentTime = 0; // sesin bitmesine gerek kalamdan tekrar kullanabiliyoruz.
  sound.play(); 
}
