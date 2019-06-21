using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyOffScreen : MonoBehaviour
{
    static float Offset = 2f;

    Camera cameraRef;
    float cameraSize;

    Transform thisTransform;

    void Awake()
    {
        thisTransform = GetComponent<Transform>();

        cameraRef = Camera.main;
        cameraSize = cameraRef.orthographicSize;
    }

    // Update is called once per frame
    void Update()
    {
        if (thisTransform.position.y >= cameraSize + Offset
            || thisTransform.position.y <= -cameraSize - Offset
            || thisTransform.position.x >= cameraSize * cameraRef.aspect + Offset
            || thisTransform.position.x <= -cameraSize*cameraRef.aspect - Offset)
        {
            Destroy(gameObject);
        }
    }
}
