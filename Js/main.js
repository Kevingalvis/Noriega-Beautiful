// VARIABLES JS
const $btnNav =  document.querySelector(".btn-nav");
const $contNav = document.querySelector(".nav");
const $linkHome = document.querySelector(".home");
const $linkAcerca = document.querySelector(".acerca");
const $linkWork = document.querySelector(".trabajo");
// MODAL
const $linkContact = document.querySelector(".contact");
const $sectModal =  document.querySelector(".sect-modal");
const $linkClose = document.querySelector(".modal-close");




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

//FUNCIONALIDAD MODAL

$linkContact.addEventListener("click",(e)=>{
    e.preventDefault();
    $sectModal.classList.add("sect-modal_visual");
});
$linkClose.addEventListener("click",(e)=>{
    e.preventDefault();
    $sectModal.classList.remove("sect-modal_visual");
});