let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.targert.value)
}

const pessoasInput = document.querySelector("#poessoa")
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

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.targert.value) {
           botao.classList.add("botao-ativo")
        }
    })

    porcentagem = parseFloat(evento.targert.value) / 100
}