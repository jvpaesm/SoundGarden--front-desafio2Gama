const tbodyEventos = document.querySelector("#eventos")

const params = new URLSearchParams(window.location.search) //pegar o id do item pela URL
const id = params.get("id")

const getEvents = async() => {    
    const events = await fetch(`${BASE_URL}/bookings/event/${id}`).then((result) => 
        result.json()
        )

    let aux = 0
    

    events
    .sort((eventoA, eventoB) => eventoA.scheduled - eventoB.scheduled)
    .forEach((event) => {
        aux++
        const tabela = document.createElement('tr')
        tabela.innerHTML = `
            <th scope="row">${aux}</th>
            <td>${event.owner_name}</td>
            <td>${event.owner_email}</td>
            <td>${event.number_tickets}</td>
            <td>
            <button id="excluirReserva" class="btn btn-danger">excluir reserva</button>
            </td>
            `       
        //     <h2>${event.name} - ${new Date (event.scheduled).toLocaleDateString('pt-BR')}</h2>
        //     <h4>${event.attractions.join(", ")}</h4>
        //     <p>${event.description}</p>
        //     <a href="#" class="btn btn-primary">reservar ingresso</a>
        // </article>
        tbodyEventos.appendChild(tabela)
        const nomeEvento = document.querySelector("#eventoX")
        nomeEvento.innerHTML = `${event.event.name}`

    });

    const closeModal = document.querySelector("#close-modal")
    const bodyModal = document.querySelector("#modal")
    const fade = document.querySelector("#fade")
    
    const toggleModal = () => {
        [bodyModal, fade].forEach((element) => element.classList.toggle("hide"))
    }

    const excluirReserva = document.querySelectorAll('#excluirReserva');
    for (let reserva, i = 0; i < excluirReserva.length; i++) {
        reserva = excluirReserva[i];
        reserva.addEventListener('click', toggleModal);
        }

    closeModal.addEventListener("click", () => toggleModal()) 
    fade.addEventListener("click", () => toggleModal()) 


const formModal = document.querySelector("#formModal")

formModal.addEventListener("submit", (event) => {
    event.preventDefault(); 
        

    // const bodym = { // criando objeto que será enviado no POST pra API
    //     owner_name: nomeUsuario.value,
    //     owner_email: emailUsuario.value,
    //     number_tickets: "1",
    //     event_id: "63c2fee5364d291a5f4609c5"
    // }
    // console.log(bodym)
    // const response = fetch(`${BASE_URL}/bookings`, { // requisição de envio para o banco de dados
    //     method: "POST", 
    //     headers: {
    //         "content-type": "application/json"
    //     },
    //     body: JSON.stringify(bodym)
    // }).then((response) => {
    //     if (response.ok){
    //         alert("Reserva efetuada com sucesso!")
    //         window.location.replace("index.html") // volta a página
    //     }else {
    //         alert("Falha ao efetuar reserva :(")
    //     }
    // })
    const emailUsuario = document.querySelector("#email")
    const nomeUsuario = document.querySelector("#nome")
    emailUsuario.innerHTML = `${event.owner_email}`
    nomeUsuario.innerHTML = `${event.owner_name}`

})

}
tbodyEventos.appendChild(modalexcluirReserva)       
getEvents()