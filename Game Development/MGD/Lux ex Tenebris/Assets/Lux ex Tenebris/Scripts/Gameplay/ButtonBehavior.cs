using UnityEngine;
using System.Collections;

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
			Application.LoadLevel ("Win");
		}
	}
}
