var gameport = document.getElementById("gameport");

// var renderer = PIXI.autoDetectRenderer({height:400, width:400 ,backgroundColor: 0x3079f0});
var renderer = PIXI.autoDetectRenderer(400, 400 , {backgroundColor: 0x3079f0});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

//Creating sprites
var start_screen_bg = new PIXI.Sprite(
  PIXI.Texture.fromImage("startScreen.png") );
var background = new PIXI.Sprite(
  PIXI.Texture.fromImage("background.png") );

//add start screen to scene graph
var start_screen = new PIXI.Container();
start_screen.position.x = 200;
start_screen.position.y = 200;
stage.addChild(start_screen);

start_screen.addChild(start_screen_bg);
start_screen_bg.position.x = -200;
start_screen_bg.position.y = -200;

//create game screen to be added shortly
var game_screen = new PIXI.Container();
game_screen.position.x = 200;
game_screen.position.y = 200;

game_screen.addChild(background);
background.position.x = -200;
background.position.y = -200;

//functon to switch screen when start screen is clicked on
function mouseStartHandler(e)
{
  stage.removeChild(start_screen);
  stage.addChild(game_screen);
}

//call mousehandler when screen clicked on
start_screen_bg.interactive = true;
start_screen_bg.on('mousedown', mouseStartHandler);

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

  var walker = new PIXI.extras.MovieClip(frames);
  walker.scale.x = 1.5;
  walker.scale.y = 1.5;
  walker.position.x = -170;
  walker.position.y = -70;
  walker.animationSpeed = 1;
  walker.play;
  game_screen.addChild(walker);

}

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage)
}

animate();
