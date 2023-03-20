// Vaáriavel global que pega todas as notas.
const keys = document.querySelectorAll(".key");
const checkBox = document.querySelector(".checkbox__keys");
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector(".piano__keys");

const playNote = (note) => {
   const audio = new Audio(`../notes/${note}.wav`);  
   audio.play();
}

// Método para executar o evento do click e trocar a cor da tecla.
const handleMouseDown = (key) => {
   
   playNote(key.getAttribute('data-note'));

  // Condição para pegar as teclas pretas e adcionar propiedades no seu estado ativo.  
  if(key.className.includes('black')) {
    key.classList.add('black--pressed');
     return;
  }

  // Estado ativo teclas brancas.
  key.style.background = "#ddd";
}

// Método para o evento soltar o mouse, e voltar as suas propiedades antigas.
const handleMouseUp = (key) => {

    if(key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
     }

    key.style.background = "white";
  }

// Laço para percorrer o array de teclas.  
keys.forEach((key) => {
  
  //Propiedades para adcionar evento.  
  key.addEventListener('mousedown', () => handleMouseDown(key));
  key.addEventListener('mouseup', () => handleMouseUp(key));

});

checkBox.addEventListener('change', ({ target }) => {
   if(target.checked) {
        switcher.classList.add("switcher--active");
        keysSection.classList.remove("disabled-keys");
        return;
   } 

   keysSection.classList.add("disabled-keys");
   switcher.classList.remove("switcher--active");
});

const keyDownMapper = {
  "Tab": () => handleMouseDown(keys[0]),
  "1": () => handleMouseDown(keys[1]),
  "q": () => handleMouseDown(keys[2]),
  "2": () => handleMouseDown(keys[3]),
  "w": () => handleMouseDown(keys[4]),
  "e": () => handleMouseDown(keys[5]),
  "4": () => handleMouseDown(keys[6]),
  "r": () => handleMouseDown(keys[7]),
  "5": () => handleMouseDown(keys[8]),
  "t": () => handleMouseDown(keys[9]),
  "6": () => handleMouseDown(keys[10]),
  "y": () => handleMouseDown(keys[11]),
  "u": () => handleMouseDown(keys[12]),
  "8": () => handleMouseDown(keys[13]),
  "i": () => handleMouseDown(keys[14]),
  "9": () => handleMouseDown(keys[15]),
  "o": () => handleMouseDown(keys[16]),
  "p": () => handleMouseDown(keys[17]),
  "-": () => handleMouseDown(keys[18]),
  "[": () => handleMouseDown(keys[19]),
  "=": () => handleMouseDown(keys[20]),
  "]": () => handleMouseDown(keys[21]),
  "Backspace": () => handleMouseDown(keys[22]),
  "/": () => handleMouseDown(keys[23]),
  }

  const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "u": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "o": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "[": () => handleMouseUp(keys[19]),
    "=": () => handleMouseUp(keys[20]),
    "]": () => handleMouseUp(keys[21]),
    "Backspace": () => handleMouseUp(keys[22]),
    "/": () => handleMouseUp(keys[23]),
    }

document.addEventListener('keydown' , (event) => {
  event.preventDefault();
   keyDownMapper[event.key]();
});

document.addEventListener('keyup' , (event) => {
   keyUpMapper[event.key]();
});