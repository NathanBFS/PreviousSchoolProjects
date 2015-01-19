using UnityEngine;
using System.Collections;

public class LightShot : MonoBehaviour 
{	
	public float speed;
	
	Transform destination;    
	
	void Update () 
	{
		if (destination == null) 
		{
			Destroy(gameObject);
			return;
		}
		
		float stepSize = Time.deltaTime * speed;
		transform.position = Vector3.MoveTowards(transform.position, destination.position, stepSize);
		
		if (transform.position.Equals(destination.position)) 
		{
			Enemy e = destination.GetComponent<Enemy>();
			if(e.armor <= 0){
				e.health = e.health - 1;
			}
			else if(e.armor > 0)
			{
				e.armor = e.armor - 1;
			}

			if (e.health <= 0)
			{
				e.onDeath();            
			}
			Destroy(gameObject);
		}
	}
	
	public void setDestination(Transform v) 
	{
		destination = v;
	}
}
