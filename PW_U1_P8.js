document.addEventListener("DOMContentLoaded", function() {
    let pantalla = document.getElementById("pantalla");

    function agregar(valor) {
        pantalla.value += valor;
    }

    function limpiar() {
        pantalla.value = "";
    }

    function borrar() {
        pantalla.value = pantalla.value.slice(0, -1);
    }

    function calcular() {
        try {
            pantalla.value = eval(pantalla.value);
        } catch {
            pantalla.value = "Error";
        }
    }

    // Asigna las funciones al ámbito global para que los botones las reconozcan
    window.agregar = agregar;
    window.limpiar = limpiar;
    window.borrar = borrar;
    window.calcular = calcular;
});
