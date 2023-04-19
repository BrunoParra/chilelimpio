$(function(){ 
    $("#sendB").click(function() {
        $(".text-danger").remove(); //esto es para volver a ocultar las etiquetas de validacionS
        $(".form-control").each(function(index, element) {
            if(index>= 1  && index<=3){
                console.log($(element).val());
            }
        });
    });

});