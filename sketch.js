// this global variable will make the lines perfectly symmetrical.
let symmetry = 6;
let angle = 360/symmetry;
let saveButton;
let clearButton;
let slider;
let xoff = 0;

function setup() {
  createCanvas(950, 600);
  angleMode(DEGREES);
   background(0);

  button = createButton('save');
  button.mousePressed(saveLace);
  button = createButton('clear');
  button.mousePressed(clearCanvas);
  slider = createSlider(1, 32, 4, 0.1);
  colorMode(HSB, 255, 255, 255);
}


function saveLace(){
 save('lace.png');
}

function clearCanvas(){
 background(0);
}

function draw() {

  // translate this code to the center of the canvas
  translate(width/2, height/2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){

  // creating multiple variables to store in below functions line      and distance
  let mx = mouseX - width/2;
  let my = mouseY - height/2;
  let pmx = pmouseX - width/2;
  let pmy = pmouseY - height/2;

 if(mouseIsPressed){
  // let hue = map(sin(xoff), -1, 1, 0, 225);
  let hue= noise(xoff) * 255;
   xoff += 0.01;
  stroke(hue, 255, 255, 100);
    let angle = 360/symmetry;

    // the for loop will make the below action repeat six times.
    for (let i = 0; i < symmetry; i++){
      rotate(angle);
    // distance variable makes stroke weight thicker when mouse is moved          slowly and thinner when mouse is moved faster.
   // let d = dist(mx, my, pmx, pmy);
    // sw is stroke weight and creates the thicker and thinner            action.
   // let sw = map(d, 0, 8, 8, 1);
      let sw = slider.value();
    // add "sw" variable into stroke weight to utilize the speed/thick-thin function.
  strokeWeight(sw);
      line(mx, my, pmx, pmy);
      push();
      scale(1, -1);
      line(mx, my, pmx, pmy);
       pop();
  }
 }
  }
}
