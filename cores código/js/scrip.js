const botaoMudaCor = document.querySelector('.btnCor');
const fundo = document.querySelector('#fundo');
const codigoCor = document.querySelector('#codigo');
const corInvalida = document.querySelector('#corInvalida')

codigoCor.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      botaoMudaCor.click();
    }

  });

  botaoMudaCor.addEventListener('click', function(event) {
    fundo.style.backgroundColor = codigoCor.value
    event.preventDefault();
  });

botaoMudaCor.addEventListener('click', function () {

    let regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    const cor = codigoCor.value 

    if (regex.test(cor)) {
        return corInvalida.style.backgroundColor = cor,
        corInvalida.innerText = ''
    } else {
        return corInvalida.innerText = 'cor invalida';
    }
    
});





















  