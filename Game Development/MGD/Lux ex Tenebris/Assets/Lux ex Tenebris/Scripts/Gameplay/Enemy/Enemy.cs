using UnityEngine;
using System.Collections;

public class Enemy : MonoBehaviour 
{
	public int health;
	public bool dead = false;
	public int crystalWorth;

	void Update()
	{
		crystalWorth = SpawnEnemy.waveNumber;
	}

	public void onDeath() 
	{
		dead = true;
		Destroy(gameObject);
		SpawnEnemy.enemyNumber = SpawnEnemy.enemyNumber - 1;

		AstarAI.crystals = AstarAI.crystals + crystalWorth;

		if(SpawnEnemy.numberToSpawn == 0 && SpawnEnemy.enemyNumber == 0 && AstarAI.livesLeft > 0)
		{
			SpawnEnemy.waveNumber = SpawnEnemy.waveNumber + 1;

			if(SpawnEnemy.waveNumber >= 5)
			{
				Application.LoadLevel("Win");
			} 
			else if (SpawnEnemy.waveNumber < 5)
			{
				SpawnEnemy.numberToSpawn = SpawnEnemy.numberToSpawn + 30;
				SpawnEnemy.enemyNumber = SpawnEnemy.numberToSpawn;
			}
		}
		return;
	}
}
