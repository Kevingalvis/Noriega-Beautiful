// VARIABLES JS
const $btnNav =  document.querySelector(".btn-nav");
const $contNav = document.querySelector(".nav");
const $linkHome = document.querySelector(".home");
const $linkAcerca = document.querySelector(".acerca");
const $linkWork = document.querySelector(".trabajo");




//FUNCIONALIDAD BARRA DE NAVEGACION

$btnNav.addEventListener("click",()=>{
    $contNav.classList.toggle("nav_visibilidad");
});
$linkHome.addEventListener("click",()=>{
    $contNav.classList.toggle("nav_visibilidad");
});
$linkAcerca.addEventListener("click",()=>{
    $contNav.classList.toggle("nav_visibilidad");
});
$linkWork.addEventListener("click",()=>{
    $contNav.classList.toggle("nav_visibilidad");
});