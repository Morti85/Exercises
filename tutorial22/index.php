<!DOCTYPE html>
<html lang="de">

<head>
    <Meta charset = "UTF-8">
    <title> Korrekter Weg! </title>
</head>
<body>

<?php
    if($_POST) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "SensitiveDaten";

        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Du kommsch hier nicht rein! Nicht verbunden. :-(");
        }
        $sql = $conn->prepare("SELECT Name, Passwort FROM user WHERE Name=? AND Passwort=?");
        $sql->bind_param("ss", $_POST["username"], $_POST["passwort"]);
        $sql->execute();
        $sql->bind_result($res_user, $res_pass);
        while ($sql->fetch())
        {
            echo $res_user . " - " . $res_pass;
        }
        $sql->close();
    }
?>
<form action="index.php" method="post">
    Username: <input type="text" name="username"/>
    Passwort: <input type="text" name="passwort"/>
    <input type="submit" value="Einloggen" name="submit"/>
</form>

</body>
</html>