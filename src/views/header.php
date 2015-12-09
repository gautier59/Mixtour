<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Mixtour</title>
	<link rel="stylesheet" type="text/css" href="../../bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="../../shieldui/css/light/all.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
	<link rel="stylesheet" type="text/css" href="../css/jsSimpleDatePickr.css" />
	<script src="../js/jsSimpleDatePickrInit.js" type="text/javascript"></script>
	<script src="../js/jsSimpleDatePickr.js" type="text/javascript"></script>
	<script type="text/javascript" src="../../shieldui/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="../../shieldui/js/shieldui-all.min.js"></script>
</head>

<body>
<div id="menu">
	<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
            <a class="navbar-brand" href="login.php"><img id="logo" src="../../pictures/logo_mixtour.png"/></a>
		</div>

		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li><a href="signup.php"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;Inscription</a></li>
				<li><a href="game.php"><span class="glyphicon glyphicon-fire" aria-hidden="true"></span>&nbsp;Jouer</a></li>
				<li><a href="classement.php"><span class="glyphicon glyphicon-stats" aria-hidden="true"></span>&nbsp;Classement </a></li>
               <?php
               		session_start();
              		 if(isset($_SESSION['typeUtilisateur']) == "Client"){
               	?>
               		 <li><a href="consulter.php"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;Consulter </a></li>
                <?php } 
                if(isset($_SESSION['typeUtilisateur']) == "Client" || isset($_SESSION['typeUtilisateur']) == "User"){
                ?>
                <li><a href="deconnexion.php"><span class="glyphicon glyphicon-off" aria-hidden="true"></span>&nbsp;D&eacute;connexion </a></li>
                <?php }?>
                <li>
                <div class="pull-right"><?php 
                		if(isset($_SESSION['typeUtilisateur']))
               				echo "Bievenue ".$_SESSION['typeUtilisateur']?></div></li>
			</ul>
		</div>
	</div>
	</nav>
</div>