const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
$("#sendB").click(function() {
    console.log("Función de validación");
    $(".text-danger").hide();
    allItems = $(".form-control");
    allItems.each(function(index, element){
        console.log("Item: " + index + " Value: " + element.value);
        switch (index){
            case 0:
                console.log("estoy validando el rut");
                (element.value.length < 9 || element.value.length > 10) ? $(".text-danger").eq(index).show() : null; //RUT
                break;
            case 1:
                console.log("Estoy validando el largo del primer nombre");
                (element.value.length < 3 || element.value.length > 20) ? $(".text-danger").eq(index).show() : null; //Primer Nombre
                break;
            case 2:
                console.log("Estoy validando el largo del primer apellido");
                (element.value.length < 3 || element.value.length > 20) ? $(".text-danger").eq(index).show() : null; //Primer Apellido
                break;
            case 3:
                console.log("Estoy validando el largo del segundo apellido");
                (element.value.length < 3 || element.value.length > 20) ? $(".text-danger").eq(index).show() : null; //Segundo apellido
                break;
            case 4:
                (element.value.length==0) ? $(".text-danger").eq(index).show() : null; //Los parentesis son absolutamente innecesarios acá, pero se ve más uniforme
                break;
            case 5:
                console.log("Estoy validando la edad");
                (parseInt(element.value) < 18 || parseInt(element.value) > 35) ? $(".text-danger").eq(index).show() : null;
                break;
            case 6:
                console.log("Estoy validando el género");
                (element.value.length==0 ) ? $(".text-danger").eq(index).show() : null;
                break;
            case 7:
                console.log("Estoy validando el correo electrónico");
                (element.value.length===0) ? $(".text-danger").eq(index).show() : null;
                break;
            case 8:
                console.log("Estoy validando el celular");
                (element.value.length < 9 || element.value.length > 12) ? $(".text-danger").eq(index).show() : null; //Segundo apellido
                break;
            case 9:
                (element.value.length===0) ? $(".text-danger").eq(index).show() : null;
                break;
            case 10:
                (element.value.length===0)? $(".text-danger").eq(index).show() : null;
                break;
            default:
                console.log("No deberías estar viendo este mensaje. Contacta al desarrollador.");
        }});

    if(!($(".text-danger").is(":visible"))) {
        $("#forma").hide();
            //preparamos algunas variables para facilitarnos la vida
            //Variable con las fecha de nacimiento correctamente convertida a cadena
            fnacStringRaw = new Date ($(".form-control").eq(4).val());
            fnacStringRaw.setUTCHours(0, 0, 0, 0);
            fnacString = fnacStringRaw.toLocaleDateString('es-ES', options);

            //Variable con la fecha de hoy correctamente convertida a cadena
            todayDateRaw = new Date();
            todayDateRaw.setDate(todayDateRaw.getDate() - 1);
            todayDate = todayDateRaw.toLocaleDateString('es-ES', options);

            toAppend = `<div class="h-100 p-4 bg-light border py-3 rounded-3"><p>Estimada Fundación Chile Limpio:</p><p>Mi nombre es `+$(".form-control").eq(1).val()+` `+$(".form-control").eq(2).val()+` `+$(".form-control").eq(3).val()+`, RUT `+$(".form-control").eq(0).val()+`, `+`de profesión `+$(".form-control").eq(9).val()+` nacido el `+ fnacString +` y con `+$(".form-control").eq(5).val()+` años de edad al `+todayDate+
            `.</p><p>Mi motivo para participar en su fundación es `+$(".form-control").eq(10).val().toLowerCase()+`.</p><p>Esperaré su contacto.</p><p>Atentamente,</p><p>`+$(".form-control").eq(1).val()+` `+$(".form-control").eq(2).val()+`</p><p>`+$(".form-control").eq(7).val()+`<br>`+$(".form-control").eq(8).val()+`</p></div>`;

        console.log($(".form-control").eq(8).val());
          $("#colforma").append(toAppend);
        //console.log("Acá debería estar la inserción de HTML");
        //console.log(toAppend);

    }
});




