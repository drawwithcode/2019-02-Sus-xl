var colorList1 = ['#f15c4f',
                 '#fbb040',
                 '#ededed',
                 '#ffffff'];

var colorList2 = ['#6ed689',
                 '#aeffc3',
                 '#299946',
                 '#ffffff'];
function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(10);
  background(70);
  for (var x = 0; x < width+20; x += 20) {
    for (var y = 0; y < height; y += 20) {
      noStroke();

      if (mouseX > windowWidth/2) {
        fill(color(random(colorList1)));
      } else {
        fill(color(random(colorList2)));
      }

      quad(x-20, y, x, y, x + 20, y+20, x, y + 20);
      smooth();


    }
  }
}
