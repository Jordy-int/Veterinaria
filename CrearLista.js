import {datosUsuarios} from "./javascript.js"
import {encontrarGlobal} from "./iniciarsesionusuario.js"

//Creación de citas
export function ListaCitas() {

    const lista = document.querySelector('ul');

    const info = encontrarGlobal;
    let auxiliar = datosUsuarios[info];
    console.log(auxiliar);


    //falta finindex
    let nombre = 2;
    
    
    //elementos creados
    const listaInfo = document.createElement('li');
    const listatexto = document.createElement('span');
    const botonLista = document.createElement('button');


    //elementos que serán agregados dentro de li
    listaInfo.appendChild(listatexto);
    listatexto.textContent = info;
    listaInfo.appendChild(botonLista);
    botonLista.textContent = 'borrar';
    lista.appendChild(listaInfo);

    // en caso de hacer click en el boton "borrar" el 'li' será removido
    botonLista.addEventListener('click', () => {
        lista.removeChild(listaInfo);
    });

    

}