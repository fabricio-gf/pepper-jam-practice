using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StepMovement : MonoBehaviour{
    [SerializeField] float HorizontalStep = 2;
    [SerializeField] float VerticalStep = 1;
    [SerializeField] float SlideDuration = 0.3f;
    bool andando = false;

    Vector3 Destination;
    Vector3 Dir;

    Rigidbody2D rigid;
    [SerializeField] float minX;
    [SerializeField] float MaxX;
    [SerializeField] float minY;
    [SerializeField] float maxY;
    // Start is called before the first frame update
    void Start(){
        rigid = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update(){
        if (andando) {
            Vector3 dist = Destination - transform.position;
            if (dist.magnitude > 0.1f) {
                if (Mathf.Abs(dist.x) > Mathf.Abs(dist.y)) {
                    rigid.velocity = dist.normalized * (HorizontalStep / SlideDuration);
                } else {
                    rigid.velocity = dist.normalized * (VerticalStep / SlideDuration);
                }
            } else {
                andando = false;
                rigid.velocity = Vector3.zero;
            }
        } else {
            if (Dir!= Vector3.zero) {
                Destination = transform.position + Dir;
                Dir = Vector3.zero;
                //verificar se saiu da grid
                if (Destination.x > minX && Destination.x < MaxX && Destination.y > minY && Destination.y < maxY) {
                    andando = true;
                }
            }
        }
    }

    public void SwipeUp() {
        Dir = Vector3.up * VerticalStep;
    }
    public void SwipeDown() {
        Dir = Vector3.down * VerticalStep;
    }
    public void SwipeRight() {
        Dir = Vector3.right * HorizontalStep;
    }
    public void SwipeLeft() {
        Dir = Vector3.left * HorizontalStep;
    }

}
