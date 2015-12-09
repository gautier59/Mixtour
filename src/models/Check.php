<?php

require("../models/Db.php");

class Check
{

	private $_valid;
	
	
	public function __construct(){
		$_valid = true;
	}
	
	
  public function name()
  {	
	extract($_POST);
	if(isset($name) AND $name != "")
	{
		echo 'bon'; 
	}
	else{
		echo 'pas bon';
	}
  }
  /*
   public function firstName()
  {	
	extract($_POST);
	if(isset($firstName) AND $firstName != "")
	{
		$_valid = true;
	}
	else{
		$_valid = false;
	}
  }
  
  
  public function birthDate()
  {
	extract($_POST);
	if(isset($birthDate) AND $birthDate != "" AND preg_match( ''^\d{1,2}/\d{1,2}/\d{4}$'' , $birthDate))
	{
		echo 'date bon';
	}
	else{
		echo 'date pas bon';
	}
  }
  
  
   public function interestCenter()
  {
	extract($_POST);
	if(isset($interestCenter) AND $interestCenter != "")
	{
		$_valid = true;
	}
	else{
		$_valid = false;
	}
  } 
  
   public function sex()
  {
	extract($_POST);
	
  } 
  
  public function email()
  {	
	extract($_POST);
	if(isset($email) AND $email != "")
	{
		if(filter_var($email, FILTER_VALIDATE_EMAIL)){
			$_valid = true;
		}
		else{
			$_valid = false;
		}
	}
   }
  

  
    public function password()
    {	
	
    }*/
 
}