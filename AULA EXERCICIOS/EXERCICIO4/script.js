function celsiusParaFahrenheit(c) {
    return (c * 9) / 5 + 32;
}
function fahrenheitParaCelsius(f) {
    return ((f - 32) * 5) / 9;
}
$("#formTemp").on("submit", function(e) {
    e.preventDefault();
    let valor =
        Number($("#valor").val());
    let direcao =
        $("#direcao").val();

    let resultado;
    if (direcao === "c-f") {
        resultado=
            celsiusParaFahrenheit(valor);
    } else {
        resultado =
            fahrenheitParaCelsius(valor);
    }
    $("#saidaTemp").text(
        resultado.toFixed(1)
    );
});