<?php
    include('header.php');
    require('../models/Db.php');
   /*$db = new Db();
   if($db->checkConnexion()){
       location("game.php");
   }else{*/
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
//}
?>