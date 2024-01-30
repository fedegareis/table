const tabla = document.getElementById("y");
const limitey = 7;
const limitex = 6;
const marco = [
    [,,,,,],
    [,,,,,],
    [,,,,,],
    [,,,,,],
    [,,,,,],
    [,,,,,],
    [,,,,,]
];



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
}
tablero();


