using UnityEngine;
using System.Collections;

public class ReturnToMenu : MonoBehaviour 
{
	public bool backToStart = false;
	
	void OnMouseDown()
	{
		if (backToStart == true) 
		{
			Application.LoadLevel ("StartMenu");
		}
	}
}
