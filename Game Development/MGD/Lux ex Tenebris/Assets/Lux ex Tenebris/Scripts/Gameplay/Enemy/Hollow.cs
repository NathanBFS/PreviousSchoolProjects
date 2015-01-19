using UnityEngine;
using System.Collections;

public class Hollow : MonoBehaviour 
{
	public int health = 6;
	public bool dead = false;

	public void onDeath() 
	{
		dead = true;
		Destroy(gameObject);
		SpawnEnemy.enemyNumber = SpawnEnemy.enemyNumber - 1;
		
		if(SpawnEnemy.numberToSpawn == 0 && SpawnEnemy.enemyNumber == 0 && AstarAI.livesLeft > 0)
		{
			SpawnEnemy.waveNumber = SpawnEnemy.waveNumber + 1;
			SpawnEnemy.numberToSpawn = SpawnEnemy.numberToSpawn + 10;
			SpawnEnemy.enemyNumber = SpawnEnemy.numberToSpawn;
		}
	}
}
