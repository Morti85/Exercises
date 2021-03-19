<?php
    setcookie("user", "Morti", time() + 86400*30, "/");
    # Soll der Cookie gelöscht werden, wird der Name leer gelassen, oder die Zeit +1
    # Sekunde gesetzt. Damit entfernt man den Cookie wieder.
?>

<!DOCTYPE html>

<html>
<body>

<?php
    if(isset($_COOKIE["user"])) {
        echo "Willkommen zurück " . $_COOKIE["user"];
    }
?>

</body>
</html>