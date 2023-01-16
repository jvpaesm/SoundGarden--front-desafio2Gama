const formCadastrarEvento = document.querySelector("#formCadastrarEvento")
const btnEnviar = document.querySelector("#enviar")

const inputNome = document.querySelector("#nome")
const inputAtracoes = document.querySelector("#atracoes")
const inputDescricao = document.querySelector("#descricao")
const inputData = document.querySelector("#data")
const inputLotacao = document.querySelector("#lotacao")


formCadastrarEvento.addEventListener("submit", (event) => {
    event.preventDefault(); 
    if(inputDescricao.value.length < 50) {  
        
        alert("Mínimo 50 caracteres");
        return
    }
    

    const body = { // criando objeto que será enviado no POST pra API
        name: inputNome.value,
        poster: "link da imagem",
        attractions: inputAtracoes.value.split(", "),
        description: inputDescricao.value,
        scheduled: inputData.value,
        number_tickets: inputLotacao.value,
    }

    const response = fetch(`${BASE_URL}/events`, { // requisição de envio para o banco de dados
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((response) => {
        if (response.ok){
            alert("Evento adicionado com sucesso.")
            window.location.replace("admin.html") // volta a página
        }else {
            alert("Falha ao adicionar evento :(")
        }
    })



})

// 



















// const formData = new FormData(formInsereEvento);

//         const data = Object.fromEntries(formData);

//         // alterando o conteúdo de 'attractions' e 'number_tickets'

//         // e adicionando 'poster'

//         data.attractions = [data.attractions];

//         data.number_tickets = parseInt(data.number_tickets);

        

//        const insercao = await fetch(`${BASE_URL}/events`, {

//             method:'POST',

//             headers:{

//                 'Content-Type':'application/json'

//             },

//             body: JSON.stringify(data)

//         }).then(result => result)

//         .catch(error => error);

//         if(insercao.status == 201){

//             alert('Evento inserido com sucesso!');

//             window.location = "admin.html";

//         }else{

//             alert('Erro na inserção do evento.');

//         }