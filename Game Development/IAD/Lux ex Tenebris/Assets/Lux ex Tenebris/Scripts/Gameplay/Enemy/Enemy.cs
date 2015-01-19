using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class Enemy : MonoBehaviour 
{
	public int health;
	public int armor;
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
				Social.ReportScore(AstarAI.crystals, "CgkIwMDQ8skLEAIQAg", (bool success) => {
				});
				Social.ReportScore(AstarAI.livesLeft,"CgkIwMDQ8skLEAIQAw", (bool success) => {
				});
				Social.ReportScore(AstarAI.livesLeft + AstarAI.crystals,"CgkIwMDQ8skLEAIQBA", (bool success) => {
				});
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
