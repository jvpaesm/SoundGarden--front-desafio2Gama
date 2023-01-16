const BASE_URL = "https://soundgarden-api.deta.dev"

const modal = document.createElement('article')
modal.innerHTML = `
<div id="fade" class="hide"></div>
<div id="modal" class="hide">
    <div class="modal-header">
        <h2>Reserve o seu ingresso</h2>
        <button id="close-modal">Fechar</button>
    </div>
    <div class="modal-body">
        <form id="formModal">
            <label for="email">E-mail:</label>
            <input required id="email" type="email" placeholder="digite seu e-mail">
            <label for="nome">Nome:</label>
            <input required id="nome" type="text" placeholder="qual o seu nome?">

            <button type="submit">Reservar</button>     
        </form>
    </div>
</div>
`
const modalexcluirReserva = document.createElement('article')
modalexcluirReserva.innerHTML = `
<div id="fade" class="hide"></div>
<div id="modal" class="hide">
    <div class="modal-header">
        <h2>Tem certeza que deseja<br>excluir sua reserva?</h2>
        <button id="close-modal">Fechar</button>
    </div>
    <div class="modal-body">
        <form id="formModal">
            <label for="email">E-mail:</label>
            <input required id="email" type="email" placeholder="seu e-mail">
            <label for="nome">Nome:</label>
            <input required id="nome" type="text" placeholder="seu nome">

            <button type="submit">Excluir</button>     
        </form>
    </div>
</div>`