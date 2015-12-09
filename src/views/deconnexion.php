<?php
include('header.php');
session_destroy();
	$_SESSION['typeUtilisateur'] = array();
	header('location:login.php');

