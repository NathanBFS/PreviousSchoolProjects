using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class BeginPressed : MonoBehaviour 
{	
	public bool start = false;
	public bool help = false;
	public bool credits = false;
	public bool leaderboards = false;
	public bool signin = false;

	void Start()
	{
		PlayGamesPlatform.DebugLogEnabled = true;
		PlayGamesPlatform.Activate();
	}

	void OnMouseDown()
	{
		if(start == true)
		{
			Application.LoadLevel ("Game");
		}
		else if(help == true)
		{
			Application.LoadLevel ("HowTo");
		}
		else if(credits == true)
		{
			Application.LoadLevel ("Credits");
		}
		else if(leaderboards == true)
		{
			Social.ShowLeaderboardUI();
		}
		else if(signin == true)
		{
			Social.localUser.Authenticate((bool success) => {

			});
		}
	}
}
