let boton1= document.getElementById("old");
let boton2= document.getElementById("new");
let banda= document.getElementById("foto");
let musica= document.getElementById("cancion1");
let titulo= document.getElementById("bandas");

etiqueta.addEventListener("click",perroGuardian); //detectar el clic y despertar el perro

function perroGuardian(){
    banda.src="img/mana.jpg";
    musica.src="audio/cancion1.mp3";
    titulo.textContent= "newMusic"

    titulo.classList.add("text-danger");
    titulo.classList.add("display-1");

  }

