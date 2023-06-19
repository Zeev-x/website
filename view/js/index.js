const page_home = document.getElementById("con_home");
const page_about = document.getElementById("con_about");
const btn_home = document.getElementById("btn_home");
const btn_about = document.getElementById("btn_about");

function home(){ 
  page_home.style.display = "block";
  page_about.style.display = "none";
  btn_home.style.color = "red";
  btn_about.style.color = "#505050";
}
function about(){
  page_home.style.display = "none";
  page_about.style.display = "block";
  btn_about.style.color = "red";
  btn_home.style.color = "#505050";
}
window.onload = home();