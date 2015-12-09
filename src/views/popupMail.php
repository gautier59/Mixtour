
<?php
    include('header.php');
    require('../models/Db.php');

    try
    {
        $bdd = new PDO('mysql:host=localhost;dbname=mixtour;charset=utf8', 'root', '');
    }
    catch (Exception $e)
    {
            die('Erreur : ' . $e->getMessage());
    }

if(isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
    // inserer les mails dans la table ami
    $req = $bdd->prepare('INSERT INTO ami(email, idUser) VALUES(?, ?)');
    $req->execute(array($_POST['email'], 4));
    $req->closeCursor();

// envoie mail
   $file = file_get_contents('./template.html');

   $headers = 'From: mixtour2015@gmail.com' . "\r\n";
   $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

  $envoie = mail($_POST['email'], 'Mixtour', $file, $headers);
}

?>
        <div class="container">

                <p class="title">Entrer l'adresse mail de votre ami :</p>
                <form method="post" action="popupMail.php." />
                    <input type="email" name="email"  id="email" placeholder="Adresse e-mail" required />
                    <input type="email" name="email2"  id="email2" placeholder="Adresse e-mail" />
                    <br>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
        </div>
	</body>
</html>
