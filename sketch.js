/* The code below is to attempt to make a user's drawing show up on the canvas by making the user 
first save/download the drawing into an image file and then upload that image back into the canvas 
for it to show up as if it were sent. Currently, p5 is only downloading an empty/failed file when the "save" 
button is clicked. That needs to be fixed. If the "save" button works, maybe the user can indeed "send" 
the drawing as an image.*/

let button; //save button variable//
let button2; //send button variable//
let myCanvas, savedImg;

function setup() {
   myCanvas = createCanvas(600, 400);
  background(220);
  rect(150, 250, 300, 150); //this is the white rectangle drawing board//
  
  button = createButton('save'); //this button allows for the saveimage() function to work; Look below for the function itself//
  button.position(150, 379);
  button.mousePressed(saveimage);
  
  button = createButton('send'); //this button allows for the sendimage() function to work; Look below for the function itself//
  button.position(406, 379);
  button.mousePressed(sendimage);
}

function draw() {
  drawingboard(); //this allows the drawing function to work//
}

function drawingboard() { //this function allows the user to draw whatever they want, as long as they are drawing within the white rectangle//
  if(mouseX<440 && mouseX>160 && mouseY<400 && mouseY>260){
     if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
     }
  }
}
////////////////////////////////////////////////////////////////////////////
function saveimage(){
  // dimensions need to be changed to the draw box BUT OTHERWISE WORKS
  savedImg = myCanvas.get(100,0,width-100,height);
  savedImg.save('my-painting', 'png');
   }

///////////////////////////////////

function sendimage() { //this function is to "send" the image by drawing it onto the canvas, just like you would with any image in p5//
  image(img, 100, 100);
}