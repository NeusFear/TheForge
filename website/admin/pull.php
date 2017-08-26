<?php
if (file_exists("../../../home/_theforge/_git/TheForge/pull.sh")) {
    echo "The file ../../../home/_theforge/_git/TheForge/pull.sh exists";
    shell_exec("../../../home/_theforge/_git/TheForge/pull.sh");
    header('Location: http://theforgecommunity.com/admin/index.php?success=true');
} else {
    echo "The file ../../../home/_theforge/_git/TheForge/pull.sh does not exist";
    $files = scandir("../../../home/_theforge/_git/TheForge");
    print_r($files);
}
?>
