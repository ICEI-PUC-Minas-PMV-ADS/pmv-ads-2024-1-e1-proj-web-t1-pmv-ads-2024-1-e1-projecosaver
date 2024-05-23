function menuShow( ) {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../../assets/img/menu_icon_linhas.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../../assets/img/X.svg";
    }
}

// Função para processar o login
function processaFormLogin(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (loginUser(username, password)) {
        window.location.href = '../06_pagina_inicial/pagina_inicial.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
}

// Função para salvar o cadastro do usuário
function salvaCadastro(event) {
    event.preventDefault();
    let nome = document.getElementById('txt_nome').value;
    let email = document.getElementById('txt_email').value;
    let telefone = document.getElementById('txt_telefone').value;
    let senha = document.getElementById('txt_senha').value;
    let senha2 = document.getElementById('txt_senha2').value;

    if (senha !== senha2) {
        alert('As senhas informadas não conferem.');
        return;
    }

    addUser(nome, email, senha, telefone);
    alert('Usuário salvo com sucesso. Proceda com o login.');
    window.location.href = 'login.html';
}

// Associar as funções aos formulários
document.getElementById('login-form').addEventListener('submit', processaFormLogin);
document.getElementById('cadastro-form').addEventListener('submit', salvaCadastro);

// Função de login (para simulação)
function loginUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === username && user.senha === password);
}

// Função de cadastro (para simulação)
function addUser(nome, email, senha, telefone) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ nome, email, senha, telefone });
    localStorage.setItem('users', JSON.stringify(users));
}
