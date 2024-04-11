let currentPlayer = 'circle'  

const selectbox = (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    event.target.classList.add('board__field--cross');
    document.querySelector('.actualplayer').src = 'images/circle.svg';
  } else {
    currentPlayer = 'circle';
    event.target.classList.add('board__field--circle');
    document.querySelector('.actualplayer').src = 'images/cross.svg';
  }
};


  document.querySelector('button:nth-child(1)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(2)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(3)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(4)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(5)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(6)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(7)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(8)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(9)').addEventListener('click', selectbox);
  document.querySelector('button:nth-child(10)').addEventListener('click', selectbox);