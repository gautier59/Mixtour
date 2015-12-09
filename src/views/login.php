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
                </form>
            </div>
        </div>
	</body>
</html>
<?php
       
        
?>

<script type="text/javascript">
    $('#ErreurPassword').fadeOut(5000);


</script>