const formEditarEvento = document.querySelector("#editarEvento")
const btnEnviar = document.querySelector("#enviar")

const campos = [
inputNome = document.querySelector("#nome"),
inputBanner = document.querySelector("#banner"),
inputAtracoes = document.querySelector("#atracoes"),
descricao = document.querySelector("#descricao"),
inputData = document.querySelector("#data"),
inputLotacao = document.querySelector("#lotacao")
]

const carregando = (loading = true) => { //desabilitar edição dos campos enquanto carrega
    campos.forEach(campo => campo.disabled = loading)
    btnEnviar.disabled = loading
}

const params = new URLSearchParams(window.location.search) //pegar o id do item pela URL
const id = params.get("id")

formEditarEvento.addEventListener("submit", (form) =>{ //evento do botao de submit (editar evento)
    form.preventDefault()

    carregando()

    const body = { // criando objeto que será enviado no POST pra API
        name: inputNome.value,
        poster: inputBanner.value,
        attractions: inputAtracoes.value.split(", "),
        description: descricao.value,
        scheduled: inputData.value,
        number_tickets: inputLotacao.value
    }

    const response = fetch(`${BASE_URL}/events/${id}`, { // requisição de envio para o banco de dados
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((response) => {
        if (response.ok){
            alert("Evento atualizado com sucesso.")
            window.history.back() // volta a página
        }else {
            alert("Falha ao atualizar evento :(")
        }
    })
    carregando(false)
    
})




const obterEvento = async () => { // pega os parametros do evento do banco de dados da API

    carregando()

    const evento = await fetch(`${BASE_URL}/events/${id}`)
    .then((result) => result.json())

    carregando(false)

    inputNome.value = evento.name
    inputBanner.value = evento.poster
    inputAtracoes.value = evento.attractions.join(", ")
    descricao.value = evento.description
    inputData.value = evento.scheduled.split(".")[0]
    inputLotacao.value = evento.number_tickets

}

obterEvento()