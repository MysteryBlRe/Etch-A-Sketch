const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.cssText = `grid-template-columns: repeat(${cols} , 1fr); grid-template-rows: repeat(${rows} , 1fr)`

    for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    };
  
};

makeRows(16, 16);