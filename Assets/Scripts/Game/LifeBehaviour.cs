using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LifeBehaviour : MonoBehaviour
{
    public GameObject Explosion;
    //public Transform ExplosionParent;

    public float Health;

    public void TakeDamage(float Damage)
    {
        Health -= Damage;

        if (Health <= 0)
        {
            Instantiate(Explosion, transform.position, Quaternion.identity);
            EffectsManager.instance.PlayClip(1);
            Destroy(gameObject);
        }
    }
}
