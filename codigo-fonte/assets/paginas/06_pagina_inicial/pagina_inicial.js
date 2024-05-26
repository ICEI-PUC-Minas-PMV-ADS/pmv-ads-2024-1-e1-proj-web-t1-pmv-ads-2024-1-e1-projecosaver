document.addEventListener('DOMContentLoaded', function() {
    var getFromStorage = localStorage.getItem('users');
    var data = JSON.parse(getFromStorage);
    var username = data[0].nome;
    if (username) {
        document.getElementById('usernameDisplay').textContent = 'Seja Bem-vindo(a)! ' + username + '!';
    }
});
