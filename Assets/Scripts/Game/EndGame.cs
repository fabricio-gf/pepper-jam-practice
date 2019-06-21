using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndGame : MonoBehaviour
{
    public static EndGame instance;
    public GameObject EndScreen;

    void Awake()
    {
        if(instance == null)
        {
            instance = this;
        }
        else if(instance != this)
        {
            Destroy(gameObject);
        }
    }

    public void Defeat()
    {
        //Time.timeScale = 0;
        EndScreen.SetActive(true);
    }
}
