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
    }

    const button = document.getElementById("play");
    button.addEventListener("click", startCanvas);

    //startCanvas();
    
   
  });





    // amb css amagar la splash screen 
    // mostrar el canvas (display: block;) amb css 
    // const baloonGame = new Game()
    // baloonGame.start()







