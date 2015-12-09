
<?php
    include('header.php');
    require('../models/Db.php');

   /*$db = new Db();
   if($db->checkConnexion()){
       location("game.php");
   }else{*/
?>
<div class="container">
            <div class="contentLeft">    
            <ul class="list-group">
				<a href="#" class="list-group-item active">
				<span class="glyphicon glyphicon-chevron-right pull-right"></span>
					Rejouer
				</a>

				<a href="classementUser.php" class="list-group-item">
				<span class="glyphicon glyphicon-chevron-right pull-right"></span>
				Classement
				</a>
				
				<a href="#" class="list-group-item">
				<span class="glyphicon glyphicon-chevron-right pull-right"></span>
				Règles du jeu
				</a>
				
			</ul>
            
            </div>
            <div class="contentRight">
				<h2><span class="label label-success">Bravo ! La partie est finie !</span></h2>
                <br>
                <p class="title">Votre score est de : </p>
                
                <p>Partager votre score sur vos réseaux sociaux !</p>
                <p> <a name="fb_share" type="button" share_url="gamOver.php"></a>
				<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script></p>
				<a href="https://twitter.com/share" class="twitter-share-button"{count} data-url="http://Mixtourproject.Fr" data-text="Viens me battre sur le jeu formidable Mixtour ! Mon score est de :">Tweet</a>
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
                
                <p>Partager ce score par mail à un ami : </p>
				<a href="#null" onclick="javascript:open_infos();"><button class="btn btn-primary btn-sm">Mail</button></a>
            </div>
        </div>

<script type="text/javascript">
                <!--
                        function open_infos()
                        {
                                width = 300;
                                height = 300;
                                if(window.innerWidth)
                                {
                                        var left = (window.innerWidth-width)/2;
                                        var top = (window.innerHeight-height)/2;
                                }
                                else
                                {
                                        var left = (document.body.clientWidth-width)/2;
                                        var top = (document.body.clientHeight-height)/2;
                                }
                                window.open('popupMail.php','Partage du scrore par mail','menubar=no, scrollbars=no, top='+top+', left='+left+', width='+width+', height='+height+'');
                        }
                -->
                </script>
