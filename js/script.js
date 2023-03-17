// Vaáriavel global que pega todas as notas.
const keys = document.querySelectorAll(".key");

// Método para executar o evento do click e trocar a cor da tecla.
const handleMouseDown = (key) => {

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