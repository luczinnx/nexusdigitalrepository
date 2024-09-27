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
        playAnimation(msgSucesso.style.display = 'block');
    }
});     

window.sr = ScrollReveal({reset: true});

sr.reveal('.ptesq2', {duration: 1000, origin: 'left', distance: '50px'});
sr.reveal('.ptdir2', {duration: 1000, origin: 'right', distance: '50px'});
sr.reveal('.ptservicos h2', {duration: 1000, origin: 'top', distance: '50px'});
sr.reveal('.blocos-servicos', {duration: 1000, origin: 'bottom', distance: '10px'});
sr.reveal('.titulo-principal', {duration: 1000, origin: 'top', distance: '50px'});
ScrollReveal().reveal('.parag', {duration: 1000, origin: 'bottom', distance: '50px'});