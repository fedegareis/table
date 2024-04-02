
const tabla = document.getElementById("y");
const botonera = document.getElementById("b");
const botoninit = document.getElementById("incio");
var band = 0;
var player1 = 0;
var player2 = 0;
var contador = 0;
var contb = 0;
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

function registro(){
    const regis = document.createElement('div');
    regis.setAttribute('id','registro');
    const jugador1 = document.createElement('div');
    const text1 = document.createElement('p'); 
    text1.textContent = "Nombre del Jugador 1: ";
    const input1 = document.createElement('INPUT');
    input1.setAttribute('type','text');
    jugador1.appendChild(text1);
    jugador1.appendChild(input1);

    const jugador2 = document.createElement('div');
    const text2 = document.createElement('p');
    text2.textContent = "Nombre del jugador 2: ";
    const input2 = document.createElement('INPUT');
    input2.setAttribute('type','text');
    jugador2.appendChild(text2);
    jugador2.appendChild(input2);

    regis.appendChild(jugador1);
    regis.appendChild(jugador2);

    tabla.appendChild(regis);
}

function papelitos() {
    for(let i = 0 ; i<= 100;i++){
    const colores = ['red', 'green', 'blue', 'yellow', 'orange', 'purple']; 
    const papel = document.createElement('div');
   
    papel.classList.add('papelitos');
    document.body.appendChild(papel);
  
    papel.style.left = Math.random() *  (window.innerWidth - 10) + 'px';
    papel.style.top = Math.random() *  window.innerHeight  + 'px';
    papel.style.animationDuration = Math.random() * 2 + 3 + 's';
  
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    papel.style.backgroundColor = randomColor;
  
    setTimeout(() => {
      papel.style.top = window.innerHeight + 'px';
    }, Math.random() * 2000 + 1000); console.log(papel);
   }   
       botonera.innerHTML = '';
  }

function botones(){
    if(contb != limitex){
    for(let i = 0; i< limitex;i++){
        const boton = document.createElement("BUTTON");
        boton.classList.add("boton");
        boton.textContent =('PRESS');
        boton.dataset.valor = i;
        botonera.appendChild(boton);
        contb++;
        }
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
    
} 


function espacios (){
    
    for (let i = 0; i < limitey; i++) {
        for (let j = 0; j < limitex; j++) {
            const fila = i;
            const  columna = j; 
            const espacioDiv = document.createElement("div");
            espacioDiv.classList.add("espacio");
            espacioDiv.dataset.fila = i;
            espacioDiv.dataset.columna = j;
            //console.log(`espacio fila:${fila}${window.scrollY}, columna: ${columna}${window.scrollX}`);
            //ver en que posicion se esta creando la grilla.
            tabla.appendChild(espacioDiv);
        }
    } 
}

function juego(){

        let band = false ;
        let pos ;
        botonera.addEventListener('click',function(event){
        const botonpress = event.target;  
        
        if(botonpress.matches('.boton')){
        const valorboton = botonpress.dataset.valor;
        contador++;
       
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
                        if(tablemove[pos][0] == 0){
                        if(contador %2 == 0 ){
                            ficha.style.backgroundColor = "yellow";
                            const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${0}"]`);
                            celda.appendChild(ficha);
                            tablemove[pos][0] = 2;
                        }
                        else{
                            const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${0}"]`);
                            celda.appendChild(ficha);
                            tablemove[pos][0] = 1;
                        }
                         
                    }
                    else{
                        window.alert("Ya no existen casillas libres en esta columna!");
                        contador--;
                    }

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
                if(tablemove[pos][1] == 0){ 
                if(contador %2 == 0 ){
                    ficha.style.backgroundColor = "yellow";
                    const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${1}"]`);
                    celda.appendChild(ficha);
                    tablemove[pos][1] = 2;
                }
                else{
                    const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${1}"]`);
                    celda.appendChild(ficha);
                    tablemove[pos][1] = 1;
                }
                }
                    else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                    contador--;
                }
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
                    if(tablemove[pos][2] == 0){ 
                    if(contador %2 == 0 ){
                        ficha.style.backgroundColor = "yellow";
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${2}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][2] = 2;
                    }
                    else{
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${2}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][2] = 1;
                    }
                }
                
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                    contador--;
                }
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
                    if(tablemove[pos][3] == 0){
                    if(contador %2 == 0 ){
                        ficha.style.backgroundColor = "yellow";
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${3}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][3] = 2;
                    }
                    else{
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${3}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][3] = 1;
                    }
                }
                
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                    contador--;
                }
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
                    if(tablemove[pos][4] == 0){
                    if(contador %2 == 0 ){
                        ficha.style.backgroundColor = "yellow";
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${4}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][4] = 2;
                    }
                    else{
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${4}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][4] = 1;
                    }
                }
                
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                }
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
                    if(tablemove[pos][5] == 0){
                    if(contador %2 == 0 ){
                        ficha.style.backgroundColor = "yellow";
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${5}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][5] = 2;
                    }
                    else{
                        const celda = tabla.querySelector(`.espacio[data-fila="${pos}"][data-columna="${5}"]`);
                        celda.appendChild(ficha);
                        tablemove[pos][5] = 1;
                    }
                }
                
                else{
                    window.alert("Ya no existen casillas libres en esta columna!");
                    contador--;
                }
            }
                break;
             }
            }
            const ganador1 = verificar(tablemove,1);
            const ganador2 = verificar(tablemove,2);
            if(ganador1){
                player1 ++;
                papelitos();
            }
            else 
                if(ganador2){
                player2++;
                papelitos();
           
        }
        });
      
    
}
function verificar(tablero,jugador){
        // Verificar filas
        for (let fila = 0; fila < tablero.length; fila++) {
            let conta = 0;
            for (let columna = 0; columna < tablero[fila].length; columna++) {
                if (tablero[fila][columna] === jugador) {
                    conta++;
                    if (conta === 4) {
                        return true; // El jugador ganó
                    }
                } else {
                    conta = 0; // Reiniciar el contador si el número no es del jugador actual
                }
            }
        }
    
        // Verificar columnas
        for (let columna = 0; columna < tablero[0].length; columna++) {
            let conta = 0;
            for (let fila = 0; fila < tablero.length; fila++) {
                if (tablero[fila][columna] === jugador) {
                    conta++;
                    if (conta === 4) {
                        return true; // El jugador ganó
                    }
                } else {
                    conta = 0; // Reiniciar el contador si el número no es del jugador actual
                }
            }
        }
        
        for (let filas = 0; filas < tablero.length - 2; filas++) {
            for (let columna = 0; columna < tablero[0].length - 2; columna++) {
                if (tablero[filas][columna] === jugador &&
                    tablero[filas + 1][columna + 1] === jugador &&
                    tablero[filas + 2][columna + 2] === jugador &&
                    tablero[filas + 3][columna + 3] === jugador) {
                    return true;
                }
            }
        }
    
        // Verificar diagonales descendentes
        for (let filas = 0; filas < tablero.length - 2; filas++) {
            for (let columna = 2; columna < tablero[0].length; columna++) {
                if (tablero[filas][columna] === jugador &&
                    tablero[filas + 1][columna - 1] === jugador &&
                    tablero[filas + 2][columna - 2] === jugador &&
                    tablero[filas + 3][columna - 3] === jugador) {
                    return true;
                }
            }
        }
        // No se encontraron tres números consecutivos en ninguna dirección
        return false;
}
function inicio(){
    registro();    
    botoninit.textContent = ('COMENZAR');
    botoninit.addEventListener('click',function(event){
    const botinit = event.target;
        
    if (band === 0){
        if(botinit.matches('.boton')){
          //  const limpiarregis = document.getElementById('registro');
            //tabla.parentNode.removeChild(limpiarregis);            
           
            botones();
            tablero();
            espacios();   
            juego();
            band++; 
             botoninit.textContent = ("REINICIAR");
             tabla.scrollIntoView({ behavior: 'smooth', block: 'center' });
             const limpiarregis = document.getElementById('registro');
            tabla.parentNode.removeChild(limpiarregis); 
        }
    }
    else{
        
        if(botoninit.matches('.boton')){
            const elemespacios = document.querySelectorAll('.espacios');
            elemespacios.forEach(espacio => espacio.parentNode.removeChild(espacio));
            
        for(let i=0; i < limitey ;i++){
            for(let j=0; j< limitex;j++){
                tablemove[i][j] = 0;
                const celda = tabla.querySelector(`.espacio[data-fila="${i}"][data-columna="${j}"]`);
                if (celda) {
                    celda.parentNode.removeChild(celda);
                }
                // else {    console.error("No se encontró ninguna celda para eliminar");}
                //celda.forEach(celdas => celdas.parentNode.removeChild(celdas)); esto es en caso de estar fuera del for y que sea queryselectorall

                
                
                }
              }
                const limpiarPapel = document.querySelectorAll(".papelitos");
                limpiarPapel.forEach(limpiar => limpiar.parentNode.removeChild(limpiar));
                player1 = 0;
                player2 = 0;
                contador = 0;
                contb = 0;
                botonera.innerHTML='';
                botones();// no se borran por el inner de los papelitos. hay que borrarlos de las dos maneras.
                espacios();
                tabla.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
            }
             
        }
    });
        
    }    




inicio();

