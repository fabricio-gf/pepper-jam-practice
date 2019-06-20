using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour {
    Vector3 dir;
    float delay = 0.1f;
    float timer;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKeyDown(KeyCode.W)) {
            dir.x = 0f; dir.y = 1f;
        }
        if (Input.GetKeyDown(KeyCode.S)) {
            dir.x = 0f; dir.y =-1f;
        }
        if (Input.GetKeyDown(KeyCode.D)) {
            dir.x = 1f; dir.y = 0f;
        }
        if (Input.GetKeyDown(KeyCode.A)) {
            dir.x =-1f; dir.y = 0f;
        }

        timer += Time.deltaTime;
        if (timer > delay) {
            timer = 0;
            transform.position += dir;
            dir.x = 0; dir.y = 0;
        }

    }


}
