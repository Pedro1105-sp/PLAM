
let selects = document.querySelectorAll(".selector");

selects.forEach(element => {
  var selectElement = element.querySelector("[name='selectField']");
  var listElement = element.querySelector("#list");
  var arrowIcon = selectElement.querySelector(".caret");
  var options = listElement.querySelectorAll(".options");
  var selectText = selectElement.querySelector("#selectText");

  selectElement.onclick = function(){
    listElement.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  }

  for(option of options){
    option.onclick = function(){
      selectText.innerHTML = this.textContent;
      listElement.classList.toggle("hide");
      arrowIcon.classList.toggle("rotate");
      } 
  }
});

function iniciaModal (modalID) {
  const modal = document.getElementById(modalID);
  if(modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (evento) => {
      if(evento.target.className == 'fechar'){
        modal.classList.remove('mostrar');
        console.log(evento);
      }
    });
  }
}

const iniciarChamada = document.querySelector('.submit');
iniciarChamada.addEventListener('click', () => iniciaModal('modal-chamada'));

// iniciaModal('modal-chamada');

// ------ GRAFICO DO ALUNO ------

var ctx = document.querySelectorAll('.doughnut');

var charGraph = new Chart(ctx, {
  type: 'doughnut',
  data : {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50],
      backgroundColor: [
        'rgba(0, 148, 255, 1)',
        'rgba(215, 215, 215, 1)'
      ],
      hoverOffset: 4
    }],
    labels: [
      'Presença',
      'Ausente'
    ],
  },
  options: {
    plugins: {
        legend: {
            position: 'bottom',
            aling: 'center',  
            labels: {
                boxWidth: 10,
                boxHeight: 10,
            }
        }
    }
}
});