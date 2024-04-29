import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";
let currentPlayer = "circle";
const boxes = document.querySelectorAll(".box");

const createArray = () => {
  const array = [];
  boxes.forEach((button) => {
    if (button.classList.contains("board__field--circle")) {
      array.push("o");
    } else if (button.classList.contains("board__field--cross")) {
      array.push("x");
    } else {
      array.push("_");
    }
  });
  return array;
};

const apiPlayer = async (player) => {
  const playingBoard = createArray();

  const response = await fetch(
    "https://piskvorky.czechitas-podklady.cz/api/suggest-next-move",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        board: playingBoard,
        player: player,
      }),
    }
  );
  const data = await response.json();
  const { x, y } = data.position;
  const fieldIndex = x + y * 10;
  const field = boxes[fieldIndex];
  field.click();
};

const selectbox = (event) => {
  event.target.disabled = true;
  if (currentPlayer === "circle") {
    event.target.classList.add("board__field--circle");
    document.querySelector(".actualplayer").src = "images/cross.svg";
    currentPlayer = "cross";
    apiPlayer("x");
    result();
  } else {
    currentPlayer = "circle";
    event.target.classList.add("board__field--cross");
    document.querySelector(".actualplayer").src = "images/circle.svg";
    result();
  }
};

boxes.forEach((button) => {
  button.addEventListener("click", selectbox);
});

const result = () => {
  let array = createArray();
  const winner = findWinner(array);

  if (winner === "o" || winner === "x") {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 500);
  }

  if (winner === "tie") {
    setTimeout(() => {
      alert(`Hra skončila remízou.`);
      location.reload();
    }, 500);
  }
};
