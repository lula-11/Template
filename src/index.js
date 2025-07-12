import "./style.css";
import {homeLoad} from "./homeLoad";
import {menuLoad} from "./menuLoad";
import {aboutLoad} from "./aboutLoad";


const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeLoad();
homeButton.addEventListener("click", ()=>{
    homeLoad();
});


menuButton.addEventListener("click", ()=>{
    menuLoad();
});


aboutButton.addEventListener("click", ()=>{
    aboutLoad()
});