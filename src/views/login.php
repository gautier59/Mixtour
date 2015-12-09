<?php
$_SESSION = array();

include('header.php');
require('../models/Db.php');            
$db = new Db();
$login = (isset($_POST['email'])) ? $_POST['email'] : null;
$password =  (isset($_POST['password'])) ? $_POST['password'] : null;
if($login != null && $password != null){
    $db->loginDb();
    $request = $db->login($login,$password);
    
    if($request){
        header('location:game.php');
    }
    else{
        echo "<div id='ErreurPassword' class='alert alert-danger'>Erreur, mot de passe incorrect</div>";
    }
}
?>
<div class="container">
    <div class="contentLeft"><img src="../../pictures/mixto_01.png" alt="mixtour" /></div>
    <div class="contentRight">
        <p class="title">Entrer vos identifiants :</p>
        <form method="post" action="login.php" />
        <input type="email" name="email"  id="email" placeholder="Adresse e-mail" required />
        <input type="password" name="password" id="password" placeholder="Mot de passe" required />
        <input type="submit" value="Connexion" id="connexion" />

        <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">Connexion Facebook
    </fb:login-button>
</form>
</div>
</div>
</body>
</html>


<script type="text/javascript">
    $('#ErreurPassword').fadeOut(5000);
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
      } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
      }
  }

      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
      });
    }

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1036597816402870',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use version 2.2
    });

      // Now that we've initialized the JavaScript SDK, we call 
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

  };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
      function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me?fields=id,first_name,last_name,email,gender,age_range', function(response) {
          console.log('Successful login for: ' + response.email);
          document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.last_name + '!';
          console.log('avant'+JSON.stringify(response)+'apres');
          $.ajax({                
            url: "../models/scriptConnexionFacebook.php?data="+JSON.stringify(response),
            type:"json",
            success: function(data){
                console.log("okey");

            },
            error: function(error){
                console.log(error);
            },
        });
      });
    }


</script>