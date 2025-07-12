function menuLoad(){
    const content = document.querySelector("#content");
    content.innerHTML = ""; 

    const dish1 = document.createElement("p");
    dish1.textContent = "fish";
    content.appendChild(dish1);

    const dish2 = document.createElement("p");
    dish2.textContent = "pork";
    content.appendChild(dish2);

    const dish3 = document.createElement("p");
    dish3.textContent = "beef";
    content.appendChild(dish3);

}
export {menuLoad};