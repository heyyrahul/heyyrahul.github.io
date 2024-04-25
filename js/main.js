const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}

var typed1 = new Typed(".typing", {
    strings: ["A FullStack Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: ["A FullStack Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});