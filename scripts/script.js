const mainDiv = document.querySelector("#gameField")

// create grid based on number of squares
const createGrid = numOfSquares => {
    for (let i = 0; i < numOfSquares; i++) {
        const div = document.createElement("div");
        div.className = "box";
        mainDiv.appendChild(div);
        const squarePerRow = numOfSquares ** 0.5;

        // change widht and height so squares will fit the grid
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
            box.style.width = `calc((960px - ${squarePerRow}px) / ${squarePerRow})`;
            box.style.height = `calc((960px - ${squarePerRow}px) / ${squarePerRow})`;
        })
    }
}
//ask user to input number of boxex per row 
//put that value squaret as argument for create grid
const createSquares = () => {
    let message;
    while (true) {
        message = prompt("Number of squares per side?");
        console.log(message);
        if(message <= 100 && Number(message)){
            break;
        } else {
            alert("Please enter a number less than or equal to 100.");
        }
    }

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




