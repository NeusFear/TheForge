<div class="content">
	<div class="contentheader"><?php echo $value['title']; ?></div>
	<?php
		foreach ($value as $topic) {
			if ($topic != $value['title']) {
				include 'modules/category.php';
			}
		}
	?>
</div>