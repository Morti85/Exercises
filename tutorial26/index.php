<?php
    session_start();
    # Hiermit wird die Session (Sitzung) gestartet.
?>

<!DOCTYPE html>

<html>
<body>

<?php
    $_SESSION["slogan"] = "Hugs are better than Handshakes.";
    # session_unset(); = löscht den Session Slogan.
    # session_destroy(); = Zerstört die Session. Die Sitzung wurde beendet.
?>

</body>
</html>