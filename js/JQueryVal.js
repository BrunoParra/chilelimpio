$(function(){ 
    $("#sendB").click(function() {
        $(".text-danger").hide(); //esto es para volver a ocultar las etiquetas de validacionS
        $(".form-control").each(function(index, element) {
            if(index>= 1  && index<=3){
                if(element.value.length<9 || element.value.length >12) {
                    $(".text-danger").eq(index).show();
                }
            }
        });
    });

});
