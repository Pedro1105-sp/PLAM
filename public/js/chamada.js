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
