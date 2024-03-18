const mainDiv = document.querySelector("#gameField")

// 
const createGrid = numOfSquares => {
    for (let i = 0; i < numOfSquares; i++) {
        const div = document.createElement("div");
        div.className = "box";
        mainDiv.appendChild(div);
    }
}

const createSquares = () => {
    const message = prompt("Number of squares per side?");
    console.log(message);
    createGrid(message * message);

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", (e) => {
            e.target.classList.add("background");
        })
    });

}

const button = document.querySelector("button");
button.addEventListener("click", createSquares);




