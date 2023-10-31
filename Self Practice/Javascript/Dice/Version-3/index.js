(() => {
  var image1 = document.querySelector(".img1");
  var image2 = document.querySelector(".img2");
  const h1Text = document.querySelector("h1");
  const winner = document.querySelector(".winner");
  const close = document.querySelector(".fa-times");
  const message = document.querySelector(".msg");
  
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomValue1 = randomNumber1;
    var randomValue2 = randomNumber2;

  // Player 1
  image1.addEventListener("click", ()=> {
    var randomImageSource1 = "../Images/dice" + randomNumber1 + ".png";
    image1.setAttribute("src", randomImageSource1);
    h1Text.innerText = "Player 2's turn";
  });  

  // Player 2
  image2.addEventListener("click", ()=> {
    var randomImageSource2 = "../Images/dice" + randomNumber2 + ".png";
    image2.setAttribute("src", randomImageSource2);
    checkWinner();
    

  });
  
  function checkWinner() {
    if (randomValue1 > randomValue2) {
      h1Text.innerText = "Player 1 win!";
    }
    else if (randomValue2 > randomValue1) {
      h1Text.innerText = "Player 2 win!";
    }
    else {
      h1Text.innerText = "Draw!";
    }
    
    winner.style.display = "flex"
    message.innerText = h1Text.innerText;

    close.addEventListener("click", ()=>{
      winner.style.display = "none";
      window.location.reload();
      
    });
  }
  
})();