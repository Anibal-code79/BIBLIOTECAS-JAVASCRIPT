$(document).ready(function(){
    
function somar(a, b) {
    return a + b;
}
$("#formulario").on("submit", function(e) {
    e.preventDefault();
    let n1 = Number($("#numero1").val());
    let n2 = Number($("#numero2").val());
    let resultado = somar(n1, n2);
    $("#resultado").text("Resultado: " + resultado);
    console.log("Resultado:", resultado);
});
})