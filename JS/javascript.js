//importaciones
import {MostrarRegistro,MostrarSesion,MostrarSesionVeterinario,home} from "./JS/elecccion.js"
import {RegistroUsuario,registrarMascota} from "./JS/registroUsuario.js"
import {sesioUsuario} from "./JS/iniciarsesionusuario.js"
import {sesionVeterinario} from "./JS/iniciarsesionveterinario.js"
import {ListaCitas} from "./JS/CrearLista.js"

//exportaciones 
export let datosUsuarios = [
    {Nombre: " ", Documento: " ",Telefono: "",Direccion: "", EdadMascota: " ", Mascota: " ", Especie: " ", Raza: " " }
];

//Unicas sesiones de Veterinarios
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
document.querySelector('#registroMascota').addEventListener("click",registrarMascota);

//Boton de Sesion Usuario

document.querySelector('#botonSesion').addEventListener("click",sesioUsuario);

//Boton de Sesion Veterinario

document.querySelector('#botonSesionVeterinario').addEventListener("click",sesionVeterinario);

//Boton Facturar

document.querySelector('#botonFacturar').addEventListener("click",ListaCitas);

//botones para volver al inicio de todo

document.querySelector('#volver1').addEventListener("click",home);
document.querySelector('#volver2').addEventListener("click",home);
document.querySelector('#volver3').addEventListener("click",home);
document.querySelector('#volver4').addEventListener("click",home);
document.querySelector('#volver5').addEventListener("click",home);
document.querySelector('#volver6').addEventListener("click",home);
