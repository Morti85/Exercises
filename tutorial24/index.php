<!DOCTYPE html>
<html>
<body>

<?php
    $file =fopen("test.txt", "w");


    fwrite($file, "fsociety\n");
    fwrite($file, "fsociety\n");


    fclose($file);
    echo readfile("test.txt");
?>

</body>
</html>