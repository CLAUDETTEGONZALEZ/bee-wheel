document.querySelector("#btn-agregar").addEventListener("click", agregar);


let array_concursantes= [];

function agregar() {
    let nombre = document.querySelector('#nombre').value;

    //agrego elemento al array
    array_concursantes.push(nombre);
    console.log(array_concursantes);

    //vaciar el input
    document.querySelector('#nombre').value = "";

}

