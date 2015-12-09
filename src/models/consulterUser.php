<?php
require_once('Db.php');
$db = new Db();
$db->loginDb();
$data = $db->selectAllUser();

echo json_encode($data,true);

