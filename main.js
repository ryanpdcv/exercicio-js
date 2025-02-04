const form = document.getElementById('notas mes');

function ValidaForm(){
    primeiraNota < segundaNota;
}
    
form.addEventListener('submit',function(e){
    e.preventDefault(); 
    const primeiraNota = document.getElementById('primeiroMes');
    const segundaNota = document.getElementById('segundoMes');
    if (ValidaForm===false){
        return alert('Não houve progressão')
    }
    else
        return alert('Isso ai, belo progresso!')
})

console.log(form);
