function date_sort($a, $b) {
    return strtotime($a) - strtotime($b);
}

function getRecentPosts($query, $ammount = 10) {
  $arr = db_query('SELECT * FROM forumposts order by date_modified;');
  usort($arr, "date_sort");
  $output = array_slice($input, 0, $ammount);
  return $output;
}
