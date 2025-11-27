var nome = document.querySelector("#nome")
var sobrenome = document.querySelector("#sobrenome")
var email = document.querySelector("#email")
var data = document.querySelector("#data")
var telefone = document.querySelector("#telefone")
var assunto = document.querySelector("#assunto")
var mensagem = document.querySelector("#mensagem")

var btDados = document.querySelector("button")
var resultado = document.querySelector("#resultado")

btDados.addEventListener('click',exibirDados)

function exibirDados() {
    //alert("Teste com o click do botão")

    resultado.innerHTML = `
        <p> ${nome.value} </p>
        <p> ${sobrenome.value} </p>
        <p> ${email.value} </p>
        <p> ${data.value} </p>
        <p> ${telefone.value} </p>
        <p> ${assunto.value} </p>
        <p> ${mensagem.value} </p>
    `
}