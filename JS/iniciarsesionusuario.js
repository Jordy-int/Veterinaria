import { datosUsuarios } from './JS/javascript.js'

export let encontrarGlobal = "";

export function sesioUsuario() {
    let encontrar = datosUsuarios.find(elemento => elemento.Documento == document.querySelector('#nombreDueñoSesion').value);
    
    if (encontrar != undefined) {
        alert("has iniciado sesion");
        encontrarGlobal = encontrar;

        document.querySelector('#bloqueCita').hidden = false;
        document.querySelector('#bloqueSesionUsuario').hidden = true;
    }
    else{
        alert("Usuario no registrado");
    }
}