let colors = ["#FF0000", "#0000FF", "#00FF00"];
let names = ["red", "blue", "green"];
let wordObj = {};
let boxArray = [];

const createWordObj = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  const color = colors[Math.floor(Math.random() * names.length)];
  wordObj = {
    ...wordObj,
    name,
    color,
  };
};

const createBoxArray = () => {
  const margin = 100;
  let boxWidth = (windowWidth - margin * 2) / colors.length;
  let boxX = margin;
  const boxY = margin * 2;
  for (let i = 0; i <= colors.length - 1; i++) {
    const boxObj = {};
    const color = colors[i];
    boxArray.push({ ...boxObj, color, boxX, boxY });
    boxX += boxWidth;
  }
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  createWordObj();
  createBoxArray();
  x = windowWidth / 2;
  y = windowHeight / 2;
  textAlign(CENTER, CENTER);
  console.log("boxArray", boxArray);
}

function draw() {
  background(0);
  fill(255);
  fill(wordObj.color);
  textSize(36);
  text(wordObj.name, x, y);

  for (let i = 0; i <= boxArray.length - 1; i++) {
    fill(boxArray[i].color);
    rect(boxArray[i].boxX, boxArray[i].boxY, 100, 100);
  }
}

function mouseDragged() {
  x = mouseX;
  y = mouseY;
}
