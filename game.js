import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update(); //updates all the game logic
  draw(); //uses the update() logic and draws the snake etc on the grid
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  drawSnake();
}
