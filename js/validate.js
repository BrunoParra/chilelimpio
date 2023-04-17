//######################### Constantes que almacenan los campos a validar #####################################
const rut =  document.getElementById("rut");
const nombre =  document.getElementById("nombre");
const appaterno = document.getElementById("appaterno");
const apmaterno = document.getElementById("apmaterno");
const fnacimiento =  document.getElementById("fnacimiento");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const profesion = document.getElementById("profesion");
const motiv = document.getElementById("motiv");

//################################## Constantes que almacenan las etiquetas de advertencia
const rutAdv = document.getElementById("rutAlert");
const nomAlert = document.getElementById("nombreAlert");
const ap1Alert = document.getElementById("apellido1Alert");
const ap2Alert = document.getElementById("apellido2Alert");
const edadAlert = document.getElementById("edadAlert");
const botonEnv = document.getElementById("sendB");
const generoAlert = document.getElementById("generoAlert");
const emailAlert = document.getElementById("emailAlert");
const phoneAlert = document.getElementById("phoneAlert");
const profAlert = document.getElementById("profAlert");
const motivAlert = document.getElementById("motivAlert");

rutAdv.style.visibility = 'hidden';
nomAlert.style.visibility = 'hidden';
ap1Alert.style.visibility = 'hidden';
ap2Alert.style.visibility = 'hidden';
edadAlert.style.visibility = 'hidden';
botonEnv.style.visibility = 'hidden';
generoAlert.style.visibility = 'hidden';
emailAlert.style.visibility = 'hidden';
phoneAlert.style.visibility = 'hidden';
profAlert.style.visibility = 'hidden';
motivAlert.style.visibility = 'hidden';



botonEnv.addEventListener("click", generaCarta);


function generaCarta() {
        const result = validaTodo();
        console.log(result);
}

function validaTodo(){
//##Constantes con el valor que está dentro de los campos
const rutVal =  rut.value;
const nombreVal =  nombre.value;
const appaternoVal = appaterno.value;
const apmaternoVal = apmaterno.value;
const fnacimientoVal =  fnacimiento.value;
const edadVal = edad.value;
const generoVal = genero.value;
const emailVal = email.value;
const celularVal = celular.value;
const profesionVal = profesion.value;
const motivVal = motiv.value;

//##Ahora sí procedemos a validar
let count = 0;
if (rutVal.length < 9 || rutVal.length > 10) {
        count++;
        console.log('failed');
        rutAdv.style.display;

}
        return count;
}
