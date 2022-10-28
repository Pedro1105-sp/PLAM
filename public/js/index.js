function iniciarModal (modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
      modal.classList.add('mostrar');
      modal.addEventListener('click', (evento) => {
        if(evento.target.className == 'fechar'){
          modal.classList.remove('mostrar');
        }
      });
    }
  }
  
  const iniciarChamada = document.querySelector('.iniciar');
  iniciarChamada.addEventListener('click', () => iniciarModal('modal-chamada'));



const cpfInput = document.querySelector("#cpf")

cpfInput.addEventListener('keypress', () =>{
  let cpfLength = cpfInput.value.length;

  if(cpfLength === 3 || cpfLength === 7 ){
    cpfInput.value += '.';
  }
  else if(cpfLength === 11){
    cpfInput.value += '-'
  }

  console.log(cpfLength)
})


const telInput = document.querySelector("#telefone")

telInput.addEventListener('keypress', () =>{
  let telLength = telInput.value.length;

  if(telLength === 0){
    telInput.value += '(';
  }
  else if(telLength === 3){
    telInput.value += ') '
  }
  else if(telLength === 6){
    telInput.value += ' '
  }
  else if(telLength === 11){
    telInput.value += '-'
  }


  console.log(telLength)
})