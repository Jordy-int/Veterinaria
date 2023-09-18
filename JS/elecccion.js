//Interacciones de algunos botones

export function MostrarRegistro(){
    document.querySelector('#bloqueRegistroUsuario').hidden = false;

    document.querySelector('#bloqueInicio').hidden = true;
}

export function MostrarSesion(){
    document.querySelector('#bloqueSesionUsuario').hidden = false;

    document.querySelector('#bloqueInicio').hidden = true;
}

export function MostrarSesionVeterinario(){
    document.querySelector('#bloqueSesionVeterinario').hidden = false;

    document.querySelector('#bloqueInicio').hidden = true;
}

export function home(){
    document.querySelector('#bloqueInicio').hidden = false;

    document.querySelector('#bloqueRegistroUsuario').hidden = true;
    document.querySelector('#bloqueSesionUsuario').hidden = true;
    document.querySelector('#bloqueSesionVeterinario').hidden = true;
    document.querySelector('#bloqueCita').hidden = true;
    document.querySelector('#listaPacientes').hidden = true;
}