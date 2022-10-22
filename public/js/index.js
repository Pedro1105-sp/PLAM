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