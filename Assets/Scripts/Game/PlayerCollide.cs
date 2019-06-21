using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerCollide : MonoBehaviour
{

    LifeBehaviour LifeScript;

    private void Awake()
    {
        LifeScript = GetComponent<LifeBehaviour>();
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.CompareTag("Enemy") || collision.CompareTag("Barricade"))
        {
            LifeScript.TakeDamage(100);
            EndGame.instance.Defeat();
        }
    }
}
