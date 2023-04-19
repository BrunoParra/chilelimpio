$(function(){ 
    $("#sendB").click(function() {
        $(".text-danger").remove(); //esto es para volver a ocultar las etiquetas de validacionS
        $(".form-control").each(function(indice, elemento) {
            console.log('El elemento con el índice '+indice+' contiene '+$(elemento).text());
        });
    });

});