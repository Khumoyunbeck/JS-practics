const board = document.querySelector("#board");
const SQUARE_NUMBER = 660;
const colors = [
  "#1a36d3",
  "#ae1ad3",
  "#1ad3ca",
  "#1ad333",
  "#d0d31a",
  "#d31a1a",
];

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#2b2323";
  element.style.boxShadow = `0 0 2px #0f0f11`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
