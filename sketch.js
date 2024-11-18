let x = 0;
let y = 0;



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
 
  fill("red");
  circle(x, y, 30);

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
    col = "blue";
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
    col = "yellow";
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
    col = "red";
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
    col = "green";
  }


}


