const formExcluirEvento = document.querySelector("#excluirEvento")
const btnEnviar = document.querySelector("#enviar")

const campos = [
inputNome = document.querySelector("#nome"),
inputBanner = document.querySelector("#banner"),
inputAtracoes = document.querySelector("#atracoes"),
descricao = document.querySelector("#descricao"),
inputData = document.querySelector("#data"),
inputLotacao = document.querySelector("#lotacao")
]


const params = new URLSearchParams(window.location.search) //pegar o id do item pela URL
const id = params.get("id")

formExcluirEvento.addEventListener("submit", (form) =>{ //evento do botao de submit (editar evento)
    form.preventDefault()
    const excluir = confirm("Tem certeza que deseja excluir este evento PERMANENTEMENTE?")
    if(excluir == false){
        return
    }



    const response = fetch(`${BASE_URL}/events/${id}`, { // requisição de envio para o banco de dados
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => {
        if (response.ok){
            alert("Evento excluído permanentemente.")
            window.location.replace("admin.html") // volta a página
        }else {
            alert("Falha ao atualizar evento :(")
        }
    })
    
})




const obterEvento = async () => { // pega os parametros do evento do banco de dados da API

    const evento = await fetch(`${BASE_URL}/events/${id}`)
    .then((result) => result.json())


    inputNome.value = evento.name
    inputBanner.value = evento.poster
    inputAtracoes.value = evento.attractions.join(", ")
    descricao.value = evento.description
    inputData.value = evento.scheduled.split(".")[0]
    inputLotacao.value = evento.number_tickets

}

obterEvento()