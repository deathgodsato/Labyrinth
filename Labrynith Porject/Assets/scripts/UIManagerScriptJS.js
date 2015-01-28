#pragma strict

function Start () {

}

function Update () {

}

 function StartGame()
{
	Application.LoadLevel("Level1");
}

function MainMenu()
{
	Application.LoadLevel("SplashScreen");
}

function Credits()
{
	Application.LoadLevel("Credits");
}

function Quit()
{
	Application.Quit();
}	