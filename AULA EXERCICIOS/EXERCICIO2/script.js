function validarFormulario(nome, idade, email) {
    let erros = [];
    if (nome.trim() === "") {erros.push("O nome é obrigatório.");}
    if (isNaN(idade) || Number(idade) <= 0) {erros.push("Idade inválida.");}
    if (!email.includes("@")) {erros.push("Email inválido.");}
    return erros;
}

$("#formulario").on("submit", function(e) {
    e.preventDefault();
    let nome = $("#nome").val();
    let idade = $("#idade").val();
    let email = $("#email").val();
    let erros =validarFormulario(nome, idade, email);
    $("#erros").html("");

    if (erros.length > 0) {
        for (let i = 0; i < erros.length; i++) {
            $("#erros").append(
                `<li>${erros[i]}</li>`
            );
        }
        return;
    }
    $("#erros").html(
        "<li>Formulário válido!</li>"
    );
});