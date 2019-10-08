var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400 , {backgroundColor: 0x3079f0});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

//character
var walker;

//sounds to be called
var noise;
var ding;

//code from Dr Palmer
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

//Creating sprites
//backgrounds
var start_screen_bg = new PIXI.Sprite(
  PIXI.Texture.fromImage("startScreen.png") );
var tutorial_screen_bg = new PIXI.Sprite(
  PIXI.Texture.fromImage("tutorialScreen.png") );
var credits_screen_bg = new PIXI.Sprite(
  PIXI.Texture.fromImage("creditsScreen.png") );
var end_screen_bg = new PIXI.Sprite(
  PIXI.Texture.fromImage("endScreen.png") );

//buttons to navigate menus
var start_screen_button = new PIXI.Sprite(
  PIXI.Texture.fromImage("startButton.png") );
var tutorial_button = new PIXI.Sprite(
  PIXI.Texture.fromImage("tutorialButton.png") );
var credits_button = new PIXI.Sprite(
  PIXI.Texture.fromImage("creditsButton.png") );
var back_button = new PIXI.Sprite(
  PIXI.Texture.fromImage("backButton.png") );
var back_button2 = new PIXI.Sprite(
  PIXI.Texture.fromImage("backButton.png") );
var back_button3 = new PIXI.Sprite(
  PIXI.Texture.fromImage("backButton.png") );

//backgrounds for game levels
var background = new PIXI.Sprite(
  PIXI.Texture.fromImage("background.png") );
var background2 = new PIXI.Sprite(
  PIXI.Texture.fromImage("background2.png") );
var background3 = new PIXI.Sprite(
  PIXI.Texture.fromImage("background3.png") );

//pedastals for each game level
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
var pedastal6 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal6 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal7 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal8 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal9 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );
var pedastal10 = new PIXI.Sprite(
  PIXI.Texture.fromImage("pedastal.png") );

//booleans to tell what level player is on
var game1 = false;
var game2 = false;
var game3 = false;

//add start screen to scene graph
var start_screen = new PIXI.Container();
start_screen.position.x = 200;
start_screen.position.y = 200;
stage.addChild(start_screen);

//add start screen background to start screen
start_screen.addChild(start_screen_bg);
start_screen_bg.position.x = -200;
start_screen_bg.position.y = -200;

//start button to go to game1
start_screen_bg.addChild(start_screen_button);
start_screen_button.position.x = 30;
start_screen_button.position.y = 325;

//tutorial button
start_screen_bg.addChild(tutorial_button);
tutorial_button.position.x = 120;
tutorial_button.position.y = 325;

//credits button
start_screen_bg.addChild(credits_button);
credits_button.position.x = 210;
credits_button.position.y = 325;

//tutroial screen added to stage when click on tutorial button
var tutorial_screen = new PIXI.Container();
tutorial_screen.position.x = 0;
tutorial_screen.position.y = 0;

tutorial_screen.addChild(tutorial_screen_bg);
tutorial_screen_bg.position.x = 0;
tutorial_screen_bg.position.y = 0;

//button to go back to start
tutorial_screen.addChild(back_button);
back_button.position.x = 30;
back_button.position.y = 330;

//example pedastal
tutorial_screen.addChild(pedastal6);
pedastal6.position.x = 230;
pedastal6.position.y = 130;

//credits screen added when credits button clicked on
var credits_screen = new PIXI.Container();
credits_screen.position.x = 0;
credits_screen.position.y = 0;

credits_screen.addChild(credits_screen_bg);
credits_screen_bg.position.x = 0;
credits_screen_bg.position.y = 0;

//go back to start after view credits
credits_screen.addChild(back_button2);
back_button2.position.x = 30;
back_button2.position.y = 330;

//end screen
var end_screen = new PIXI.Container();
end_screen.position.x = 0;
end_screen.position.y = 0;

end_screen.addChild(end_screen_bg);
end_screen_bg.position.x = 0;
end_screen_bg.position.y = 0;

end_screen.addChild(back_button3);
back_button3.position.x = 30;
back_button3.position.y = 330;

//end screen pedastals
end_screen_bg.addChild(pedastal7);
pedastal7.position.x = 250;
pedastal7.position.y = 50;

end_screen_bg.addChild(pedastal8);
pedastal8.position.x = 250;
pedastal8.position.y = 250;

end_screen_bg.addChild(pedastal9);
pedastal9.position.x = 75;
pedastal9.position.y = 50;

end_screen_bg.addChild(pedastal10);
pedastal10.position.x = 75;
pedastal10.position.y = 250;

//create game screen to be added to stage when start button clicked on
var game_screen = new PIXI.Container();
game_screen.position.x = 0;
game_screen.position.y = 0;

//first level
game_screen.addChild(background);
background.position.x = 0;
background.position.y = 0;

//pedastals are the goal to reach next level
background.addChild(pedastal);
pedastal.position.x = 300;
pedastal.position.y = 200;

background2.addChild(pedastal2);
pedastal2.position.x = 300;
pedastal2.position.y = 50;

background2.addChild(pedastal3);
pedastal3.position.x = 270;
pedastal3.position.y = 330;

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

//go to tutorial
function mouseTutorialHandler(e)
{
  stage.removeChild(start_screen);
  stage.addChild(tutorial_screen);
}

//when tutorial button clicked on
tutorial_button.interactive = true;
tutorial_button.on('mousedown', mouseTutorialHandler);

//go to credits
function mouseCreditsHandler(e)
{
  stage.removeChild(start_screen);
  stage.addChild(credits_screen);
}

//when tutorial button clicked on
credits_button.interactive = true;
credits_button.on('mousedown', mouseCreditsHandler);

//go to main menu after tutorial
function mouseBackTutorialHandler(e)
{
  stage.removeChild(tutorial_screen);
  stage.addChild(start_screen);
}

//when back button clicked on
back_button.interactive = true;
back_button.on('mousedown', mouseBackTutorialHandler);

//go to main menu after credits
function mouseBackCreditsHandler(e)
{
  stage.removeChild(credits_screen);
  stage.addChild(start_screen);
}

//when back button clicked on
back_button2.interactive = true;
back_button2.on('mousedown', mouseBackCreditsHandler);

//go to main menu after end screen
function mouseBackEndHandler(e)
{
  stage.removeChild(end_screen);
  stage.addChild(start_screen);
}

//when back button clicked on
back_button3.interactive = true;
back_button3.on('mousedown', mouseBackEndHandler);

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

//code from Dr Palmer
PIXI.loader
  .add("recording.mp3")
  .load(heavy);

//function to call noise
function heavy()
{
  noise = PIXI.audioManager.getAudio("recording.mp3");
}

//code from Dr Palmer
PIXI.loader
  .add("ding.mp3")
  .load(steady);

//function to call ding
function steady()
{
  ding = PIXI.audioManager.getAudio("ding.mp3");
}

// moves character around screen
function keydownEventHandler(e)
{
  if(e.keyCode == 87) //W-key
  {
    walker.position.y -= 10;
    noise.play();
  }

  if(e.keyCode == 83) //S-key
  {
    walker.position.y += 10;
    noise.play();
  }

  if(e.keyCode == 65) //A-key
  {
    walker.position.x -= 10;
    noise.play();
  }

  if(e.keyCode == 68) //D-key
  {
    walker.position.x +=10;
    noise.play();
  }
}

//listens for 'WASD' input to move character
document.addEventListener('keydown', keydownEventHandler);

//checking character's position every 300 ms
setInterval(checkPostion, 300);

//function checks walker to see if they are on top of pedastal to go to next level
function checkPostion()
{
  //if game 1 is active and they are on top of pedastal, continue
  if( game1 && walker.position.x > 270 && walker.position.x < 300 &&
      walker.position.y > 150 && walker.position.y < 200 )
  {
    game_screen.removeChild(background);
    game_screen.addChild(background2);

    //couldn't get walker to show up on background without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);

    //reset walker
    walker.position.x = 30;
    walker.position.y = 130;

    //game1 is over game2 has begun
    game1 = false;
    game2 = true;
    walker.position.x = 30;
    walker.position.y = 130;
    ding.play();
  }

  //if game 2 is active and they land on the upper pedastal they go back
  if( game2 && walker.position.x > 270 && walker.position.x < 300 &&
      walker.position.y > 40 && walker.position.y < 80  )
  {
    game_screen.removeChild(background2);
    game_screen.addChild(background);

    //couldn't get walker to show up on background without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);

    //reset walker
    walker.position.x = 30;
    walker.position.y = 130;

    //game1 is over game2 has begun
    game2 = false;
    game1 = true;
    ding.play();
  }

  //if game 2 is active and they land on the lower pedastal they continue
  if( game2 && walker.position.x > 230 && walker.position.x < 300 &&
  walker.position.y > 270 && walker.position.y < 350 )
  {
    console.log("no way");
    game_screen.removeChild(background2);
    game_screen.addChild(background3);

    //couldn't get walker to show up on background without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);

    //reset walker
    walker.position.x = 200;
    walker.position.y = 15;

    //game1 is over game2 has begun
    game2 = false;
    game3 = true;
    ding.play();
  }


  //if game 3 is active and they land on the left pedastal they restart
  if( game3 && walker.position.x > 20 && walker.position.x < 60 &&
  walker.position.y > 250 && walker.position.y < 375 )
  {
    game_screen.removeChild(background3);
    game_screen.addChild(background);

    //couldn't get walker to show up on background without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);
    //reset walker
    walker.position.x = 30;
    walker.position.y = 130;

    //game1 is over game2 has begun
    game3 = false;
    game1 = true;
    ding.play();
  }

  //if game 3 is active and they land on the right pedastal they win
  if( game3 && walker.position.x > 230 && walker.position.x < 340 &&
  walker.position.y > 230 && walker.position.y < 375 )
  {
    game_screen.removeChild(background3);
    game_screen.addChild(background);

    //couldn't get walker to show up on background without remove/add
    game_screen.removeChild(walker);
    game_screen.addChild(walker);
    //reset walker
    walker.position.x = 30;
    walker.position.y = 130;
    //game1 is over game2 has begun
    game3 = false;
    game1 = true;

    //end of game
    stage.removeChild(game_screen);
    stage.addChild(end_screen);
    ding.play();
  }
}

//function to make pedastals move on end screen
function tweenEndPedastals()
{
  let ped7coords = [pedastal7.position.x, pedastal7.position.y];
  let ped8coords = [pedastal8.position.x, pedastal8.position.y];
  let ped9coords = [pedastal9.position.x, pedastal9.position.y];
  let ped10coords = [pedastal10.position.x, pedastal10.position.y];

  createjs.Tween.get(pedastal7.position).to(
    {x: ((ped7coords[0] + 50)%400), y: ((ped7coords[1] + 50)%400)}, 500);
  createjs.Tween.get(pedastal8.position).to(
    {x: ((ped8coords[0] + 50)%400), y: ((ped8coords[1] + 50)%400)}, 500);
  createjs.Tween.get(pedastal9.position).to(
    {x: ((ped9coords[0] + 75)%400), y: ((ped9coords[1] + 75)%400)}, 500);
  createjs.Tween.get(pedastal10.position).to(
    {x: ((ped10coords[0] + 75)%400), y: ((ped10coords[1] + 75)%400)}, 500);

  setTimeout(tweenEndPedastals, 500);
}

tweenEndPedastals()

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage)
}

animate();
