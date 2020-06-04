const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.querySelector(".color-btn");
const color = document.querySelector(".color");

btn.addEventListener("click", randomColorGenerator);

function randomColorGenerator() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hex[blah()];
  }
  color.innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
}

let blah = () => Math.floor(Math.random() * hex.length);
