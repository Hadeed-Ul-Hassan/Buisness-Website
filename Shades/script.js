// Menu toggler

const hamburger= document.querySelector(".hamburger");
const close= document.querySelector(".close");
const navUl= document.querySelector(".nav-ul");

hamburger.addEventListener("click", ()=>{
    navUl.classList.toggle("show");
    hamburger.classList.toggle("hide");
})
close.addEventListener("click", ()=>{
    navUl.classList.toggle("show");
    hamburger.classList.toggle("hide");
})

// Modal section

const btn = document.querySelector('.search');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

btn.addEventListener('click', openPopup);
closeModal.addEventListener('click', closePopup);

function openPopup() {
modal.style.display = "block";
}
function closePopup() {
modal.style.display = "none";
}

/// page animation to scroll /////
/// page animation to scroll /////
/// page animation to scroll /////

AOS.init({
    duration: 1000,
})