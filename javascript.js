//importaciones
import {MostrarRegistro,MostrarSesion,MostrarSesionVeterinario,home} from "./elecccion.js";
import {RegistroUsuario} from "./registroUsuario.js";

//exportaciones 
export let datosUsuarios = [
    {Nombre: " ", Documento: " ", EdadMascota: " ", Mascota: " ", Especie: " ", Raza: " " }
];

export let datosVeterinarios = [
    {Nombre: "Carlos" , Documento: "1234"},
    {Nombre: "Kevin" , Documento: "4321"}
];

//Botones de Inicio
document.querySelector('#eleccion_Registrar').addEventListener("click",MostrarRegistro);
document.querySelector('#eleccion_InicioDeSesion_Usuario').addEventListener("click",MostrarSesion);
document.querySelector('#eleccion_InicioDeSesion_Veterinario').addEventListener("click",MostrarSesionVeterinario);

//Botones de Registro

document.querySelector('#registro').addEventListener("click",RegistroUsuario);

//botones para volver al inicio de todo
document.querySelector('#volver1').addEventListener("click",home);
document.querySelector('#volver2').addEventListener("click",home);
document.querySelector('#volver3').addEventListener("click",home);
document.querySelector('#volver4').addEventListener("click",home);
document.querySelector('#volver5').addEventListener("click",home);


//cambiar lista
function lista(){
    const nombre_Dueño = document.getElementById("nombreDueño").value; // llamados y encapsulación
    const dueño_documento = document.querySelector('#documento').value;
    const raza_perro = document.getElementById("perro").value;
    const nombre_Perro = document.querySelector('#nombrePerro').value;
    const especiePerro = document.querySelector('#especie').value;
    const pesoPerro = document.querySelector('#perroPeso').value;
    const alturaPerro = document.querySelector('#perroAltura').value;
    

    
    const expresionRegular = /\S\w*/; //expresión regular

    //Expresión Regular
    if (expresionRegular.test(nombre_Dueño) && expresionRegular.test(dueño_documento) && expresionRegular.test(raza_perro) && expresionRegular.test(nombre_Perro) && expresionRegular.test(especiePerro) && expresionRegular.test(pesoPerro) && expresionRegular.test(alturaPerro)) {


        const lista = document.querySelector('ul');

            const info = "Nombre del Dueño: " + nombre_Dueño +"  Documento: "+ dueño_documento + "  Raza Del perro: " + raza_perro + "  Nombre del perro: " + nombre_Perro + "  Especie del perro: " + especiePerro + "  Peso: " + pesoPerro + "  Altura:" + alturaPerro;

            //reiniciar valores
            nombre_Dueño.value = ''; 
            dueño_documento.value = '';
            raza_perro.value = '';
            nombre_Perro.value = '';
            especiePerro.value = '';
            pesoPerro.value = '';
            alturaPerro.value = '';

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
            botonLista.addEventListener('click',() =>{
                lista.removeChild(listaInfo);
            });

            input.focus();
    }
    else{
        // El 'else' en caso que cada uno de los campos de información no hayan sido llenados
        alert("Faltan campos obligatorios por llenar");
    }
}

