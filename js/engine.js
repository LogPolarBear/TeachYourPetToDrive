function GameState(){
	var GAME_NOT_STARTED=0;
	var GAME_STARTED=1;
	var GAME_FINISHED=2;
	var Pets=["Fluffy","Speedy","Crazy","Rex","Spike","Fido","Barnes","Snowball"];
	
	var countdownNumber=3;
	var whichPet="Rex";
	var petPosition=[0,0,0,0,1,0,0,0,0];
	var gamestarted=GAME_NOT_STARTED;
	var numberOfLives=9;
	var currentCoursePosition=0;
	var currentCourseEndPosition=10;// put real later
	var currentCourseState=[0,0,0,0,0,0,0,0,0,0];
	var steeringWheelPosition=1; //1-5
	var currentPawsPosition=[0,0,0,0,0];
	var currentStringPosition=[0,0,0,0,0];
	var currentCourse ={};//10 by x grid
	
}
function SetInitialState(){
	GameState.countdownNumber=3;
	GameState.whichPet="Rex";
	GameState.petPosition=[0,0,0,0,1,0,0,0,0];
	GameState.gamestarted=GAME_NOT_STARTED;
	GameState.numberOfLives=9;
	GameState.currentCoursePosition=0;
	GameState.currentCourseEndPosition=10;
	GameState.currentCourseState=[0,0,0,0,0,0,0,0,0,0];
	GameState.steeringWheelPosition=1; //1-5
	GameState.currentPawsPosition=[0,0,0,0,0];
	GameState.currentStringPosition=[0,0,0,0,0];
	GameState.currentCourse ={};//10 by x grid

}

function DrawStartScreen()
{
	DrawStartButton();
	DrawHelpButton();
	
}
function ClickStartButton(){
	DrawOpeningScreen();
}
function ClickHelpButton()
{
	DrawHelp();
}
function DrawOpeningScreen()
{
	ResetToStart();	
	DrawCountDown();
}
function ResetToStart(){
	SetInitialState();
	DrawLifeBoard();
	DrawDrivingScene();
	DrawObstacleCourse();
	DrawString();	
}
function DrawCountDown()
{
	//do countdown logic
	StartGame();
}
function StartGame()
{
	GameState.gameStarted=GAME_STARTED;
	Tick();
}
function DrawEndGameState()
{

}
function DrawCurrentScene()
{

}
function CheckForCollision(){
//if collision minus 1 lives
}
function Tick()
{
	if (GameState.lives==0)
	{
		GameState.gameStarted=GAME_FINISHED;
		DrawEndGameState();
		return;
	}
	GameState.gamePosition =+ 1;
	if (GameState.currentGamePosition == GameState.currentCourseEndPosition)
	{
		DrawEndGameState();
		return;
	}
	
	DrawCurrentScene();
	CheckForCollision();
	if (GameStart.lives > 0)
	{
	
			Tick();
	
	}
	
		
}


