import homePage, { main } from "./recipes/homePage.js";

console.log("heyy dude");


const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

home.addEventListener('click', ()=>{
    homePage();
});

document.addEventListener('DOMContentLoaded', ()=>{
    homePage();
});


menu.addEventListener('click', ()=>{
    menu.style.boxShadow = "0 0.6rem 1rem rgba(247, 246, 230, 0.5)";
   main.innerHTML= '';
    const menulist = document.createElement('a');
    menulist.href = "./recipes/jell-o.html";
    main.append(menulist);

});

menu.addEventListener('mouseout', ()=>{
    menu.style.boxShadow = "none";
});