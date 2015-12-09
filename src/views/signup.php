<?php
	require("../models/Check.php");
   // require("../models/Db.php");
?>

<?php
    include('header.php');
    $db = new Db();

?>

        <div class="container">
            <div class="contentLeft"><img src="../../pictures/mixto_01.png" alt="mixtour" /></div>
            <div class="contentRight">
                <form method="post" action="signup.php">

                    <input type="text" name="name" id="name" placeholder="Nom de famille" rrequired />
                    

                    <input type="text" name="firstName" id="firstName" placeholder="Prénom" rrequired />
                   

                    <input type="email" name="email" id="email" placeholder="Adresse e-mail" rrequired />
                  

                    <input type="email" name="email2" id="email2" placeholder="Confirmer l'adresse e-mail" rrequired />
                  

                    <input type="password" name="password" id="password" placeholder="Mot de passe" rrequired />
                    

                    <p id="birthdayDate">Date de naissance</p>
                        <input type="text" value="" name="date"  placeholder="12/12/2012" id="birthDate" size="12" maxlength="10" />
                    <div id="calendarMain"></div>
                    <script type="text/javascript">
                        //<![CDATA[
                        calInit("calendarMain", "", "birthDate", "jsCalendar", "day", "selectedDay");
                        //]]>
                    </script>
                  



                    <span class="sex"><input type="radio" name="man" value="man" id="man" /><label for="man">Homme</label></span>
                    <span class="sex"><input type="radio" name="woman" value="woman" id="woman" /><label for="woman">Femme</label></span>

                
                    <textarea name="interestCenter" id="interestCenter" placeholder="Centres d'interêts" rrequired ></textarea>
                    

                    <input type="submit" value="Inscription" id="inscription" />
                </form>
            </div>
        </div>
    </body>
</html>