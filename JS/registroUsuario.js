//importaciones
import { datosUsuarios } from './JS/javascript.js'

//Registro del usuario
let nombreDueñoglobal = "";
let documentoglobal = "";
let direccionGlobal = "";
let telefonoGlobal = "";
const expresionRegular = /\S\w*/;


export function RegistroUsuario() {

    //valores de input
    let nombreIngresado = document.querySelector('#nombreDueñoRegistro').value;
    let documentoIngresado = document.querySelector('#documentoRegistro').value;
    let direccionDueño = document.querySelector('#direccionDueño').value;
    let telefonoDueño = document.querySelector('#telefono').value;
    

    let encontrar = datosUsuarios.find(elemento => elemento.Documento == document.querySelector('#documentoRegistro').value);
    console.log(encontrar);

    if (encontrar == undefined) {
        //Verifica si hay información en los campos obligatorios

        if (expresionRegular.test(nombreIngresado) && expresionRegular.test(documentoIngresado) && expresionRegular.test(telefonoDueño)) {
            alert("Registro de Usuario exitoso, Ingresar los datos de la mascota")
            nombreDueñoglobal = nombreIngresado;
            documentoglobal = documentoIngresado;
            direccionGlobal = direccionDueño;
            telefonoGlobal = telefonoDueño;

            document.querySelector('#bloqueDeMascota').hidden = false;
            document.querySelector('#registro').hidden = true;
            document.querySelector('#volver1').hidden = true;
        }
        else {
            alert("Datos obligatorios por llenar");
        }

    }
    else {
        alert("Documento registrado, ingresa otro documento");
    }
}

export function registrarMascota() {

    let edadMascotaIngresado = document.querySelector('#edadMascotaRegistro').value;
    let mascotaIngresada = document.querySelector('#nombreMascotaRegistro').value;
    let especieIngresada = document.querySelector('#especieRegistro').value;
    let razaIngresada = document.querySelector('#mascotaRegistro').value;

   

    if (expresionRegular.test(nombreDueñoglobal) && expresionRegular.test(documentoglobal) && expresionRegular.test(edadMascotaIngresado) && expresionRegular.test(especieIngresada) && expresionRegular.test(mascotaIngresada)) {

        //almacenar en el array
        let registroUsuario = {
            Nombre: nombreDueñoglobal,
            Documento: documentoglobal,
            Telefono: telefonoGlobal,
            Direccion: direccionGlobal,
            EdadMascota: edadMascotaIngresado,
            Mascota: mascotaIngresada,
            Especie: especieIngresada,
            Raza: razaIngresada
        }

        datosUsuarios.push(registroUsuario);
        alert("Registro completo");

        document.querySelector('#bloqueDeMascota').hidden = true;
        document.querySelector('#registro').hidden = false;
        document.querySelector('#volver1').hidden = false;

    }
    else {
        alert("Campos vacíos de mascota");
    }
}