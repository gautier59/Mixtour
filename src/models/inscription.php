<?php
include('Db.php');
$data = (isset($_GET['data'])) ? $_GET['data'] : null;
if($data != null){
	$data = json_decode($data,true);
	$db = new Db();
	$db->loginDb();
	$nom = $data['nom'];
	$prenom = $data['prenom'];
	$password = $data['password'];
	$mail = $data['email'];
	$sex = $data['sexe'];
	$naissance = $data['naissance'];
	$query = $db->insertUser('',$nom,$prenom,$sex,$naissance,'',$mail,$password,'Site','User',0);
	if($query){		
		return true;
	}

	//public function insertUser($id, $nom, $prenom, $sexe, $naissance ,$interets, $email, $password, $inscriptionType, $typeUtilisateur, $points)

}