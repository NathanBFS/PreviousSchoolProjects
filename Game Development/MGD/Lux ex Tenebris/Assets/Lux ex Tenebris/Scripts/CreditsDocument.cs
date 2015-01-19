using UnityEngine;
using System.Collections;

public class CreditsDocument : MonoBehaviour 
{
	public bool creditsLink = false;

	void OnMouseDown()
	{
		if(creditsLink == true)
		{
			Application.OpenURL("https://docs.google.com/document/d/14Q8DcuC24vIbP14UOGcWUgYFiuM1TKx0Quv27tDlbTo/edit?usp=sharing");
		}
	}
}
