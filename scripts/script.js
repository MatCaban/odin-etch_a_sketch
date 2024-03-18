const mainDiv = document.querySelector("#gameField")

for(let i=0; i<256; i++){
    const div = document.createElement("div");
    div.className = "box";
    mainDiv.appendChild(div);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", (e)=>{
        e.target.classList.add("background");
    })
});

const button = document.querySelector("button");
button.addEventListener("click", (e)=>{
    const message = prompt("message");
    console.log(message);
})