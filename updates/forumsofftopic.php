<div class="content">
  <div class="contentheader"><img src="images/Icons/general/171-folder-3.png" style="width:28px;height:28px;"> OFF TOPIC</div>
  <p>
    <?php
    $directory = 'forums/categories/offtopic/';
    $category = array_diff(scandir($directory), array('..', '.'));
    $rootcategory = 'offtopic';
    foreach ($category as $value) {
      $arr = explode(".", $value);
      $name = $arr[0];
      include 'modules/category.php';
    }
    ?>
  </p>
</div>
