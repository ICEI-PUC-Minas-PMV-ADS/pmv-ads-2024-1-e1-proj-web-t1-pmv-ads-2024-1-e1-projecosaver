document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-light custom-navbar">
    <div class="container">
        <a class="navbar-brand" href="home.html">
            <img src="assets/img/ECONav.svg" alt="ECO" class="logo-img">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link custom-btn" href="pagina_inicial.html">HOME</a>
                <a class="nav-item nav-link custom-btn" href="sobre.html">SOBRE N&Oacute;S</a>
                <a class="nav-item nav-link custom-btn" href="noticias.html">NOT&Iacute;CIAS</a>
            </div>
        </div>
        <div class="navbar-nav ms-auto">
            <a class="nav-item nav-link custom-btn" href="login.html">
                <img src="assets/img/UserNav.svg" class="user-icon"> Login
            </a>
        </div>
    </div>
</nav>
`;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
