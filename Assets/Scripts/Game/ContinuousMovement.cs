using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ContinuousMovement : MonoBehaviour
{
    public float Speed;
    public Vector2 Direction;
    Rigidbody2D rigid;

    private void Awake()
    {
        rigid = GetComponent<Rigidbody2D>();
        ChangeDirection(Direction);
    }

    public void ChangeDirection(Vector2 newDirection)
    {
        Direction = newDirection.normalized;
        rigid.velocity = Direction*Speed;
    }
}
