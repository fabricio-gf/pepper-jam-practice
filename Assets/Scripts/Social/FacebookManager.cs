using System.Collections.Generic;
using UnityEngine;
using Facebook.Unity;
using Facebook.MiniJSON;
using UnityEngine.UI;

public class FacebookManager : MonoBehaviour
{
    public Image ProfileImage;
    public Image[] FriendsImages;
    public Text FriendsText;

    private int index = 0;

    // Start is called before the first frame update
    private void Awake()
    {
        if (!FB.IsInitialized)
        {
            FB.Init(() =>
            {
                if (FB.IsInitialized)
                {
                    FB.ActivateApp();
                    FacebookLogin();
                }
                else
                {
                    Debug.LogError("Couldn't Initialize");
                }
            },
            isGameShown =>
            {
                if (!isGameShown)
                {
                    Time.timeScale = 0;
                }
                else
                {
                    Time.timeScale = 1;
                }
            });
        }
        else
        {
            FB.ActivateApp();
            FacebookLogin();
        }
    }

    private void Start()
    {
        //loading screen?
        
    }

    #region LOGIN/LOGOUT

    public void FacebookLogin()
    {
        var permissions = new List<string>() { "public_profile", "email", "user_friends" };
        FB.LogInWithReadPermissions(permissions, AuthCallback);
    }

    private void AuthCallback(ILoginResult result)
    {
        if (FB.IsLoggedIn)
        {
            var aToken = AccessToken.CurrentAccessToken;

            Debug.Log(aToken.UserId);

            foreach(string perm in aToken.Permissions)
            {
                Debug.Log(perm);
            }

            GetUserProfilePicture();
            GetFriendsPlayingThisGame();
        }
        else
        {
            Debug.Log("User cancelled login");
        }
    }

    public void FacebookLogout()
    {
        FB.LogOut();
    }

    #endregion

    #region SHARE

    public void FacebookShare()
    {
        FB.ShareLink(new System.Uri("https://bibicio.itch.io/cyberchase"), "Check out our page!", "Download our game at Itch and play for yourself!", new System.Uri("https://fog.icmc.usp.br/static/img/brasao.93a9aab.png"), ShareCallback);
    }

    private void ShareCallback(IShareResult result)
    {
        if (result.Cancelled || !string.IsNullOrEmpty(result.Error))
        {
            Debug.Log("ShareLink Error: " + result.Error);
        }
        else if (!string.IsNullOrEmpty(result.PostId))
        {
            // Print post identifier of the shared content
            Debug.Log(result.PostId);
        }
        else
        {
            // Share succeeded without postID
            Debug.Log("ShareLink success!");
        }
    }

    #endregion

    #region LOG APP EVENT

    #endregion

    #region APP REQUEST

    public void FacebookRequest()
    {
        FB.AppRequest("Hey! Come and play this awesome game!", title: "Invite a friend to compete against you!", callback: RequestCallback);
    }

    private void RequestCallback(IAppRequestResult result)
    {
        if(result.Cancelled || !string.IsNullOrEmpty(result.Error))
        {
            Debug.Log("AppRequest Error: " + result.Error);
        }
        else if (!string.IsNullOrEmpty(result.RequestID))
        {
            Debug.Log("RequestID " + result.RequestID);
            Debug.Log("RawResult " +    result.RawResult);
        }
        else
        {
            Debug.Log("AppRequest success!");
        }
    }

    #endregion

    #region FEED SHARE

    public void FeedShare()
    {
        FB.FeedShare(null, new System.Uri("https://bibicio.itch.io/cyberchase"), "Cyberchase", "I'm playing Cyberchase on my Android, come play too!", null, new System.Uri("https://fog.icmc.usp.br/static/img/brasao.93a9aab.png"), null, FeedShareCallback);
    }

    private void FeedShareCallback(IShareResult result)
    {
        if (result.Cancelled || !string.IsNullOrEmpty(result.Error))
        {
            Debug.Log("AppRequest Error: " + result.Error);
        }
        else if (!string.IsNullOrEmpty(result.PostId))
        {
            Debug.Log("RequestID " + result.PostId);
            Debug.Log("RawResult " + result.RawResult);
        }
        else
        {
            Debug.Log("AppRequest success!");
        }
    }

    #endregion

    #region GET PROFILE PICTURE

    public void GetUserProfilePicture()
    {
        FB.API("/me/picture?type=large", HttpMethod.GET, ProfilePictureCallback);

    }

    private void ProfilePictureCallback(IGraphResult result)
    {
        if (string.IsNullOrEmpty(result.Error))
        {
            Debug.Log("received texture with resolution " + result.Texture.width + "x" + result.Texture.height);
            ProfileImage.sprite = Sprite.Create(result.Texture, new Rect(0, 0, result.Texture.width, result.Texture.height), new Vector2(0, 0));
        }
        else
        {
            Debug.LogWarning("received error=" + result.Error);
        }
    }

    #endregion

    #region GET ALL FRIENDS

    /*public void GetAllFriends()
    {
        FB.API("/me/friends?access_token=" + AccessToken.CurrentAccessToken, HttpMethod.GET, AllFriendsCallback);
    }

    private void AllFriendsCallback(IGraphResult result)
    {
        print("friends");
        if (string.IsNullOrEmpty(result.Error))
        {
            index = 0;
            foreach(var friend in result.ResultList)
            {
                print("index " + index);
                FB.API("/" + friend.+"/picture?type=large", HttpMethod.GET, GetFriendPictureCallback);
                index++;
                if(index >= FriendsImages.Length)
                {
                    break;
                }
            }
        }
        else
        {
            Debug.LogWarning("received error=" + result.Error);
        }
    }

    private void GetFriendPictureCallback(IGraphResult result)
    {
        if (string.IsNullOrEmpty(result.Error))
        {
            Debug.Log("received texture with resolution " + result.Texture.width + "x" + result.Texture.height);
            FriendsImages[index].sprite = Sprite.Create(result.Texture, new Rect(0, 0, result.Texture.width, result.Texture.height), new Vector2(0, 0));
        }
        else
        {
            Debug.LogWarning("received error=" + result.Error);
        }
    }*/

    #endregion

    public void GetFriendsPlayingThisGame()
    {
        print("get friends");
        string query = "/me/friends";
        FB.API(query, HttpMethod.GET, result =>
        {
            var dictionary = (Dictionary<string, object>)Json.Deserialize(result.RawResult);
            var friendsList = (List<object>)dictionary["data"];
            FriendsText.text = string.Empty;
            foreach (var dict in friendsList)
            {
                if (index >= FriendsImages.Length)
                {
                    break;
                }
                print("index " + index);
                FriendsText.text += ((Dictionary<string, object>)dict)["name"];
                FB.API("/" + ((Dictionary<string, object>)dict)["id"] + "/picture?type=large", HttpMethod.GET, GetFriendPictureCallback);
                index++;
            }
        });
    }

    private void GetFriendPictureCallback(IGraphResult result)
    {
        if (string.IsNullOrEmpty(result.Error))
        {
            Debug.Log("received texture with resolution " + result.Texture.width + "x" + result.Texture.height);
            FriendsImages[index].sprite = Sprite.Create(result.Texture, new Rect(0, 0, result.Texture.width, result.Texture.height), new Vector2(0, 0));
        }
        else
        {
            Debug.LogWarning("received error=" + result.Error);
        }
    }
}
