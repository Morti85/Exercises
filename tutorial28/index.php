<html>
<body>

<?php
    class User {
        var $ID;
        var $name;

        function _construct($setid, $setname) {
            $this->ID = $setid;
            $this->name = $setname;
        }

        function printMe() {
            echo $this->ID . " " . $this->name;
        }
    }
    class SuperUser extends User {
        function bezahlKram() {
            echo "This is some expensive Shit.";
        }
    }

    class InfidelUser extends User {
        function billig() {
            echo "WERBUUUUNG!!!";
        }
    }

    $mortisian = new SuperUser(1, "mortisian");
    $mortisian->printMe();
    $mortisian->bezahlKram();

    $batman = new InfidelUser(2, "batman");
    $batman->printMe();
    $batman->billig();
?>

</body>
</html>