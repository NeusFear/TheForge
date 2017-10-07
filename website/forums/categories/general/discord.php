<?php
  include 'modules/header.html';
  echo '<br>';
  include 'modules/navbar.html';
  echo '<br><br>';
  $location = explode(',', $_GET["category"]);
  $url = 'forums/categories/' . $location[0] . '/' . $location[1] . '.php';
?>
<div class="content">
  <div class="contentheader"><img src="images/Icons/general/259-microphone.png" style="width:28px;height:28px;"> FORUMS > <?php echo $location[0] . ' > ' . $location[1] ?></div>
  <p>
    These Pages are under development
  </p>
</div>
