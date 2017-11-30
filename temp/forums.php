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
    if(isset($_GET["category"])) {
		include 'modules/header.php';
		echo '<br>';
		include 'modules/navbar.html';
		echo '<br><br>';
		include 'modules/forumscategorytopichome.php';
	} else if (isset($_GET["module"])) {
		if ($_GET["module"] == "newtopic") {
			include 'modules/header.php';
			echo '<br>';
			include 'modules/navbar.html';
			echo '<br><br>';
			include 'modules/forumsnewtopic.php';
		}
    } else {
      include 'modules/header.php';
      echo '<br>';
      include 'modules/navbar.html';
      echo '<br><br>';
	  
	  include 'configs/forumsconfig.php';
	  foreach ($a as $value) {
		  include 'modules/forumscategory.php';
	  }
    }
     ?>
   </body>
