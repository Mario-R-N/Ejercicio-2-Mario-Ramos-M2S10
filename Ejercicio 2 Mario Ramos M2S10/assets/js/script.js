$(document).ready(function(){

  $(".text-body-secondary").click(function () {


    var idviaje = $(this).data("idviaje");

    $(".detalles").hide();
    $("#detalles" + idviaje).toggle();

  });


  $(".btn-close").click(function () {
    $(this).closest(".detalles").hide();
  });
});