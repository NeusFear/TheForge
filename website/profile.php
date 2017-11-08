
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"></meta>
      <!--Tab Title-->
    <title>TheForge - Forums</title>

      <!--Meta-->
    <meta content="The Forge - Online Community" name="description"></meta>
    <meta content="SkyForge_" name="author"></meta>

      <!--Favicon-->
    <link href="images/Icons/favicon.ico" rel="shortcut icon"></link>

      <!--Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"></link>

      <!--Styles-->
    <link href="css/style.css" rel="stylesheet"></link>

      <!--Scripts-->
    <script src="js/main.js"></script>
  </head>
  
    <body id="root">
    <?php
    if(isset($_GET["user"])) {
      if (isset($_POST["usreid"])) {
        echo 'logged in as: ' . $_POST["userid"] . 'Viewing: ' . $_GET['user'] . "'s profile page.";
      } else {
        echo 'Not Loggen in, Viewing: ' . $_GET['user'] . "'s profile page.";
      }
    } else {
      include 'modules/header.html';
      echo '<br>';
      include 'modules/navbar.html';
      echo '<br><br>';
      if (isset($_POST["usreid"])) {
        echo 'logged in as: ' . $_POST["userid"];
      } else {
        echo 'Login Page";
      }
    }
    ?>
   </body>
