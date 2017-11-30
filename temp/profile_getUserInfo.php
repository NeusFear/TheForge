<?php
include 'db_connect.php';
include 'db_select.php';

function getUserInfo($userid) {
	$connection = db_connect('userdb');
	$arr = db_select('SELECT * FROM users order by id');
	$return = $arr[0];
	return $return;
}
?>