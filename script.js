let gridLength;
do {
  gridLength = parseInt(prompt("Enter the grid size, N, for an N x N grid (maximum 100, otherwise defaults to 16): "), 10) || 16; // eslint-disable-line no-alert
} while (gridLength > 100);

const allowToggle = false; // allows infinite toggle of div colour with click or hover over div
// const eventType = 'mousedown' // individual clicks
// const eventType = 'click' // individual click
const eventType = "mouseover" || "mousemove"; // leaves a trail

const container = document.querySelector("#container");

for (let i = 0; i < gridLength; i++) {
  const divRow = document.createElement("div");
  divRow.style.display = "flex";
  for (let j = 0; j < gridLength; j++) {
    const divColumn = document.createElement("div");
    divColumn.style.flex = "1 1 auto";
    divColumn.classList.add("tile");
    divColumn.style.aspectRatio = "1 / 1";
    divRow.appendChild(divColumn);
  }
  container.appendChild(divRow);
}

const divs = document.querySelectorAll("#container > div > div");
divs.forEach((div) => {
  div.addEventListener(eventType, (event) => {
    if (allowToggle) {
      div.classList.toggle("trail");
    } else {
      div.classList.add("trail");
    }
    event.stopPropagation();
  });
});
