$(function() {
    console.log( "I am ready!" );

    // array mit existierenden Nummern
    var existingNumbers = [];
    var count = 0;

    // funktion um eine Zufallszahl zu generieren
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    // diese Funktion wird nach einem klick auf den Button ausgeführt
    function checkIfNumberIsInArray(existingNumbers) {
      var numberGeneration = randomNumber(1, 50);

      if($.inArray(numberGeneration, existingNumbers) !== -1) {
        // wenn die Zahl im array existiert
         checkIfNumberIsInArray(existingNumbers);
      } else {
        // wenn die Zahl im array NICHT (!) existiert
      existingNumbers.push(numberGeneration);
      count++;
      $('.count').text(count);
      $('.newNumber').text(numberGeneration);
      $('.exitingNumbers').append(numberGeneration + ', ');
      var searchcomma = $('.exitingNumbers').text()
      var pullcomma = searchcomma.substr(0,searchcomma.length-2)
      $(".pullcomma").text(pullcomma)
      }
    }

    // klick auf Button
    $('.generateNumber').click(function() {
      checkIfNumberIsInArray(existingNumbers);
    });
});
