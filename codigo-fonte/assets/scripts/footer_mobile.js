// Seleciona o rodapé
const footer = document.getElementById('footer');

// Função para verificar se a página foi rolada até o final
function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Função para controlar a exibição do rodapé
function toggleFooterVisibility() {
    if (window.innerWidth <= 768) { // Verifica se é um dispositivo móvel
        if (isScrolledToBottom()) { // Verifica se a página foi rolada até o final
            footer.style.display = 'block'; // Se sim, mostra o rodapé
        } else {
            footer.style.display = 'none'; // Se não, oculta o rodapé
        }
    } else {
        footer.style.display = 'block'; // Mostra o rodapé em todas as resoluções na versão desktop
    }
}

// Adiciona um evento de scroll à janela para verificar quando a página é rolada
window.addEventListener('scroll', toggleFooterVisibility);
window.addEventListener('resize', toggleFooterVisibility); // Adiciona um evento de redimensionamento para verificar se o dispositivo é redimensionado

// Chama a função inicialmente para verificar o estado da página
toggleFooterVisibility();