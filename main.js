const form = document.getElementById('notas-mes');

function ValidaForm(primeiraNota, segundaNota) {
    let diferenca = segundaNota - primeiraNota;
    return diferenca >= 1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const primeiraNota = Number(document.getElementById('primeiroMes').value);
    const segundaNota = Number(document.getElementById('segundoMes').value);

    if (!ValidaForm(primeiraNota, segundaNota)) {
        window.alert('Você não teve progresso');
    } else {
        window.alert('Parabéns você teve progresso!');
    }
});
