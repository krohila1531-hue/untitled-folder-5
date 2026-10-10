const Elbutton = document.querySelector("#btn");
const slider = document.querySelector(".slider")

Elbutton.addEventListener("click",()=>{
  document.body.classList.toggle("dark")
  slider.classList.toggle("kochish")
})