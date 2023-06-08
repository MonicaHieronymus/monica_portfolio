//Variabel til Titelsekvens
const Titelsekvens = document.querySelector ("#Titelsekvens");

//addEventlistener til titelsekvens. Lytter til klik -> playTitel 
document.querySelector("#titelsekvens_snd").addEventListener("click", playTitel);

//Funktion playTitel
function playTitel () {

//Tekst i konsollen    
console.log ("playTitel");

//Sæt titelsekvens igang med at spille. Spiller 1 gang, når der bliver klikket.
Titelsekvens.currentTime = 0;
Titelsekvens.play();
}