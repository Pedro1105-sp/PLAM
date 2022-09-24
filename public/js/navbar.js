// NAVBAR

// let navList = document.querySelector(".nav_list");

let btn = document.querySelector("#btn").onclick = function(){click()};
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search").onclick = function(){click()};

function click(){
  sidebar.classList.toggle("active")
};


