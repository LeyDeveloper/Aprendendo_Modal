const cadastrar = document.querySelector('.cadastrar')
const modal = document.querySelector('.bg-modal')

document.addEventListener('click', function(ev)  {
    const elemento = ev.target

    if(elemento.classList.contains('cadastrar')){
        modal.classList.add('bg-on')
    }

    if(elemento.classList.contains('cancelar')){
        modal.classList.remove('bg-on')
    }
})