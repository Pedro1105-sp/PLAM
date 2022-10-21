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

const iniciarChamada = document.querySelector('#student');
iniciarChamada.addEventListener('click', () => iniciaModal('modal-chamada'));

// iniciaModal('modal-chamada');

// ------ GRAFICO DO ALUNO ------

var ctx = document.querySelectorAll('.doughnut');

var charGraph = new Chart(ctx, {
  type: 'doughnut',
  data : {
    datasets: [{
      label: 'My First Dataset',
      data: [100, 75],
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

// function searchStudent(){
//   const searchInput = document.querySelector("[data-search]");
//   const userCard = document.querySelector("[data-user-templete]");
//   const userContainer = document.querySelector("[data-user-container]");

//   let users = [];
  
//   searchInput.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase();
//     users.forEach(user => {
//       const isVisible = 
//         user.RM.toLowerCase().includes(value) || 
//         user.NM_ALUNO.toLowerCase().includes(value)
//       user.element.classList.toggle("hide", !isVisible)
//     })
//     console.log(users)
//   })
  
//   fetch('http://localhost:3000/listagemAluno')
//     .then(res => res.json())
//     .then(data => {
//       users = data.map(user =>{
//         const rmAluno = document.querySelectorAll('[data-rm]');
//         const nome = document.querySelectorAll('[data-name]');

//         rmAluno.textContent = user.RM;
//         nome.textContent = user.NM_ALUNO;

        

//         return{ rm: user.RM, nome: user.NM_ALUNO }
//       })
//     })
// }


// function searchStudent(){
//   var searchInput = document.querySelector("[data-search]");
  
//   var aluno = searchInput.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase();
//     console.log(value) 

//   })
// }

// searchStudent()



var btnAluno = document.getElementById('btn');
var rm = document.getElementById('rm');


btnAluno.addEventListener("click", getAluno);

function getAluno(){
  console.log(rm.value)

  var aluno = rm.value;

  console.log(aluno);


  const url = `http://localhost:3000/aluno/${aluno}`;
  console.log(url);

  fetch(url, {method: "POST", body: JSON.stringify({rm: aluno})}).then(
    resposta => {
      return resposta.json();
    }
  ).then(data => {
   console.log(data)

  }).catch(error => console.log(error));
}