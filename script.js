const container = document.getElementById("container");
const colorPicker = document.querySelector('.color-selector');
const colorBtn = document.querySelector('.colorBtn');
const clearBtn = document.querySelector('.clearBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const gridBtn = document.querySelector('.gridBtn');
let currentColor;
let gridOn;
gridOn = false;

let activeButton = colorBtn
activateButton(colorBtn)

function activateButton(btn){
    activeButton.style.backgroundColor = 'transparent';
    activeButton.style.color = 'black';
    if(btn == colorBtn)
        activeButton = colorBtn
    else if(btn == rainbowBtn)
        activeButton = rainbowBtn
    btn.style.backgroundColor = '#333'
    btn.style.color = 'white'
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

function randomRGBColor() {
    let r = Math.floor(Math.random()*(256));
    let g = Math.floor(Math.random()*(256));
    let b = Math.floor(Math.random()*(256));
    let a = Math.floor(Math.random()*(256));
    return randomRGB = "rgb(" + r + "," + g + "," + b + ")"; 
}

function draw(e){
    if(e.type == 'mouseover' && mouseDown == false) return;
    if(activeButton == colorBtn){
        currentColor = colorPicker.value;
    }
    else if(activeButton == rainbowBtn){
        currentColor = randomRGBColor()
    }
    this.setAttribute('style', `background-color: ${currentColor}`)
}

squares.forEach(square => {
    square.addEventListener('mousedown', draw)
    square.addEventListener('mouseover', draw)
});

function toggleGrid(btn){
    if(gridOn == false){
        squares.forEach(square => {
            square.style.border = '1px solid #ddd';
        })
        gridOn = true;
        btn.style.backgroundColor = '#333'
        btn.style.color = 'white'
    }
    else {
        squares.forEach(square => {
            square.style.border = 'none';
        })
        gridOn = false;
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'black';
    }

}

console.log(clearBtn)
clearBtn.onclick = () => reloadGrid()
colorBtn.onclick = () => activateButton(colorBtn)
rainbowBtn.onclick = () => activateButton(rainbowBtn)
gridBtn.onclick = () => toggleGrid(gridBtn)