using UnityEngine;
using System.Collections;

public class CrystalCounter : MonoBehaviour 
{
	public int crystalCounter;

	public void Start()
	{
		crystalCounter = AstarAI.crystals;

		((TextMesh)GetComponent (typeof(TextMesh))).text = crystalCounter.ToString() + " Crystals";
	}

	public void Update()
	{
		crystalCounter = AstarAI.crystals;
		
		((TextMesh)GetComponent (typeof(TextMesh))).text = crystalCounter.ToString() + " Crystals";
	}
}
