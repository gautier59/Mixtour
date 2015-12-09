<?php

class Db
{
	private $_namedb;
	private $_name;
	private $_password;
	private $_host;
    private $_db;


	public function __construct(){
		$this->_namedb = 'mixtour';
		$this->_name = 'root';
		$this->_password = '';
		$this->_host = 'localhost';

	}

	public function loginDb(){
        try{
                $this->_db = new PDO('mysql:host=localhost;dbname=mixtour', 'root', '');


        }catch(Exception $e){
            die('Erreur : '.$e->getMessage());
        }
	}


    public function login(){

			/*	$qry=$_db->prepare('SELECT * FROM user
									WHERE email=? AND password=?');
				$qry->execute(array($_POST['email'],sha1($_POST['password'])));

				$data=$qry->fetch();
				if ($_POST['email']!='') {
					$_SESSION['UserID']=$data['id'];
					$_SESSION['UserFirstName']=$data['prenom'];
					$_SESSION['UserLastName']=$data['nom'];
					$_SESSION['UserEmail']=$_POST['email'];
					if($_POST['typeUtilisateur']==1){
						$_SESSION['isAdministrator'] = $_POST['typeUtilisateur'];
					}

				}else{
					echo 'Données de connexion invalides !<br/>';
					echo '<input type="button" value="Réessayer" onClick="self.history.back()">';
					exit;
				}

				$qry->closecursor();*/
    }

    public function selectAllUser(){
         $this->_db->exec("SET CHARACTER SET utf8");
        $qry=$this->_db->prepare('SELECT id,prenom,nom,interets,naissance,email,password FROM user');
        $qry->execute();
        $data=$qry->fetchAll();
        return $data;
    }

    public function insertUser()
    {

        $qry=$_db->prepare('SELECT * FROM user');
        $qry->execute();
        $data=$qry->fetchAll();
        return $data;
    }
    public function insertUserFacebook($tab){
    	$prenom = $tab['first_name'];
    	$nom = $tab['last_name'];
    	$email = $tab['email'];
    	$sql = "INSERT into user(id,nom,prenom,email) VALUES ('','$nom','$prenom','$email')";

    	$query = $this->_db->prepare($sql);
    	if($query->execute())
    		return true;
    	else
    		return false;
    }








}