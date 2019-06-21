using UnityEngine;
using System.Collections;

public class BackgroundScroller : MonoBehaviour
{
    public float scrollSpeed;

    private Vector2 startPosition;

    void Start()
    {
        startPosition = transform.position;
    }

    void Update()
    {
        float newPos = Mathf.Repeat(Time.time * scrollSpeed, 35.5555555556f);
        transform.position = startPosition + Vector2.left * newPos;
    }
}