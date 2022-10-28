const password = document.querySelector("#password");
const eyePassword = document.querySelector(".eyePassword");

eyePassword.onclick = () => 
{
    if (password.type === 'password')
    {
        password.type = 'text';
        eyePassword.src = '/img/eyeOpen.svg';
    }
    else
    {
        password.type = 'password';
        eyePassword.src = '/img/eyeClosed.svg';
    }
}



function iniciaModal (modalID) {
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
  
//   const iniciarChamada = document.querySelector('.forgot-password');
//   iniciarChamada.addEventListener('click', () => iniciaModal('modal-password'));

iniciaModal('modal-password');
