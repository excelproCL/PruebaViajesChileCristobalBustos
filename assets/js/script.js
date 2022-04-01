/*Habilitacion de tooltips de Bootstrap 5*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



$(document).ready(function(){
$("a").click(function () { 
    let redirect =  this.hash;
    $("html,body").animate({
        scrollTop: $(redirect).offset().top - 30,
        scrollBottom: $(redirect).offset().bottom
    }, 1200
    );
    
});


});