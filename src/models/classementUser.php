<?php

require_once('Db.php');
$db = new Db();
$db->loginDb();
$data = $db->classementUser();

echo json_encode($data,true);

