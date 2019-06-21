using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerInput : MonoBehaviour{
    Vector2 previousPosition;
    [SerializeField] float swipeMinDist = 0.1f;
    StepMovement stepMovement;
    // Start is called before the first frame update
    void Start(){
        stepMovement = GetComponent<StepMovement>();
    }

    // Update is called once per frame
    void Update(){
        if (Input.touchCount > 0) {
            Touch t = Input.GetTouch(0);
            if (t.phase == TouchPhase.Began) {
                previousPosition = t.position;
            }
            if (t.phase == TouchPhase.Moved) {
                Vector3 dist = t.position - previousPosition;
                if (dist.magnitude > swipeMinDist) {
                    if (Mathf.Abs(dist.normalized.x) > Mathf.Abs(dist.normalized.y)) {
                        //horizontal swipe
                        if (dist.normalized.x > 0) {
                            //swipe rigth
                            stepMovement.SwipeRight();

                        } else {
                            //swipe left
                            stepMovement.SwipeLeft();

                        }
                    } else {
                        //vertical swipe
                        if (dist.normalized.y > 0) {
                            //swipe up
                            stepMovement.SwipeUp();

                        } else {
                            //swipe down
                            stepMovement.SwipeDown();

                        }
                    }
                }
            }
        }
        if (Input.GetButtonDown("Horizontal")) {
            Debug.Log("horizontal");
            if (Input.GetAxis("Horizontal") > 0) {
                //Swipe right
                stepMovement.SwipeRight();
            } else {
                //Swipe left
                stepMovement.SwipeLeft();

            }
        }
        if (Input.GetButtonDown("Vertical")) {
            if (Input.GetAxis("Vertical") > 0) {
                //Swipe up
                stepMovement.SwipeUp();

            } else {
                //Swipe down
                stepMovement.SwipeDown();

            }
        }
    }
}
