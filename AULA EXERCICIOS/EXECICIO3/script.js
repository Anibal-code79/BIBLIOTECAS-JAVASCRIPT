let itens = [];
function calcularTotal(itens) {
    return itens.reduce(function(total, item) {
        return total + item.preco;
    }, 0);
}
$("#formItem").on("submit", function(e) {
    e.preventDefault();
    let nome = $("#itemNome").val();
    let preco = Number($("#itemPreco").val());
    let item = {
        nome: nome,
        preco: preco
    };
    itens.push(item);
    renderizar();
});

function renderizar() {
    $("#lista").html("");
    for (let i = 0; i < itens.length; i++) {
        $("#lista").append(`
            <li>
                ${itens[i].nome} -
                ${itens[i].preco} MT
            </li>
        `);
    }
    let total = calcularTotal(itens);
    $("#total").text(
        "Total: " + total + " MT"
    );
}