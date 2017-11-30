<?php
include 'db_connect.php';
include 'db_select.php';

function date_sort($a, $b) {
    return strtotime($a) - strtotime($b);
}

function getRecentPosts($query, $ammount = 10) {
	$connection = db_connect("forumdb");
	$arr = db_select('SELECT * FROM forumposts order by date_modified;');
	usort($arr, "date_sort");
	$output = array_slice($input, 0, $ammount);
	return $output;
}
?>
