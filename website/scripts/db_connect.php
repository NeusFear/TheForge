<?php
function db_connect($type = "forumdb") {
  //types are forumdb and userdb
  
    if ($type == 'forumdb') {
      $dbname = $config['forumdb']
    } else if ($type == 'userdb') {
      $dbname = $config['userdb']
    }

    // Define connection as a static variable, to avoid connecting more than once 
    static $connection;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($connection)) {
         // Load configuration as an array. Use the actual location of your configuration file
         
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= "/home/_theforge/_configs/website/config.ini";
        $config = parse_ini_file($path); 
        $connection = mysqli_connect('localhost',$config['username'],$config['password'],$dbname);
    }

    // If connection was not successful, handle the error
    if($connection === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        return mysqli_connect_error(); 
    }
    return $connection;
}
?>
