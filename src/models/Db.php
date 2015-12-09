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

    public function login($email,$password){
        $password = md5($password);
        $sql = "SELECT * from user WHERE email='$email' AND password='$password'";
        $query = $this->_db->prepare($sql);  
      
        $query->execute();
        $data = $query->fetch(); 
      
        if($data){            
            if($data['typeUtilisateur'] == "Client")
                $_SESSION['typeUtilisateur'] = "Client";
            else
                $_SESSION['typeUtilisateur'] = "User";
            
            return true;
        }  
  
         
    }

    public function selectAllUser(){
         $this->_db->exec("SET CHARACTER SET utf8");
        $qry=$this->_db->prepare('SELECT * FROM user');
        $qry->execute();
        $data=$qry->fetchAll();
        return $data;
    }

    public function insertUser($id, $nom, $prenom, $sexe, $naissance ,$interets, $email, $password, $inscriptionType, $typeUtilisateur, $points)
    {
        $password = md5($password);
        $qry=$this->_db->prepare("INSERT INTO `mixtour`.`user` (`id`, `nom`, `prenom`, `sexe`,`naissance`, `interets`, `email`, `password`, `inscriptionType`, `typeUtilisateur`, `points`) 
        					VALUES ('', '$nom', '$prenom', '$sexe' ,'$naissance', '$interets', '$email', '$password', '$inscriptionType', '$typeUtilisateur', '$points')");
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


   public function classementUser(){
        $this->_db->exec("SET CHARACTER SET utf8");
        $qry=$this->_db->prepare('SELECT id,prenom,nom,interets,naissance,email,password,points FROM user ORDER BY points desc');
        $qry->execute();
        $data=$qry->fetchAll();
        return $data;
    }





}