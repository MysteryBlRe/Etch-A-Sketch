const container = document.getElementById("container");
const colorPicker = document.querySelector('.color-selector');
const colorBtn = document.querySelector('.colorBtn');
const clearBtn = document.querySelector('.clearBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');

let mode = 'color'

function activateButton(btn){
    btn.style.backgroundColor = '#333'
    btn.style.color = 'white'
}

if(mode == 'color'){
    activateButton(colorBtn)
}
else if(mode == 'rainbow'){
    activateButton(rainbowBtn)
}
    


let mouseDown = false;

document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}



function makeRows(rows, cols) {
    container.style.cssText = `grid-template-columns: repeat(${cols} , 1fr); grid-template-rows: repeat(${rows} , 1fr)`;

    for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    };
  
};

makeRows(16, 16);
const squares = document.querySelectorAll('.grid-item')

function reloadGrid() {
    clearing = true;
    squares.forEach(square => {
        square.style.transition = 'background-color 0.2s';
        square.style.backgroundColor = 'white';
    })
}

function draw(e){
    if(e.type == 'mouseover' && mouseDown == false) return;
    let currentColor = colorPicker.value;
    this.setAttribute('style', `background-color: ${currentColor}`)
}

squares.forEach(square => {
    square.addEventListener('mousedown', draw)
    square.addEventListener('mouseover', draw)
});

console.log(clearBtn)
clearBtn.onclick = () => reloadGrid()