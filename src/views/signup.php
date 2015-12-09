<?php
include('header.php');


?>

<div class="container">
    <div class="contentLeft"><img src="../../pictures/mixto_01.png" alt="mixtour" /></div>
    <div class="contentRight">
     

        <input type="text" name="name" id="name" placeholder="Nom de famille" rrequired />
        

        <input type="text" name="firstName" id="firstName" placeholder="Prénom" rrequired />
        

        <input type="email" name="email" id="email" placeholder="Adresse e-mail" rrequired />
        

        <input type="email" name="email2" id="email2" placeholder="Confirmer l'adresse e-mail" rrequired />
        

        <input type="password" name="password" id="password" placeholder="Mot de passe" rrequired />
        

        <p id="birthdayDate">Date de naissance</p>
        <input type="text" id="naissance" value="" name="date"  placeholder="12/12/2012" id="birthDate" size="12" maxlength="10" />
        <div id="calendarMain"></div>
        <script type="text/javascript">
                        //<![CDATA[
                        calInit("calendarMain", "", "birthDate", "jsCalendar", "day", "selectedDay");
                        //]]>
                    </script>
                    



                    <span class="sex"><input type="radio" name="man" value="man" id="sex" /><label for="man">Homme</label></span>
                    <span class="sex"><input type="radio" name="woman" value="woman" id="sex" /><label for="woman">Femme</label></span>

                    
                    <textarea name="interestCenter" id="interestCenter" placeholder="Centres d'interêts" rrequired ></textarea>
                    
                    <div id="divButton">
                        <button value="Inscription" class="btn btn-success" id="inscriptionT">Inscription</button>
                        <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">Connexion Facebook
                    </fb:login-button>
                </div>
                
            </div>
        </div>
        <div class="message">
            <div class='alert alert-danger' ></div>
        </div>
        
    </body>


    <script type="text/javascript">
        var name,firstName,email,password,email2,date,sex,naissance;
        
        var data = {};
        $('.message').hide();

        $('#inscriptionT').unbind().click(function(){
            var formValid = true;
            name = $('#name').val();
            firstName = $('#firstName').val();
            email = $('#email').val();
            email2 = $('#email2').val();
            password = $('#password').val();
            naissance = $('#naissance').val();
            sex = $('input[type="radio"]:checked').val();

            if(email != email2){
                $('.message').show();
                $('.alert-danger').append("Erreur, les 2 emails ne sont pas identiques.<br>");
                formValid = false;

            }
            if(password.length < 6){
                $('.message').show();
                console.log("ici");
                formValid = false;
                $('.alert-danger').append("Le mot de passe doit etre sup&eacute;rieur a 6 caracteres.<br>");
            }
        /*
        if(name == null || firstName == null ){
            $('.message').show();
            $('.alert-danger').append("Le formulaire est incomplet");
            formValid = false;
        }*/
        //alert(name + " " +firstName+ " "+email+ " "+sex+ " "+naissance+ " Formulaire :"+formValid);

        if(formValid){
            alert("Je lance mon inscription");
            data = {
                "nom" : name,
                "prenom" : firstName,
                "email" : email,
                "password" : password,
                "sexe" : sex,
                "naissance" : naissance,
            };
            console.log(JSON.stringify(data));
            $.ajax({
                url:"../models/inscription.php?data="+JSON.stringify(data),
                type:"json",
                success: function(data){
                    alert('valud');
                    $('.message').append('<div class="alert alert-success">Votre compte est bien enregistr&eacute; Veuillez vous <a href="login.php">connect&eacute;</a></div>');
                },
                error: function(error){
                    alert(error);
                },
            })
        }

        if($('.alert-danger').length)
            $('.alert-danger').fadeOut(5000);
        if($('.alert-success').length)
            $('.alert-danger').fadeOut(5000);

        
    })




</script>