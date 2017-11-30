<?php
function db_error() {
    $connection = db_connect();
    return mysqli_error($connection);
}
?>
