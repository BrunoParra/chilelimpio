const botonEnv = document.getElementById("sendB");
let botCarta;
//Para obtener la fecha
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const date = new Date().toLocaleDateString('es-ES', options);
const formattedDate = date.replace(/(\d+) de (.+) de (\d+)/, '$1 $2 $3');


botonEnv.addEventListener("click", generaCarta);


function generaCarta() {
        botCarta = validaTodo();
        botCarta.addEventListener("click", () => {
                window.alert("Carta enviada a la fundación");
                window.location.reload();
        })
}

function validaTodo(){
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
        const forma = document.getElementById("forma");

        //################################## Constantes que almacenan las etiquetas de advertencia
        const rutAdv = document.getElementById("rutAlert");
        const nomAlert = document.getElementById("nombreAlert");
        const ap1Alert = document.getElementById("apellido1Alert");
        const ap2Alert = document.getElementById("apellido2Alert");
        const edadAlert = document.getElementById("edadAlert");
        const fnacAlert = document.getElementById("fnacAlert");
        const generoAlert = document.getElementById("generoAlert");
        const emailAlert = document.getElementById("emailAlert");
        const phoneAlert = document.getElementById("phoneAlert");
        const profAlert = document.getElementById("profAlert");
        const motivAlert = document.getElementById("motivAlert");

        //##Constantes con el valor que está dentro de los campos
        const rutVal =  rut.value;
        const nombreVal =  nombre.value;
        const appaternoVal = appaterno.value;
        const apmaternoVal = apmaterno.value;
        const fnacVal =  fnacimiento.value;
        const edadVal = edad.value;
        const generoVal = genero.value;
        const emailVal = email.value;
        const celularVal = celular.value;
        const profesionVal = profesion.value;
        const motivVal = motiv.value;

        //##Reseteamos la visibilidad de las alertas en caso que el usuario oprima enviar de nuevo 
        //y pase algunas validaciones pero no todas

        rutAdv.style.display = "none";
        nomAlert.style.display = "none";
        ap1Alert.style.display = "none";
        ap2Alert.style.display = "none";
        edadAlert.style.display = "none";
        fnacAlert.style.display = "none";
        generoAlert.style.display = "none";
        emailAlert.style.display = "none";
        phoneAlert.style.display = "none";
        profAlert.style.display = "none";
        motivAlert.style.display = "none";

        //##Ahora sí procedemos a validar
        let count = 0;
        if (rutVal.length < 9 || rutVal.length > 10) {
                count++;
                rutAdv.style.display = 'block';
        }

        if (nombreVal.length < 3 || nombreVal.length > 20) {
                count++;
                nomAlert.style.display = 'block';
        }

        if (appaternoVal.length < 3 || appaternoVal.length > 20) {
                count++;
                ap1Alert.style.display = 'block';
        }

        if (apmaternoVal.length < 3 || apmaternoVal.length > 20) {
                count++;
                ap2Alert.style.display = 'block';
        }

        if (fnacVal.length == 0){
                count++;
                fnacAlert.style.display = 'block';
        }

        if (edadVal == '' || (parseInt(edadVal) < 18 || parseInt(edadVal) > 35)) {
                count++;
                edadAlert.style.display = 'block';
        }
        if(emailVal.length==0 ) {
                count++;
                emailAlert.style.display = 'block';
        }
        if(generoVal.length==0){
                count++;
                generoAlert.style.display = 'block';
        }
        if(celularVal.length < 9 || celularVal.length >12) {
                count++;
                phoneAlert.style.display = 'block';
        }

        if(profesionVal.length===0){
                count++;
                profAlert.style.display = 'block';
        }
        if(motivVal.length===0){
                count++;
                motivAlert.style.display = 'block';
        }
        if (count === 0) {
                const fnacStringRaw = new Date(fnacVal);
                const fnacString = fnacStringRaw.toLocaleDateString('es-ES', options);
                forma.style.display = 'none';
                document.getElementById("colforma").innerHTML=`<div class="form-floating">
                <textarea class="form-control" id="floatingTextarea2" style="height: 500px">

                Estimada Fundación Chile Limpio:

                Mi nombre es ${nombreVal} ${appaternoVal} ${apmaternoVal}, RUT ${rutVal}, de profesión ${profesionVal}, nacido el ${fnacString} y con ${edadVal} años de edad al ${formattedDate}.
                Mi motivo para participar en su fundación es ${motivVal}.

                Esperaré su contacto.

                Atentamente,

                ${nombreVal} ${appaternoVal}

                ${emailVal}
                ${celularVal}
                </textarea>
                </div>
                <button type="button" class="btn btn-primary mt-2" id="sendC">Envíar Carta</button>`;
                return document.getElementById("sendC");
        }

}
