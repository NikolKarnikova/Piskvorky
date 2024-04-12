let currentPlayer = 'circle'  

const selectbox = (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    document.querySelector('.actualplayer').src = 'images/circle.svg';
    currentPlayer = 'cross';
    event.target.classList.add('board__field--cross');
  } else {
    currentPlayer = 'circle';
    event.target.classList.add('board__field--circle');
    document.querySelector('.actualplayer').src = 'images/cross.svg';
  }
};


  document.querySelector('#box1').addEventListener('click', selectbox);
  document.querySelector('#box2').addEventListener('click', selectbox);
  document.querySelector('#box3').addEventListener('click', selectbox);
  document.querySelector('#box4').addEventListener('click', selectbox);
  document.querySelector('#box5').addEventListener('click', selectbox);
  document.querySelector('#box6').addEventListener('click', selectbox);
  document.querySelector('#box7').addEventListener('click', selectbox);
  document.querySelector('#box8').addEventListener('click', selectbox);
  document.querySelector('#box9').addEventListener('click', selectbox);
  document.querySelector('#box10').addEventListener('click', selectbox);

