import homePage from "./recipes/homePage.js";
import { menuPage } from "./recipes/menuPage.js";
import { aboutPage } from "./recipes/aboutPage.js";

console.log("heyy dude");


const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

document.addEventListener('DOMContentLoaded', ()=>{
    homePage();
});

home.addEventListener('click', ()=>{
    home.style.boxShadow = "0 0.6rem 1rem rgba(247, 246, 230, 0.5)";
    homePage();
});

menu.addEventListener('click', ()=>{
    menu.style.boxShadow = "0 0.6rem 1rem rgba(247, 246, 230, 0.5)";
    menuPage();
});

about.addEventListener('click', ()=>{
    about.style.boxShadow = "0 0.6rem 1rem  rgba(247, 246, 230, 0.5)";
    aboutPage();
});