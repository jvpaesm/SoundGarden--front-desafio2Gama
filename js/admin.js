const tbodyEventos = document.querySelector("#eventos")

const getEvents = async() => {    
    const events = await fetch(`${BASE_URL}/events`).then((result) => 
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
            <td>${new Date (event.scheduled).toLocaleDateString('pt-BR')}</td>
            <td>${event.name}</td>
            <td>${event.attractions.join(", ")}</td>
            <td>
                <a href="listar-reservas.html?id=${event._id}" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
                <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
            </td>
            `
        //     <h2>${event.name} - ${new Date (event.scheduled).toLocaleDateString('pt-BR')}</h2>
        //     <h4>${event.attractions.join(", ")}</h4>
        //     <p>${event.description}</p>
        //     <a href="#" class="btn btn-primary">reservar ingresso</a>
        // </article>
        tbodyEventos.appendChild(tabela)
    });
}

getEvents()