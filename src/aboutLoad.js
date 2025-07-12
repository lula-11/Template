function aboutLoad(){
    const content = document.querySelector("#content");
    content.innerHTML = ""; 


    const about = document.createElement("p");
    about.textContent = "lol";
    content.appendChild(about);
}

export {aboutLoad};