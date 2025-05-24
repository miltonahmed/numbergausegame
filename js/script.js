let PlayerOneInputFiled = document.querySelector('.playerOneInput');
let playerOneButton = document.querySelector('.playerOneBtn');
let PlayerTwoInputFiled = document.querySelector('.playerTwoInput');
let playerTwoButton = document.querySelector('.playerTwoBtn');
let displayedError = document.querySelector('.error');
let heading = document.querySelector('.heading');

playerOneButton.addEventListener('click', function () {
  console.log(PlayerOneInputFiled.value);

  if (PlayerOneInputFiled.value == '') {
    displayedError.style.display = 'inline-block';
  } else {
    if (Number(PlayerOneInputFiled.value)) {
      displayedError.innerHTML = '';
      displayControl("playerOneBlockPlayerTwoNone");

      heading.innerHTML = 'Player Two';
    } else {
      displayedError.style.display = 'inline-block';
      displayedError.innerHTML = 'Please Give a Number LIKE(1,2,3)';
    }
    function displayControl(type) {
      if (type == 'playerOneBlockPlayerTwoNone') {
        PlayerTwoInputFiled.style.display = 'inline-block';
        playerTwoButton.style.display = 'inline-block';
        PlayerOneInputFiled.style.display = 'none';
        playerOneButton.style.display = 'none';
      } else if (type == 'playerOneNonePlayerTwoBlock') {
        PlayerOneInputFiled.style.display = 'none';
        playerOneButton.style.display = 'none';
        PlayerTwoInputFiled.style.display = 'inline-block';
        playerTwoButton.style.display = 'inline-block';
      } else if (type == 'playerOneBlock') {
        PlayerOneInputFiled.style.display = 'inline-block';
        playerOneButton.style.display = 'inline-block';
      } else if (type == playerOneNone) {
        PlayerOneInputFiled.style.display = 'none';
        playerOneButton.style.display = 'none';
      }
      else if (type == 'playerTwoBlock') {
         PlayerTwoInputFiled.style.display = 'inline-block';
        playerTwoButton.style.display = 'inline-block';
      } else if (type == playerTwoNone) {
        PlayerTwoInputFiled.style.display = 'none';
        playerTwoButton.style.display = 'none';
      }
    }
  }
});
