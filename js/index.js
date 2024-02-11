$(document).ready(function(){
  $("#skill-img-1").on("click", () => {
    $("#skill-div-1").fadeToggle('slow');
  });

  $("#skill-img-2").on("click", () => {
    $("#skill-div-2").fadeToggle('slow');
  });

  $("#skill-img-3").on("click", () => {
    $("#skill-div-3").fadeToggle('slow');
  });

  $("#bring-back-button").on("click", () => {
    $("#skill-div-1").fadeToggle('slow');
    $("#skill-div-2").fadeToggle('slow');
    $("#skill-div-3").fadeToggle('slow');
  });
});