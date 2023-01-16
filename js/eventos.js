const divEventos = document.querySelector("#eventos")

const getEvents = async() => {    
    const events = await fetch(`${BASE_URL}/events`).then((result) => 
        result.json()
        )

        events
        .sort((eventoA, eventoB) => eventoA.scheduled - eventoB.scheduled)
        .forEach((event) => {
            const article = document.createElement('article')
            article.innerHTML = `
            <article class="evento card p-5 m-3">
                <h2>${event.name} - ${new Date (event.scheduled).toLocaleDateString('pt-BR')}</h2>
                <h4>${event.attractions.join(", ")}</h4>
                <p>${event.description}</p>
                <a href="#" class="btn btn-primary">reservar ingresso</a>
            </article>`
            divEventos.appendChild(article)
        });

        const closeModal = document.querySelector("#close-modal")
        const bodyModal = document.querySelector("#modal")
        const fade = document.querySelector("#fade")
        
        const toggleModal = () => {
            [bodyModal, fade].forEach((element) => element.classList.toggle("hide"))
        }

        const reservas = document.getElementsByClassName('btn btn-primary');
        for (let reserva, i = 0; i < reservas.length; i++) {
            reserva = reservas[i];
            reserva.addEventListener('click', toggleModal);
            }


    closeModal.addEventListener("click", () => toggleModal()) 
    fade.addEventListener("click", () => toggleModal()) 

    const emailUsuario = document.querySelector("#email")
const nomeUsuario = document.querySelector("#nome")
const formModal = document.querySelector("#formModal")

formModal.addEventListener("submit", (event) => {
    event.preventDefault(); 
        

    const bodym = { // criando objeto que será enviado no POST pra API
        owner_name: nomeUsuario.value,
        owner_email: emailUsuario.value,
        number_tickets: "1",
        event_id: "63c2fee5364d291a5f4609c5"
    }
    console.log(bodym)
    const response = fetch(`${BASE_URL}/bookings`, { // requisição de envio para o banco de dados
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bodym)
    }).then((response) => {
        if (response.ok){
            alert("Reserva efetuada com sucesso!")
            window.location.replace("index.html") // volta a página
        }else {
            alert("Falha ao efetuar reserva :(")
        }
    })



    })

}
    divEventos.appendChild(modal)
    getEvents()
