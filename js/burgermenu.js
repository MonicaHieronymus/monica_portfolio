//Variabel "btn", der henviser til ".toggle-btn"
let btn = document.querySelector(".toggle-btn")

//Variabel "menu", der henviser til ".main-menu"
let menu = document.querySelector(".main-menu")

//Funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu () { 

  //toggle klassen "shown" på menu vha. classList.toggle
menu.classList.toggle ("shown");

  //Variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
let menuShown = menu.classlist.contains("shown");

  //If-sætning for menuShown
  if (menuShown) {
    console.log(menuShown); //skrift i konsollen
    //btn.textContent til "Luk", hvis menuShown er "true"
  btn.textContent = "Luk";
  } else {
    console.log(menuShown); //skrift i konsollen
    //btn.textContent til "Menu", hvis menuShown er "false"
  btn.textContent = "Menu";
  }
// "toggleMenu()" slutter her
}
//Klik-event til "btn", der sætter toggleMenu-funktionen igang
btn.addEventListener("click", toggleMenu);