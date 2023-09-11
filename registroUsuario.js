//Registro del usuario
import {datosUsuarios} from './javascript.js'

export function RegistroUsuario(){
    //valores de input
    let n = 1;

    let nombreIngresado = document.querySelector('#nombreDueñoRegistro').value;
    let documentoIngresado = document.querySelector('#documentoRegistro').value;
    let edadMascotaIngresado = document.querySelector('#edadMascotaRegistro').value;
    let mascotaIngresada = document.querySelector('#nombreMascotaRegistro').value;
    let especieIngresada = document.querySelector('#especieRegistro').value;
    let razaIngresada = document.querySelector('#mascotaRegistro').value;

    let encontrar = datosUsuarios.find(elemento => elemento.Documento == document.querySelector('#documentoRegistro').value);
    console.log(encontrar);

    if (encontrar == undefined) {
        //almacenar en el array
        let registroUsuario = {
            Nombre: nombreIngresado, 
            Documento: documentoIngresado,
            EdadMascota: edadMascotaIngresado,
            Mascota: mascotaIngresada, 
            Especie: especieIngresada,
            Raza: razaIngresada
        }

        //expresión regular
        const expresionRegular = /\S\w*/;

        if (expresionRegular.test(nombreIngresado) && expresionRegular.test(documentoIngresado) && expresionRegular.test(edadMascotaIngresado) && expresionRegular.test(especieIngresada) && expresionRegular.test(mascotaIngresada)) {
            datosUsuarios.push(registroUsuario);
            console.log("dentro del test");
        }
        else{
            alert("Datos obligatorios por llenar");
        }
    }
    else{
        alert("Ingresa otro Documento");
    }
}