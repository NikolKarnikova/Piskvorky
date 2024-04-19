import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";

const selectbox = (event) => {
  event.target.disabled = true;
  if (currentPlayer === "circle") {
    document.querySelector(".actualplayer").src = "images/circle.svg";
    currentPlayer = "cross";
    event.target.classList.add("board__field--cross");
  } else {
    currentPlayer = "circle";
    event.target.classList.add("board__field--circle");
    document.querySelector(".actualplayer").src = "images/cross.svg";
  }
  result();
  console.log(createArray());
};

const boxes = document.querySelectorAll(".box");
boxes.forEach((button) => {
  button.addEventListener("click", selectbox);
});

const createArray = () => {
  let array = [];
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

const result = () => {
  let array = createArray();

  const winner = findWinner(array);

  if (winner === "o" || winner === "x") {
    setTimeout(() => {
      alert(`Vítězem je hráč se symbolem ${winner}.`);
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 2000);
    return false;
  }

  if (winner === "tie") {
    setTimeout(() => {
      alert(`Hra skončila remízou.`);
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 2000);
    return false;
  }
  return true;
};
