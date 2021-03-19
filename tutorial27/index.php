<html>
<body>

<?php
    $password = "sicherespasswort";
    echo hash("sha512", $password);
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    if(password_verify($password, $hashed))
    {
        echo "Du bisch drin, das war ja einfach. :-)";
    }
?>

</body>
</html>