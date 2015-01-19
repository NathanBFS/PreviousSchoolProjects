using UnityEngine;
using System.Collections;

public class EnemiesCounter : MonoBehaviour 
{
	public int enemyCounter;

	public void Start()
	{
		enemyCounter = SpawnEnemy.enemyNumber;

		((TextMesh)GetComponent (typeof(TextMesh))).text = enemyCounter.ToString ();
	}

	public void Update()
	{
		enemyCounter = SpawnEnemy.enemyNumber;
		
		((TextMesh)GetComponent (typeof(TextMesh))).text = enemyCounter.ToString ();
	}
}
