using UnityEngine;
using System.Collections;

public class SpawnEnemy : MonoBehaviour 
{
	public float interval = 0;

	float timeLeft = 0.0f;
	public static int numberToSpawn = 30;
	public static int waveNumber = 1;
	public static int enemyNumber = numberToSpawn;

	//Define Enemy
	public GameObject enemy = null;
	
	public GameObject warlock = null;
	public GameObject troll = null;
	public GameObject wolfbeast = null;
	public GameObject gargant = null;
	public GameObject demon = null;
	
	void Update () {
		timeLeft -= Time.deltaTime;
		//set conditions per wave
		if(waveNumber == 1)
		{
			enemy = warlock;
			interval = 2;
		}
		/*else if(waveNumber == 2)
		{
			enemy = troll;
			interval = 3;
		}*/
		else if(waveNumber == 2)
		{
			enemy = wolfbeast;
			interval = 2;
		}
		else if(waveNumber == 3)
		{
			enemy = gargant;
			interval = 5;
		}
		else if(waveNumber == 4)
		{
			enemy = demon;
			interval = 4;
		}
		if (timeLeft <= 0.0f) {
			if(numberToSpawn > 0){
				// spawn
				GameObject g = (GameObject)Instantiate(enemy, transform.position, Quaternion.identity);
				
				numberToSpawn = numberToSpawn - 1;
				
				// reset time
				timeLeft = interval;
			}
		}
	}
}
