let options = [
  { color: "#FF0000", name: "red" },
  { color: "#0000FF", name: "blue" },
  { color: "#00FF00", name: "green" },
  { color: "#FFA500", name: "orange" },
  { color: "#FFFF00", name: "yellow" },
  { color: "#A020F0", name: "purple" },
];
let wordObj = {};
let boxArray = [];
let points = 0;
const margin = 100;
let isDragged = false;

const createWordObj = () => {
  const name = options[Math.floor(Math.random() * options.length)].name;
  const color = options[Math.floor(Math.random() * options.length)].color;
  wordObj = {
    ...wordObj,
    name,
    color,
  };
};

const createBoxArray = () => {
  let boxWidth = (windowWidth - margin * 2) / options.length;
  let boxX = margin;
  const boxY = (2 / 7) * windowHeight;
  for (let i = 0; i <= options.length - 1; i++) {
    const color = options[i].color;
    const name = options[i].name;
    boxArray.push({ color, name, boxX: boxX + boxWidth / 4, boxY });
    boxX += boxWidth;
  }
};

const rerenderWord = () => {
  createWordObj();
  fill(wordObj.color);
  textSize(36);
  x = windowWidth / 2;
  y = (6 / 7) * windowHeight;
  text(wordObj.name, x, y);
};

const shuffleBoxArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  createWordObj();
  createBoxArray();
  x = windowWidth / 2;
  y = (6 / 7) * windowHeight;
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  for (let i = 0; i <= boxArray.length - 1; i++) {
    fill(boxArray[i].color);
    rect(boxArray[i].boxX, boxArray[i].boxY, 100, 100);
  }

  fill(255);
  fill(wordObj.color);
  textSize(36);
  text(wordObj.name, x, y);
  fill("white");
  textSize(20);
  text("Point: " + points, 100, 20);

  if (frameCount % 200 === 0 && !isDragged) {
    rerenderWord();
  }
}

function mouseDragged() {
  x = mouseX;
  y = mouseY;
  isDragged = true;
}

function mouseReleased() {
  isDragged = false;
  const droppedBox = boxArray.find(
    (box) =>
      box.boxX <= x &&
      box.boxX + (windowWidth - margin * 2) / options.length >= x
  );

  if (droppedBox && droppedBox.name === wordObj.name) {
    points += 1;
  }

  rerenderWord();
  boxArray = shuffleBoxArray(boxArray);
  let boxX = margin;
  let boxWidth = (windowWidth - margin * 2) / options.length;

  for (let i = 0; i < boxArray.length; i++) {
    boxArray[i].boxX = boxX + boxWidth / 4;
    boxX += boxWidth;
  }
}
