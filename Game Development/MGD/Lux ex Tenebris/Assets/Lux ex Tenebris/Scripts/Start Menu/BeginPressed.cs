using UnityEngine;
using System.Collections;

public class BeginPressed : MonoBehaviour 
{	
	public bool start = false;
	public bool help = false;
	public bool credits = false;

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
	}
}
