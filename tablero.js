const tabla = document.getElementById("y");
const botonera = document.getElementById("button");
const limitey = 7;
const limitex = 6;
const tablemove = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];
function botones(){
    for(let i = 0; i< limitex;i++){
        const boton = document.createElement("BUTTON");
        boton.classList.add("boton");
        boton.textContent =('PRESS');
        boton.dataset.valor = i;
        botonera.appendChild(boton);
}
}
  function tablero() {
    
    for (let i = 0; i <= limitey; i++) {
        const lineax = document.createElement("div");
        lineax.classList.add("lineas", "lineasx"); // Agrega clases a la línea horizontal
        lineax.style.top = `${i * (100 / limitey)}%`; // Calcula la posición vertical
        tabla.appendChild(lineax);
    }

    for (let j = 0; j <= limitex; j++) {
        const lineay = document.createElement("div");
        lineay.classList.add("lineas", "lineasy"); // Agrega clases a la línea vertical
        lineay.style.left = `${j * (100 / limitex)}%`; // Calcula la posición horizontal
        tabla.appendChild(lineay);
    }
    for (let i = 0; i <= limitey; i++) {
        for (let j = 0; j <= limitex; j++) {
            const espacioDiv = document.createElement("div");
            espacioDiv.classList.add("espacio");
            espacioDiv.dataset.fila = i;
            espacioDiv.dataset.columna = j;
            tabla.appendChild(espacioDiv);
        }
    }
}
function juego(){
    const limitemov = 40;
    var mov = 0 ;
    var player1 = 0;
    var player2 = 0;
    while(mov == limitemov || player1 == 4 || player2 == 4){

      botonera.addEventListener('click',function(event){
        const botonpress = event.target;
        if(botonpress.matches('.boton')){
            const valorboton = botonpress.dataset.valor;
        }
      });
        switch(valorboton){
            case 0:
              const ficha = document.createElement("div");
            ficha.classList.add("fichas");
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
        }
    }
}
botones();
tablero();


