import halie from "./halie.jpg";
function homeLoad(){
    const content = document.querySelector("#content");
    content.innerHTML = ""; 

    const h1 = document.createElement("h1");
    content.appendChild(h1);
    h1.textContent = "lula restaurant";

    const intro = document.createElement("div");
    intro.classList.add("intro");
    content.appendChild(intro);

    const image = document.createElement("img");
    image.src = halie; 
    image.alt = 'logo'; 
    image.style.width = '20%'; 
    image.style.height = '20%'; 
    intro.appendChild(image);

    const text = document.createElement("div");
    text.classList.add("text");
    intro.appendChild(text);


    text.innerHTML = "<p><b>what we have?</b></p>";

    const t1 = document.createElement("p");
    t1.textContent = "we are best restaurant at tengzhou! We have fish, chicken, beef,ect";
    text.appendChild(t1);


    const t2 = document.createElement("p");
    t2.textContent = "our best food is leaves";
    text.appendChild(t2);
}

export{homeLoad};