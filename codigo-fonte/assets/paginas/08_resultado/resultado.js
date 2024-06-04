function menuShow() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const imgLamp = document.querySelector('.img_lamp');
    
    if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
        mobileMenu.style.display = 'block';
        imgLamp.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder a imagem
    } else {
        mobileMenu.style.display = 'none';
        imgLamp.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar a imagem
    }
}