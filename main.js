//// START CANVAS ////

window.addEventListener("load", function () {
    function generateGame() {
      let canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
  
      const baloonGame = new Game(ctx);
  
     baloonGame.start();
    }
  
    function startCanvas() {
        document.getElementById("canvas").classList.remove("hide");
        document.getElementById("canvas").classList.add("show");
        document.getElementById("splash-screen").classList.add("hide")
        generateGame();
        stopGame();
    }

     

    const button = document.getElementById("play");
    button.addEventListener("click", startCanvas);

    const btnContinue = document.getElementById("btn"); // REPASSAR
    btnContinue.addEventListener("click", stopGame);

    const btnAgain = document.getElementById("btnAgain");
    btnAgain.addEventListener("click", startCanvas) ;

    const btnWin = document.getElementById("btnWin");
    btnWin.addEventListener("click", startCanvas);





    //startCanvas();
    
   
  });









