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
                <form method="post">

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
                  



                    <span class="sex"><input type="radio" name="man" value="man" id="sex" /><label for="man">Homme</label></span>
                    <span class="sex"><input type="radio" name="woman" value="woman" id="sex" /><label for="woman">Femme</label></span>

                
                    <textarea name="interestCenter" id="interestCenter" placeholder="Centres d'interêts" rrequired ></textarea>
                    

                    <button value="Inscription" id="inscription">Inscription</button>
                    <button class="btn btn-info" id="fbInscription">Connexion Facebook</button>
                </form>
            </div>
        </div>
        <div class="message">
            <div class='alert alert-danger' ></div>
        </div>
        
    </body>


<script type="text/javascript">
    var name,firstName,email,password,email2,date,sex;
    var formValid = true;
    $('.message').hide();

    $('#inscription').unbind().click(function(){
        
        name = $('#name').val();
        firstName = $('#firstName').val();
        email = $('#email').val();
        email2 = $('#email2').val();
        password = $('#password').val();
        sex = $('#sex:selected').val();
        if(email != email2){
            $('.message').show();
         //   $('#erreurInscription').modal('show');  
            $('.alert-danger').append("Erreur, les 2 emails ne sont pas identiques");
            formValid = false;

        }
        if(password.length < 6){
            $('.message').show();
            console.log("ici");
            formValid = false;
            $('.alert-danger').append("Le mot de passe doit etre sup&eacute;rieur a 6 caracteres");
        }
        if(name != "" || firstName != ""){
            $('.message').show();
            $('.alert-danger').append("Le formulaire est incomplet");
            formValid = false;
        }



        alert(email + " " + password + " "+formValid + " "+name);
    })




</script>