import {datosVeterinarios} from "./JS/javascript.js"

export function sesionVeterinario() {
    let encontrar = datosVeterinarios.find(elemento => elemento.Documento == document.querySelector('#documenVeterinario').value);
    let encontrar2 = datosVeterinarios.find(elemento2 => elemento2.Nombre == document.querySelector('#nombreVeterinario').value);

    if (encontrar != undefined && encontrar2 != undefined) {
        alert("has iniciado sesion");

        document.querySelector('#listaPacientes').hidden = false;
        document.querySelector('#bloqueSesionVeterinario').hidden = true;
    }
    else{
        alert("Usuario no registrado");
    }
}