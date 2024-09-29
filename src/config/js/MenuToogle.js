/*
const hamburger = document.querySelector(".mobileMenu");
const navMenu = document.querySelector(".list");
const modeTheme = document.querySelector('.mode')
const mode = document.querySelector('.mode-night')


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

modeTheme.addEventListener("click", () => {
    modeTheme.classList.toggle('active');
    mode.classList.toggle('dark');
})

*/
const hamburger = document.querySelector(".mobile");
const navMenu = document.querySelector(".list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})