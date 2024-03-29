let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.targert.value)
}

const pessoasInput = document.querySelector("#oessoa")
pessoasInput.addEventListener("input", receberQuantidadedePessoas)

function receberQuantidadedePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoa #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(evento.targert.value === "0") {
        paragrafoErro.style.display ="block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.targert.value)
    }
}