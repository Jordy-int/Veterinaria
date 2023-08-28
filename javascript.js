

function lista(){
    const llamado1 = document.getElementById("nombreDueño");// llamados
    const llamado2 = document.getElementById("perro");
    const llamado3 = document.getElementById("seguridad"); 

    const dueño = llamado1.value; //encapsulación
    const razaDelPerro = llamado2.value;
    const seguridad = llamado3.value;

    const expresionRegular = /\S\w*/; //expresión regular

    //Expresión Regular
    if (expresionRegular.test(dueño) && expresionRegular.test(razaDelPerro) && expresionRegular.test(seguridad)) {
        document.getElementById("cita").textContent = dueño + " " + razaDelPerro + " " + seguridad;
    }
    else{
        document.getElementById("cita").textContent = "Falta información";
    }
}