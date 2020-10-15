class FacebookAuth {

  getFBtoken() {
    console.log('Welcome!  Fetching your information.... ');
    window.FB.getAuthResponse(function(response) {
      console.log(response)
    
    });
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    if (response.status === 'connected') {
      this.getFBtoken();
    } else if (response.status === 'not_authorized') {
        console.log("Please log into this app.");
    } else {
        console.log("Please log into this facebook.");
        console.log(response)
    }
  }

  checkLoginState() {
    window.FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }
  
  loadFbLoginApi() {
    window.fbAsyncInit = function() {
        window.FB.init({
            appId      : process.env.REACT_APP_FACEBOOK_APP_ID,
            cookie     : true,  
            xfbml      : true, 
            version    : 'v2.5'
        });
    };
    console.log("Loading fb api");
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    }
}

export default FacebookAuth;