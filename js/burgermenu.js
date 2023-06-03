// Lav variablen "btn", der henviser til ".toggle-btn"
let btn = document.querySelector(".toggle-btn")

// Lav variablen "menu", der henviser til ".main-menu"
let menu = document.querySelector(".main-menu")

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu () { 

  // a) toggle klassen "shown" på menu vha. classList.toggle
menu.classList.toggle ("shown");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
let menuShown = menu.classlist.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
  btn.textContent = "Luk";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
  btn.textContent = "Menu";
  }
// "toggleMenu()" slutter her
}
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);