$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(200, 625, 150, 20,"red");
createPlatform(400, 500, 150, 20,"orange");
createPlatform(600, 675, 150, 20,"yellow");
createPlatform(600, 400, 150, 20,"green");
createPlatform(1000, 500, 150, 20,"blue");
createPlatform(800, 600, 150, 20,"purple");
createPlatform(800, 400, 150, 20,"pink");
createPlatform(700, 1000, 150, 20,"black");
    // TODO 3 - Create Collectables
createCollectable("steve", 600, 655);
createCollectable("diamond", 400, 480, 0.5, 0.7);
createCollectable("diamond", 1000, 480, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("top", 500, 500);
createCannon("top", 800, 600);
createCannon("top", 1100, 600);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
