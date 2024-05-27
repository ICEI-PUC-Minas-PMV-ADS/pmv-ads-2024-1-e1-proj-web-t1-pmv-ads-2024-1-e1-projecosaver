function getUsernameFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}


document.addEventListener('DOMContentLoaded', function() {
    var userEmail = getUsernameFromURL();
    var username;

    var getUserFromStorage = localStorage.getItem('users');
    var dataFromStorage = JSON.parse(getUserFromStorage);

    for(var i=0; i < dataFromStorage.length; i++){
        if(dataFromStorage[i].email == userEmail){
            console.log(dataFromStorage[i].nome);
            username = dataFromStorage[i].nome;
        }
    }

    if (username) {
        document.getElementById('usernameDisplay').textContent = 'Bem-vindo, ' + username + '!';
    }
});