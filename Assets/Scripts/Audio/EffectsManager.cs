using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EffectsManager : MonoBehaviour
{
    public static EffectsManager instance;

    public AudioClip[] clips;

    public AudioSource source;

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

    public void PlayClip(int index)
    {
        source.PlayOneShot(clips[index]);
    }
}
