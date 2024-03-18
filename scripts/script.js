const mainDiv = document.querySelector("#gameField")

for(let i=0; i<256; i++){
    const div = document.createElement("div");
    div.className = "box";
    mainDiv.appendChild(div);
}