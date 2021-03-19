<html>
<body>

<?php
class User {
    var $ID;
    var $name;

    function __construct($setid, $setname) {
        $this->ID = $setid;
        $this->name = $setname;
    }

    function printMe() {
        echo $this->ID . " " . $this->name;
    }
    function setID($newID) {
        if($newID > 0 && $newID < 1000) {
            $this->ID = newID;
        }
    }
}

class SuperUser extends User {
    function bezahlKram() {
        echo "This is some expensive Shit.";
    }
    function printMe() {
        echo $this->ID . " " . $this->name . " hat viel Geld bezahlt.";
    }
}

class InfidelUser extends User {
    function billig() {
        echo "WERBUNG!!";
    }
}

$mortisian = new SuperUser(1, "mortisian");
$batman = new InfidelUser(2, "batman");

$users = array($mortisian, $batman);
for($i = 0; $i < 2; $i++)
{
    $users[$i]->printMe();
}
?>

</body>
</html>