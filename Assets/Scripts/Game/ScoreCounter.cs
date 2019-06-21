using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreCounter : MonoBehaviour
{
    float CurrentScore = 0;
    float CurrentTime = 0;

    public float ScoreMultiplier = 1;

    public Text ScoreText;

    // Update is called once per frame
    void Update()
    {
        CurrentTime = Time.deltaTime;

        CurrentScore += CurrentTime * ScoreMultiplier;

        ScoreText.text = (Mathf.Floor(CurrentScore*100)).ToString();
    }
}
