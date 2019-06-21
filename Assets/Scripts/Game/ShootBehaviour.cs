using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShootBehaviour : MonoBehaviour
{
    public float FireRate;

    public GameObject ProjectilePrefab;
    public Transform ProjectileParent;

    public float ProjectileOffset;

    public float Damage;

    float CurrentTime = 0;

    private void Awake()
    {
        CurrentTime = FireRate;
    }

    // Update is called once per frame
    void Update()
    {
        CurrentTime -= Time.deltaTime;

        if(CurrentTime <= 0)
        {
            EffectsManager.instance.PlayClip(2);
            GameObject obj = Instantiate(ProjectilePrefab, transform.position + new Vector3(ProjectileOffset, 0, 0), Quaternion.identity, ProjectileParent);
            obj.GetComponent<ProjectileBehaviour>().Damage = Damage;
            CurrentTime += FireRate;
        }
    }
}
