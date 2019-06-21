using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    public float SpawnRate;

    public GameObject[] Enemies;

    //public int[] SpawnSequence;

    public Vector2 PositionZero;

    public float PositionOffset;

    public Transform EnemiesParent;

    float currentTime;

    int randomIndex;

    // Start is called before the first frame update
    void Start()
    {
        currentTime = SpawnRate;
    }

    // Update is called once per frame
    void Update()
    {
        currentTime -= Time.deltaTime;
        

        if (currentTime <= 0)
        {
            randomIndex = Random.Range(0, Enemies.Length);
            if (randomIndex != 2)
            {
                EffectsManager.instance.PlayClip(3);
            }
            Instantiate(Enemies[randomIndex], PositionZero - new Vector2(0, PositionOffset*Random.Range(0,5)), Quaternion.identity, EnemiesParent);
            currentTime += SpawnRate;
        }
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.green;
        Gizmos.DrawWireCube(PositionZero, new Vector3(1,1,0));
    }
}
