const Titelsekvens = document.querySelector ("#Titelsekvens");
document.querySelector("#titelsekvens_snd").addEventListener("click", playTitel);

function playTitel () {
console.log ("playTitel");
Titelsekvens.currentTime = 0;
Titelsekvens.play();
}