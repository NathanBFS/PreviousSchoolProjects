using UnityEngine;
using System.Collections;

public class LifeCounter : MonoBehaviour 
{
	public int lifeCounter;

	public void Start()
	{
		lifeCounter = AstarAI.livesLeft;

		((TextMesh)GetComponent (typeof(TextMesh))).text = lifeCounter.ToString ();
	}

	public void Update()
	{
		lifeCounter = AstarAI.livesLeft;
		
		((TextMesh)GetComponent (typeof(TextMesh))).text = lifeCounter.ToString ();
	}
}
