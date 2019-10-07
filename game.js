var gameport = document.getElementById("gameport");

// var renderer = PIXI.autoDetectRenderer({height:400, width:400 ,backgroundColor: 0x3079f0});
var renderer = PIXI.autoDetectRenderer(400, 400 , {backgroundColor: 0x3079f0});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var walker;

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

//Creating sprites
var start_screen_bg = new PIXI.Sprite(
  PIXI.Texture.fromImage("startScreen.png") );
var start_screen_button = new PIXI.Sprite(
  PIXI.Texture.fromImage("startButton.png") );
var background = new PIXI.Sprite(
  PIXI.Texture.fromImage("background.png") );
var background2 = new PIXI.Sprite(
  PIXI.Texture.fromImage("background2.png") );
var background3 = new PIXI.Sprite(
  PIXI.Texture.fromImage("background3.png") );
var pedastal = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal2 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal3 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal4 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal5 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );


var game1 = false;
var game2 = false;
var game3 = false;

//add start screen to scene graph
var start_screen = new PIXI.Container();
start_screen.position.x = 200;
start_screen.position.y = 200;
stage.addChild(start_screen);

start_screen.addChild(start_screen_bg);
start_screen_bg.position.x = -200;
start_screen_bg.position.y = -200;

//add start screen background to start screen
start_screen_bg.addChild(start_screen_button);
start_screen_button.position.x = 30;
start_screen_button.position.y = 325;

//create game screen to be added to stage shortly
var game_screen = new PIXI.Container();
game_screen.position.x = 0;
game_screen.position.y = 0;

game_screen.addChild(background);
background.position.x = 0;
background.position.y = 0;

//backgrounds act as levels while pedastals are the goal to reach end
background.addChild(pedastal);
pedastal.position.x = 300;
pedastal.position.y = 200;

background2.addChild(pedastal2);
pedastal2.position.x = 300;
pedastal2.position.y = 50;

background2.addChild(pedastal3);
pedastal3.position.x = 300;
pedastal3.position.y = 350;

background3.addChild(pedastal4);
pedastal4.position.x = 40;
pedastal4.position.y = 315;

background3.addChild(pedastal5);
pedastal5.position.x = 270;
pedastal5.position.y = 330;


//functon to switch screen when start button is clicked on
function mouseStartHandler(e)
{
  stage.removeChild(start_screen);
  stage.addChild(game_screen);
  game1 = true;
}

//call mousehandler when screen clicked on
start_screen_button.interactive = true;
start_screen_button.on('mousedown', mouseStartHandler);

//code from Dr Palmer
PIXI.loader
  .add("assets.json")
  .load(ready);

//function to make sprite walk
function ready()
{
  var frames = [];
  for( var i = 1; i <=3; i++)
  {
    frames.push(PIXI.Texture.fromFrame("stealth_duder" + i + ".png"));
  }

  walker = new PIXI.extras.MovieClip(frames);
  walker.scale.x = 1.5;
  walker.scale.y = 1.5;
  walker.position.x = 30;
  walker.position.y = 130;
  walker.animationSpeed = .1;
  walker.play();
  game_screen.addChild(walker);

}

function keydownEventHandler(e)
{
  if(e.keyCode == 87) //W-key
  {
    walker.position.y -= 10;
  }
  if(e.keyCode == 83) //S-key
  {
    walker.position.y += 10;
  }
  if(e.keyCode == 65) //A-key
  {
    walker.position.x -= 10;
  }
  if(e.keyCode == 68) //D-key
  {
    walker.position.x += 10;
  }
}

document.addEventListener('keydown', keydownEventHandler);

setInterval(checkPostion, 300);

//function checks walker to see if they are on top of pedastal to continue
function checkPostion()
{
  //if game 1 is active and they are on top of pedastal, continue
  if( game1 && walker.position.x > 270 && walker.position.x < 300 &&
      walker.position.y > 150 && walker.position.y < 200 )
  {
    console.log("no way");
    game_screen.removeChild(background);
    game_screen.addChild(background2);

    //couldn't get walker to show up on background 2 without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);

    //game1 is over game2 has begun
    game1 = false;
    game2 = true;
    walker.position.x = 30;
    walker.position.y = 130;
  }

  //if game 2 is active and they land on the upper pedastal they go back
  if( game2 && walker.position.x > 270 && walker.position.x < 300 &&
      walker.position.y > 40 && walker.position.y < 80  )
  {
    console.log("no way");
    game_screen.removeChild(background2);
    game_screen.addChild(background);

    //couldn't get walker to show up on background 2 without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);
    //reset walker
    walker.position.x = 30;
    walker.position.y = 130;
    //game1 is over game2 has begun
    game2 = false;
    game1 = true;

  }

  //if game 2 is active and they land on the lower pedastal they continue
  if( game2 && walker.position.x > 270 && walker.position.x < 300 &&
  walker.position.y > 325 && walker.position.y < 375 )
  {
    console.log("no way");
    game_screen.removeChild(background2);
    game_screen.addChild(background3);

    //couldn't get walker to show up on background 2 without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);
    //reset walker
    walker.position.x = 200;
    walker.position.y = 15;
    //game1 is over game2 has begun
    game2 = false;
    game3 = true;
  }


  //if game 2 is active and they land on the lower pedastal they continue
  if( game3 && walker.position.x > 20 && walker.position.x < 60 &&
  walker.position.y > 250 && walker.position.y < 375 )
  {
    console.log("no way");
    game_screen.removeChild(background3);
    game_screen.addChild(background);

    //couldn't get walker to show up on background 2 without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);
    //reset walker
    walker.position.x = 30;
    walker.position.y = 130;
    //game1 is over game2 has begun
    game3 = false;
    game1 = true;
  }

  if( game3 && walker.position.x > 270 && walker.position.x < 340 &&
  walker.position.y > 280 && walker.position.y < 375 )
  {
    console.log("no way");
    game_screen.removeChild(background3);
    game_screen.addChild(background2);

    //couldn't get walker to show up on background 2 without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);
    //reset walker
    walker.position.x = 30;
    walker.position.y = 130;
    //game1 is over game2 has begun
    game3 = false;
    game2 = true;
  }
}

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage)
}

animate();
