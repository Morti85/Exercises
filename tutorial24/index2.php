<!DOCTYPE html>
<html>
<body>

<?php
    $file =fopen("test2.txt", "w");

    while(!feof($file)) {
        echo fgets($file) . "<br>";
        echo fgetc($file);
    }

    fclose($file);
    echo readfile("test2.txt");
?>

</body>
</html>