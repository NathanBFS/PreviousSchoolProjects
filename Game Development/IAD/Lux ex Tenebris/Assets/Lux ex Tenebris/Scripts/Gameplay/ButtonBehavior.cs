using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class ButtonBehavior : MonoBehaviour 
{
	public bool pause = false;
	public bool paused = false;
	public bool simulateWin = false;

	void OnMouseDown()
	{
		if (pause == true) 
		{
			if(paused == false)
			{
				Time.timeScale = 0;
				((TextMesh)GetComponent(typeof(TextMesh))).text = "play";
				paused = true;
			}
			else if(paused == true)
			{
				Time.timeScale = 1;
				((TextMesh)GetComponent(typeof(TextMesh))).text = "pause";
				paused = false;
			}
		}
		else if (simulateWin == true) 
		{
			Social.ReportScore(AstarAI.crystals, "CgkIwMDQ8skLEAIQAg", (bool success) => {
			});
			Social.ReportScore(AstarAI.livesLeft,"CgkIwMDQ8skLEAIQAw", (bool success) => {
			});
			Social.ReportScore(AstarAI.livesLeft + AstarAI.crystals,"CgkIwMDQ8skLEAIQBA", (bool success) => {
			});
			Application.LoadLevel ("Win");
		}
	}
}
