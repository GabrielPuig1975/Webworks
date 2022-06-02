const resp = document.getElementById("resp");
const button1 = document.getElementById("button1");
const verdad = document.getElementById("true");
const falso = document.getElementById("false");

const respuesta1 = "MURCIELAGO";

let imagenes = [
  {
    nombre: "ask",
    src: "assets/images/ask.jpeg",
  },
  {
    nombre: "beedrill",
    src: "assets/images/beedrill.png",
  },
  {
    nombre: "butterfree",
    src: "assets/images/butterfree.png",
  },
  {
    nombre: "chansey",
    src: "assets/images/chansey.png",
  },
  {
    nombre: "charmander",
    src: "assets/images/charmander.png",
  },
  {
    nombre: "eevee",
    src: "assets/images/eevee.png",
  },
  {
    nombre: "flareon",
    src: "assets/images/flareon.png",
  },
  {
    nombre: "glaceon",
    src: "assets/images/glaceon.png",
  },
  {
    nombre: "growlithe",
    src: "assets/images/growlithe.png",
  },
  {
    nombre: "horca",
    src: "assets/images/eevee.png",
  },
  {
    nombre: "Ivysaur",
    src: "assets/images/Ivysaur.png",
  },
  {
    nombre: "mewtwo",
    src: "assets/images/mewtwo.png",
  },
  {
    nombre: "nidorino",
    src: "assets/images/nidorino.png",
  },
  {
    nombre: "raichu",
    src: "assets/images/raichu.png",
  },
  {
    nombre: "slaking",
    src: "assets/images/slaking.png",
  },
  {
    nombre: "Venusaur",
    src: "assets/images/Venusaur.png",
  },
  {
    nombre: "wartortle",
    src: "assets/images/wartortle.png",
  },
];

function muestra() {
  let buffImgs = [];
  for (const e of imagenes) {
    let imagen = new Image();
    imagen.nombre = e.nombre;
    imagen.src = e.src;
    buffImgs.push(imagen);
  }
  let indexImgAle = aleatImg(imagenes.length);
  let imgAleat = buffImgs[indexImgAle];
  const image = document.createElement("img");
  verdad.appendChild(imgAleat);

  function aleatImg(cantImgs) {
    return Math.floor(Math.random() * cantImgs);
  }
}

button1.addEventListener("click", () => {
  var rta = resp.value.toUpperCase();

  if (respuesta1 === rta) {
    muestra();
  } else {
    const newImage = document.createElement("img");
    newImage.src = "./assets/images/FALSE.png";
    falso.classList.add("false")
    verdad.classList.add("true");
    falso.textContent = "Pista: Tengo colmillitos";
    
  }
});
