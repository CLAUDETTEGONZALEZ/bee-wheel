document.querySelector("#btn-agregar").addEventListener("click", agregar);


let nombres = [];

function agregar() {
    let nombre = document.querySelector('#nombre').value;

    //agrego elemento al array
    nombres.push(nombre);
    console.log(nombres);

    //muestro el array
    //mostrar();

    //vaciar el input
    document.querySelector('#nombre').value = "";

}

/* function mostrar() {
    let lista = document.querySelector('.listado');
    lista.innerHTML = '';

    for (let elementoActual of nombres) {
        lista.innerHTML += "<li>" + elementoActual + "</li>";
    }
}
 */