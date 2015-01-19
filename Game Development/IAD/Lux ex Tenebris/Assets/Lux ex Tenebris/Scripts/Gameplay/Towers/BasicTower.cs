using UnityEngine;
using System.Collections;

public class BasicTower : MonoBehaviour 
{
	public LightShot orb = null;
	
	// interval
	public float interval = 2.0f;
	float timeLeft = 0.0f;
	
	// attack range
	public float range = 10.0f;
	
	Enemy findClosestTarget() 
	{
		Enemy closest = null;
		Vector3 pos = transform.position;
		
		Enemy[] enemies = (Enemy[])FindObjectsOfType(typeof(Enemy));
		if (enemies != null) 
		{
			if (enemies.Length > 0) 
			{
				closest = enemies[0];
				for (int i = 1; i < enemies.Length; ++i) 
				{
					float cur = Vector3.Distance(pos, enemies[i].transform.position);
					float old = Vector3.Distance(pos, closest.transform.position);
					
					if (cur < old) 
					{
						closest = enemies[i];
					}
				}
			}
		}
		
		return closest;
	}
	
	void Update() 
	{
		timeLeft -= Time.deltaTime;
		if (timeLeft <= 0.0f) 
		{
			Enemy target = findClosestTarget();
			if (target != null) 
			{        
				if (Vector3.Distance(transform.position, target.transform.position) <= range) 
				{
					GameObject g = (GameObject)Instantiate(orb.gameObject, transform.position, Quaternion.identity);
					
					LightShot b = g.GetComponent<LightShot>();
					
					b.setDestination(target.transform);
					
					timeLeft = interval;
				}
			}
		}
	}
}
