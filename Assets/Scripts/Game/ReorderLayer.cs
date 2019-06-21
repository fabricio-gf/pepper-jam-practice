using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReorderLayer : MonoBehaviour
{
    SpriteRenderer mrender;
    // Start is called before the first frame update
    void Start()
    {
        mrender = GetComponent<SpriteRenderer>();
    }

    // Update is called once per frame
    void Update()
    {
        mrender.sortingOrder = Mathf.CeilToInt((transform.parent.position.y + 10) * 100);
    }
}