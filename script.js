let servicos = document.querySelector('#btservicos');

servicos.addEventListener("click", mostraServico);

function mostraServico() {
    // Quando o botão for clicado, vamos pegar a seção de destino pelo ID
    var secaoDestino = document.getElementById("servicos");

    // Agora fazemos a página rolar suavemente até essa seção
    secaoDestino.scrollIntoView({
        behavior: 'smooth' // Rolagem suave
    });
}

const form       = document.getElementById('form');
const msgSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome  = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if(nome && email) {
        msgSucesso.style.display = 'block';
    }
});     