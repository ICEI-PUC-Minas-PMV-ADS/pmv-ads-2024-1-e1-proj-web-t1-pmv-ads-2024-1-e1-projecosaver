let ordemCrescente = true;

function alterarOrdem() {
    const tabela = document.querySelector('.tabela tbody');
    const linhas = Array.from(tabela.querySelectorAll('tr'));
    const parseDate = str => {
        const [day, month, year] = str.split('/').map(Number);
        return new Date(year, month - 1, day);
};

linhas.sort((a, b) => {
    const dataA = parseDate(a.cells[0].textContent.trim());
    const dataB = parseDate(b.cells[0].textContent.trim());
    return ordemCrescente ? dataA - dataB : dataB - dataA;
});

ordemCrescente = !ordemCrescente;

linhas.forEach(linha => tabela.appendChild(linha));

const ordenacaoIcon = document.querySelector('.ordenacao');
ordenacaoIcon.innerHTML = ordemCrescente ? '&#9650;' : '&#9660;';
}

// puxando os dados da tela de calculo

document.addEventListener('DOMContentLoaded', function() {
    var tbody = document.querySelector('.cedulas');
    var calculos = JSON.parse(localStorage.getItem('calculos')) || [];
    
    calculos.forEach(function(calculo) {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${calculo.data}</td>
            <td>${calculo.eletrodomestico}</td>
            <td>${calculo.consumo}</td>
        `;
        tbody.appendChild(tr);
    });
});