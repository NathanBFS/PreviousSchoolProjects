using UnityEngine;
using System.Collections;
using Pathfinding;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class AstarAI : MonoBehaviour 
{
	public bool dead = false;

	public static int livesLeft = 30;
	public static int crystals = 50;

	public Vector2 targetPosition;
	
	private Seeker seeker;
	public Rigidbody2D rigidbody;

	//The calculated path
	public Path path;
	
	//The AI's speed per second
	public float speed;
	
	//The max distance from the AI to a waypoint for it to continue to the next waypoint
	public float nextWaypointDistance = 3;
	
	//The waypoint we are currently moving towards
	private int currentWaypoint = 0;
	
	public void Start () {
		seeker = GetComponent<Seeker>();
		rigidbody = GetComponent<Rigidbody2D>();
		targetPosition= GameObject.FindWithTag("Life Force Collider").transform.position;
		seeker.StartPath (transform.position,targetPosition, OnPathComplete);
	}
	
	public void OnPathComplete (Path p) {
		Debug.Log ("Yey, we got a path back. Did it have an error? "+p.error);
		if (!p.error) {
			path = p;
			//Reset the waypoint counter
			currentWaypoint = 0;
		}
	}
	
	public void FixedUpdate () {
		if (path == null) {
			//We have no path to move after yet
			return;
		}
		
		if (currentWaypoint >= path.vectorPath.Count) {
			Debug.Log ("End Of Path Reached");

			livesLeft = livesLeft - 1;
			dead = true;
			Destroy(gameObject);
			SpawnEnemy.enemyNumber = SpawnEnemy.enemyNumber - 1;

			if(SpawnEnemy.numberToSpawn == 0 && SpawnEnemy.enemyNumber == 0 && livesLeft > 0)
			{
				SpawnEnemy.waveNumber = SpawnEnemy.waveNumber + 1;
				SpawnEnemy.numberToSpawn = SpawnEnemy.numberToSpawn + 10;
				SpawnEnemy.enemyNumber = SpawnEnemy.numberToSpawn;
			}

			if(livesLeft <= 0)
			{
				Social.ReportScore(AstarAI.crystals, "CgkIwMDQ8skLEAIQAg", (bool success) => {
				});
				Social.ReportScore(AstarAI.livesLeft,"CgkIwMDQ8skLEAIQAw", (bool success) => {
				});
				Social.ReportScore(AstarAI.livesLeft + AstarAI.crystals,"CgkIwMDQ8skLEAIQBA", (bool success) => {
				});
				Application.LoadLevel ("Lose");
			}

			return;
		}
		
		//Direction to the next waypoint
		Vector2 dir = (path.vectorPath[currentWaypoint]-transform.position).normalized;
		dir *= speed * Time.fixedDeltaTime;
		rigidbody.transform.Translate (dir);

		//Check if we are close enough to the next waypoint
		//If we are, proceed to follow the next waypoint
		if (Vector2.Distance (transform.position,path.vectorPath[currentWaypoint]) < nextWaypointDistance) 
		{
			currentWaypoint++;
			return;
		}
	}
}
