const tabla = document.getElementById("y");
const botonera = document.getElementById("button");
var contador = 0;

const colores = {
    player1: "red",
    player2: "yellow",
    
};

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
        const lineasy = document.createElement("div");
        lineasy.classList.add("lineas", "lineasx"); // Agrega clases a la línea horizontal
        lineasy.style.top = `${i * (100 / limitey)}%`; // Calcula la posición vertical
        tabla.appendChild(lineasy);
    }

    for (let j = 0; j <= limitex; j++) {
        const lineax = document.createElement("div");
        lineax.classList.add("lineas", "lineasy"); // Agrega clases a la línea vertical
        lineax.style.left = `${j * (100 / limitex)}%`; // Calcula la posición horizontal
        tabla.appendChild(lineax);
    }
    for (let i = 0; i < limitey; i++) {
        for (let j = 0; j < limitex; j++) {
            const fila = i;
            const  columna = j; 
            const espacioDiv = document.createElement("div");
            espacioDiv.classList.add("espacio");
            espacioDiv.dataset.fila = i;
            espacioDiv.dataset.columna = j;
            console.log(`espacio fila:${fila}${window.scrollY}, columna: ${columna}${window.scrollX}`);
            tabla.appendChild(espacioDiv);
        }
    }
}


function juego(){
    
        var band = false ;
        var pos;
        botonera.addEventListener('click',function(event){
        const botonpress = event.target;
        if(botonpress.matches('.boton')){
        const valorboton = botonpress.dataset.valor;
        switch(valorboton){
            case "0":
                    for(let i = limitex; i >= 0 ;i--){
                        if(tablemove[i][0] == 0){
                            pos = i;
                            band = true;
                            break;
                        }
                        
                    }
                    if(band){
                        const ficha = document.createElement("div");
                        ficha.classList.add("fichas"); 
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${0}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][0] = 1;
                    }
                    else{
                        window.alert("Ya no existen casillas libres en esta columna!");
                    }
                break;
            case "1":         
            for(let i = limitex; i >= 0 ;i--){
                if(tablemove[i][1] == 0){
                    pos = i;
                    band = true;
                    break;
                }
                
            }
            if(band){
                const ficha = document.createElement("div");
                ficha.classList.add("fichas"); 
                const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${1}"]`);
                celda.appendChild(ficha);
                tablemove[pos][1] = 1;
            }
            else{
                window.alert("Ya no existen casillas libres en esta columna!");
            }
                break;
            case "2":
                for(let i = limitex; i >= 0 ;i--){
                    if(tablemove[i][2] == 0){
                        pos = i;
                        band = true;
                        break;
                    }
                    
                }
                if(band){
                    const ficha = document.createElement("div");
                    ficha.classList.add("fichas"); 
                    const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${2}"]`);
                    celda.appendChild(ficha);
                    tablemove[pos][2] = 1;
                }
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                }
                break;
            case "3":
                for(let i = limitex; i >= 0 ;i--){
                    if(tablemove[i][3] == 0){
                        pos = i;
                        band = true;
                        break;
                    }
                    
                }
                if(band){
                    const ficha = document.createElement("div");
                    ficha.classList.add("fichas"); 
                    const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${3}"]`);
                    celda.appendChild(ficha);
                    tablemove[pos][3] = 1;
                }
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                }
                break;
            case "4":
                for(let i = limitex; i >= 0 ;i--){
                    if(tablemove[i][4] == 0){
                        pos = i;
                        band = true;
                        break;
                    }
                    
                }
                if(band){
                    const ficha = document.createElement("div");
                    ficha.classList.add("fichas"); 
                    const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${4}"]`);
                    celda.appendChild(ficha);
                    tablemove[pos][4] = 1;
                }
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                }
                break;
            case "5":
                for(let i = limitex; i >= 0 ;i--){
                    if(tablemove[i][5] == 0){
                        pos = i;
                        band = true;
                        break;
                    }
                    
                }
                if(band){
                    const ficha = document.createElement("div");
                    ficha.classList.add("fichas"); 
                    const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${5}"]`);
                    celda.appendChild(ficha);
                    tablemove[pos][5] = 1;
                }
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                }
                break;
             }
            }
        });
    
}
botones();
tablero();
juego();


