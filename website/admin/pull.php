<?php
function scanDirectories($rootDir, $allData=array()) {
    // set filenames invisible if you want
    $invisibleFileNames = array(".", "..", ".htaccess", ".htpasswd");
    // run through content of root directory
    $dirContent = scandir($rootDir);
    foreach($dirContent as $key => $content) {
        // filter all files not accessible
        $path = $rootDir.'/'.$content;
        if(!in_array($content, $invisibleFileNames)) {
            // if content is file & readable, add to array
            if(is_file($path) && is_readable($path)) {
                // save file name with path
                $allData[] = $path;
            // if content is a directory and readable, add path and name
            }elseif(is_dir($path) && is_readable($path)) {
                // recursive callback to open new directory
                $allData = scanDirectories($path, $allData);
            }
        }
    }
    return $allData;
}



if (file_exists("/home/_theforge/_git/TheForge/pull.sh")) {
    $output = shell_exec("/home/_theforge/_git/TheForge/pull.sh");
    shell_exec("/home/_theforge/_git/TheForge/pull.sh");
    echo "<pre>$output</pre>";
    print_r(scanDirectories("/home/_theforge/_git/TheForge"));
} else {
    print_r(scanDirectories("/home/_theforge/_git/TheForge"));
}
?>
