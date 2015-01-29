#pragma strict
 
function Start () 
{

}

function Update () 
{
	//if()
	//{
	//	LoadNextLeve();
	//}
}

function OnTriggerEnter(otherObj: Collider)
{
	Debug.Log("Collided");
	Debug.Log(Application.loadedLevelName);
	LoadNextLevel();
}

function LoadNextLevel()
{
	if(Application.loadedLevelName == "Level2")
	{
		Application.LoadLevel("Level1");
	}
}