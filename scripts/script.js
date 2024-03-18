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
const createSquares = () => {
    let message;
    while (true) {
        message = prompt("Number of squares per side?");
        console.log(message);

        // after validate user input clear grid

        if (message <= 100 && Number(message)) {
            const existingBoxes = document.querySelectorAll(".box");
            if (existingBoxes.length !== 0) {
                existingBoxes.forEach(box => {
                    box.remove();
                })
            }
            break;
        } else {
            alert("Please enter a number less than or equal to 100.");
        }
    }

    createGrid(message * message);
    const boxes = document.querySelectorAll(".box");
    // Add a mouseover event listener to each box
    boxes.forEach(box => {
        box.addEventListener("mouseover", (e) => {
            // If the box has no background color
            if (e.target.style.backgroundColor === "") {
                // Generate random RGB values
                const redColor = Math.floor(Math.random() * 255);
                const greenColor = Math.floor(Math.random() * 255);
                const blueColor = Math.floor(Math.random() * 255);

                // Set the background color of the box to the random RGB color
                e.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
            }
        })
    });

}

const button = document.querySelector("button");
button.addEventListener("click", createSquares);




