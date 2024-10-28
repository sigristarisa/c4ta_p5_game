// create items that has colors and names (random)
// create baskets that has names
// if the color and the name matches in the basket, add points to the counter

let colors = ["#FF0000", "#0000FF", "#00FF00"];
let names = ["red", "blue", "green"];
let y = 0;
let wordArray = [];

const createWordObject = () => {
  const obj = {};
  const name = names[Math.floor(Math.random() * names.length)];
  const color = colors[Math.floor(Math.random() * names.length)];
  wordArray.push({
    ...obj,
    name,
    color,
    x: Math.floor(Math.random() * window.innerWidth),
  });
  console.log("object", wordArray);
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  createWordObject();
}

function draw() {
  background(0);
  fill(255);
  fill(wordArray[0].color);
  text(wordArray[0].name, wordArray[0].x, y);
  y += 1;
}
