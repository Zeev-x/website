const page_home = document.getElementById("con_home");
const page_about = document.getElementById("con_about");
const btn_home = document.getElementById("btn_home");
const btn_about = document.getElementById("btn_about");

function zeev(){
  document.getElementById("result").innerHTML = "<h1>The website is currently undergoing maintenance</h1>";
}

function mp3(){
  var audio = document.getElementById("mp3");
  var btn_wel = document.getElementById("logo");
  if(audio.paused){
    audio.play();
    btn_wel.style.color = "red";
  } else {
    audio.pause();
    btn_wel.style.color = "black";
  }
}

var time = 2
      var count = setInterval(function(){
        time--
        document.getElementById("count").innerHTML = time;
        if(time == 0){
          clearInterval(count);
          var web = `<audio autoplay loop><source src="audio.mp3"></audio>`;
          document.getElementById("audio").innerHTML = web;
        }
      },1000);

function home(){ 
  page_home.style.display = "block";
  page_about.style.display = "none";
  btn_home.style.color = "red";
  btn_about.style.color = "black";
}
function about(){
  page_home.style.display = "none";
  page_about.style.display = "block";
  btn_about.style.color = "red";
  btn_home.style.color = "black";
}
window.onload = home(),stars(),mp3();