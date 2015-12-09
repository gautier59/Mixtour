
<?php
    include('header.php');
    require('../models/Db.php');
   
?>
        <div class="container">
            
                <p class="title">Entrer l'adresse mail de votre ami :</p>
                <form method="post" action="login.php" />
                    <input type="email" name="email"  id="email" placeholder="Adresse e-mail" required />
                    <br>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
        </div>
	</body>
</html>
<?php

?>
