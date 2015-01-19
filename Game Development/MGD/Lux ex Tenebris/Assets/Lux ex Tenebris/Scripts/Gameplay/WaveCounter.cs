using UnityEngine;
using System.Collections;

public class WaveCounter : MonoBehaviour 
{
	public int waveCounter;

	public void Start()
	{
		waveCounter = SpawnEnemy.waveNumber;

		((TextMesh)GetComponent (typeof(TextMesh))).text = waveCounter.ToString() + "/4";
	}

	public void Update()
	{
		waveCounter = SpawnEnemy.waveNumber;
		
		((TextMesh)GetComponent (typeof(TextMesh))).text = waveCounter.ToString() + "/4";
	}
}
