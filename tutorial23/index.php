<!DOCTYPE html>
<html lang="de">
<body>

<?php
    $passwort = "passwort";
    $hashed = password_hash($passwort, PASSWORD_DEFAULT);
    if(password_verify($passwort, $hashed))
    {
       echo "eingeloggt";
    }

    class User {
        var $ID;
        var $name;

        function printme() {
            echo $this->ID . " " . $this->name;
        }
    }

    $morpheus = new User;
    $morpheus->ID = 1;
    $morpheus->name = "morpheus";
    $morpheus->printme();

    $batman = new User;
    $batman->ID = 2;
    $batman->name = "batman";
    $batman->printme();

    $spidy = new USer;
    $spidy->ID = 3;
    $spidy->name = "spidy";
    $spidy->printme();
?>

</body>
</html>