  
const imgs = document.querySelectorAll(".gallery img");

function imgClick(e){

const current = document.querySelector("#current");

const opacity = 1; 

  imgs.forEach(img => (img.style.opacity = 0.6));
  
  current.src = e.target.src;

  current.classList.add("fade-in");

  setTimeout(() => current.classList.remove("fade-in"), 500);

  e.target.style.opacity = opacity;
}

imgs.forEach(img => img.addEventListener("click", imgClick));

$(".openbutton").click(function () {
  $("#mySidebar").toggleClass('sidebar-toggle');
  $("#main").toggleClass('main-toggle');
});

$(".link").click(function () {
  $("#mySidebar").toggleClass('sidebar-toggle');
  $("#main").toggleClass('main-toggle');
});

function scrollAnim(){

  let screenPos = window.innerHeight / 1.2;
  let title = document.querySelector(".rolunk-title");
  let titlePos = title.getBoundingClientRect().top;

  if(titlePos < screenPos){
    title.classList.add("rolunk-title-animate");
  } else {
    title.classList.remove("rolunk-title-animate");
  }

  let title2 = document.querySelector(".rolunk-text");
  let titlePos2 = title2.getBoundingClientRect().top;

  if(titlePos2 < screenPos){
    title2.classList.add("rolunk-text-animate");
  } else {
    title2.classList.remove("rolunk-text-animate");
  }

  let title3 = document.querySelector(".rolunk-video");
  let titlePos3 = title3.getBoundingClientRect().top;

  if(titlePos3 < screenPos){
    title3.classList.add("rolunk-video-animate");
  } else {
    title3.classList.remove("rolunk-video-animate");
  }
}

window.addEventListener("scroll", scrollAnim);