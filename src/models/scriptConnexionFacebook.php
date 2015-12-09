<?php 
	$data = (isset($_GET['data'])) ? $_GET['data'] : null;
	if($data != null){
		require_once('Db.php');
		$db = new Db();
		$table = json_decode(utf8_decode($data),true);
		$db->loginDb();
		$db->insertUserFacebook($table);

	}
	
?>