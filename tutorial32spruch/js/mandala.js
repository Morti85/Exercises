$(function() {
    var sprueche = [
        '„Denke nicht so oft an das, was dir fehlt, sondern an das, was du hast.“ (Marc Aurel)',
        '„Nicht, weil es schwer ist, wagen wir es nicht. Weil wir es nicht wagen, ist es schwer.“ (Seneca)',
        '„Krise ist ein produktiver Zustand. Man muss ihm nur den Beigeschmack der Katastrophe nehmen.“',
        '„Am Ende wird alles gut. Und wenn es nicht gut ist, ist es noch nicht das Ende.“ (Oscar Wilde)',
        '„Wer etwas will, der sucht nach Wegen. Wer etwas nicht will, der sucht nach Gründen.“',
        '„Schöne Worte sind nicht immer wahr. Wahre Worte sind nicht immer schön.“ (Laotse)',
        '„Manchmal muss man am Ende stehen, um den Anfang zu sehen.“',
        '„Nicht der äußere Mensch, sondern der innere hat Spiegel nötig. Man kann sich nicht anders sehen als im Auge eines fremden Sehers.“ (Jean Paul)',
        '„Bedeutende Erfolge sind auch die Ergebnisse überwundener Krisen.“ (Hans Arndt)',
        '„Nichts Unvollendetes kann für etwas Maßstab sein.“ (Konfuzius)',
        '„Die meisten Menschen wollen lieber durch Lob ruiniert als durch Kritik gerettet werden.“',
        '„Es ist nie zu spät, das zu werden, was man hätte sein können.“ (George Elliot)',
        '„Den Reichtum eines Menschen kann man an den Dingen messen, die er entbehren kann, ohne seine gute Laune zu verlieren.“ (Henry David Thoreau)',
        '„Alles, was du willst, ist auf der anderen Seite der Angst.“',
        '„Wenn es keine Brücken auf der Welt gäbe, nützten die ganzen Wege nichts.“',
        '„Wer sein Ziel nicht kennt, kann auch seinen Weg nicht finden.“',
        '„Jetzt sind die guten alten Zeiten, nach denen wir uns in zehn Jahren zurücksehnen.“ (Peter Ustinov)',
        '„Erfolg besteht darin, dass man genau die Fähigkeiten hat, die im Moment gefragt sind.“ (Henry Ford)',
        '„Nichts ist so schlimm, wie wir fürchten. Nichts ist so gut, wie wir hoffen.“ (Marcel Proust)',
        '„Ein langer Streit beweist, dass beide Seiten unrecht haben.“ (Voltaire)',
        '„Kein Mensch war ohne Grund in deinem Leben. Der eine war ein Geschenk, der andere eine Lektion.“',
        '„Genieße den Augenblick, denn der Augenblick ist dein Leben.“',
        '„Alle Grausamkeit entspringt der Schwäche.“ (Seneca)',
        '„Lass dir dein Leuchten nicht nehmen, nur weil es andere blendet.“',
        '„Die einzigen wirklichen Feinde eines Menschen sind seine negativen Gedanken.“ (Albert Einstein)',
        '„Die Wahrheit erkennt man nicht an schönen Worten, sondern an leisen Taten.“',
        '„Jede schwierige Situation, die du jetzt meisterst, bleibt dir in der Zukunft erspart." (Dalai Lama)',
        '„Sieger zweifeln nicht, Zweifler siegen nicht.“ (Gerry Ehrmann)',
        '„Alles, was zu besitzen sich lohnt, lohnt auch, dass man darauf wartet.“ (Marilyn Monroe)',
        '„Zeit, die wir uns nehmen, ist die einzige, die uns etwas gibt.“ (Ernst Ferstl)',
        '„Du bist nicht gut, weil du auffällst. Du bist gut, wenn auffällt, dass du fehlst.“',
        '„Wenn du die Welt verändern willst, beginne mit dem Menschen, den du jeden Morgen im Spiegel siehst.“ (Simone Weil)',
        '„Es ist nicht wichtig, wie langsam du gehst, sofern du nicht stehenbleibst.“ (Konfuzius)',
        '„Lebe, was du erkannt hast, Sei, was du verstanden hast.“',
        '„Wenn nichts sicher ist, ist alles möglich.“ (Francis Paul Wilson)',
        '„Die einzige Möglichkeit, etwas vom Leben zu haben, ist, sich mit aller Macht hineinzustürzen.“ (Angelina Jolie)',
        '„Risiko ist besser als Reue.“',
        '„Heute kennt man von allem den Preis, von nichts den Wert.“ (Oscar Wilde)',
        '„Menschen, die sich selbst nicht so wichtig nehmen, sind die wirklich wichtigen. Und obendrein enorm sympathisch.“',
        '„Im Leben muss man einiges einstecken, wofür man gar keine Tasche hat.“',
        '„Dich zu treffen war der schönste Zufall in meinem Leben.“',
        '„Manche Menschen nerven einen schon, wenn man nur an sie denkt.“',
        '„Ich brauche nur vier Stunden Schlaf täglich. Nachts aber das Doppelte.“',
        '„Heute ist der Tag des Mitdenkens. Schade, dass nur so wenige feiern können.“',
        '„Wer für alles offen ist, kann irgendwo nicht ganz dicht sein.“',
        '„Ich stehe mit beiden Beinen fest auf dem Schlauch.“',
        '„Zwischen dem, was man sagt und dem, was der andere gehört und verstanden hat, können Welten liegen.“',
        '„Natürlich führe ich Selbstgespräche. Manchmal braucht man halt eine Expertenmeinung."',
        '„Auch der längste Marsch beginnt einmal mit dem ersten Schritt.“ (Laotse)',
        '„Das sind keine Stirnfalten. Das ist ein Sixpack vom Denken.“',
        '„Lachen ist die schönste Sprache der Welt.“',
        '„Mein Einhorn sagt: Die Realität lügt.“',
        '„Lebe als gäbe es kein Morgen.“',
        '„Gehe mit oder beiseite.“',
        '„Der Kummer, der nicht spricht, nagt am Herzen bis es bricht.“ (Wilhelm Busch)',
        '„Gib jedem eine zweite Chance. Irgendwann brauchst du sie selber.“',
        '„Genieße den Moment, bevor er zur Erinnerung wird.“',
        '„Familie ist, wenn Chaos Spaß macht.“',
        '„Tun, was du magst, ist Freiheit. Mögen, was du tust, ist Glück.“',
        '„Die Erinnerung ist das einzige Paradies, aus dem wir nicht vertrieben werden können.“ (Jean Paul)',
        '„Glück lässt sich nicht erzwingen. Aber es mag hartnäckige Menschen.“',
        '„Alle guten Dinge haben etwas Lässiges und liegen wie Kühe auf der Wiese.“ (Friedrich Wilhelm Nietzsche)',
        '„Weise Lebensführung gelingt keinem Menschen durch Zufall. Man muss, solange man lebt, lernen, wie man leben soll.“ (Lucius Annaeus Seneca)',
        '„Verstehen kann man das Leben rückwärts; leben muss man es aber vorwärts.“ (Søren Kierkegaard)',
        '„Leben ist Brückenschlagen über Ströme, die vergehen.“ (Gottfried Benn)',
        '„Neid ist die höchste Form der Anerkennung.“ (Wilhelm Busch)',
        '„Nicht die Glücklichen sind dankbar. Es sind die Dankbaren, die glücklich sind.“ (Francis Bacon)',
        '„Wer kämpft, kann verlieren, wer nicht kämpft hat schon verloren.“ (Bertolt Brecht)',
        '„Die Zeit vergeht nicht schneller als früher, aber wir laufen eiliger an ihr vorbei.“ (George Orwell)',
        '„Heute kennt man von allem den Preis, von nichts den Wert. (Oscar Wilde)',
        '„Wenn du kritisiert wirst, dann musst du irgendetwas richtig machen. Denn man greift nur denjenigen an, der den Ball hat.“ (Bruce Lee)',
        '„Jeder kehre vor der eigenen Tür und die Welt ist sauber.“ (Johann Wolfgang von Goethe)',
        '„Im Leben geht es nicht darum, gute Karten zu haben, sondern auch mit einem schlechten Blatt gut zu spielen.“',
        '„Ich liebe es, Theater zu spielen. Es ist so viel realistischer als das Leben.“ (Oscar Wilde)',
        '„Gib jedem Tag die Chance, der schönste deines Lebens zu werden.“',
        '„Es gibt keinen Weg zum Glück. Glücklichsein ist der Weg.“ (Buddha)',
        '„Wie alt man geworden ist, sieht man an den Gesichtern derer, die man jung gekannt hat.“ (Heinrich Böll)',
        '„Hör‘ nicht auf zu scheinen, nur weil es andere blendet.“',
        '„Dumme Gedanken hat jeder, aber der Weise verschweigt sie.“ (Wilhelm Busch)',
        '„Das Glück besteht nicht darin, dass du tun kannst, was du willst, sondern darin, dass du immer willst, was du tust.“ (Lew Nikolajewitsch Tolstoi)',
        '„Es gibt nur zwei Tage im Jahr, an denen man nichts tun kann. Der eine ist Gestern, der andere Morgen.“ (Dalai Lama)',
        '„Zeit mag Wunden heilen, aber sie ist eine miserable Kosmetikerin.“ (Mark Twain)',
        '„Das Leben ist wie eine Pusteblume: Wenn die Zeit gekommen ist, muss jeder für sich alleine fliegen.“',
        '„Es sind die Augenblicke die zählen, nicht die Dinge.“',
        '„Wer mit dem eigenen Leben zufrieden ist, schaut weniger auf das Leben anderer.“',
        '„Was wäre das Leben, hätten wir nicht den Mut, etwas zu riskieren.“ (Vincent van Gogh)',
        '„Auch aus Steinen, die einem in den Weg gelegt werden, kann man Schönes bauen.“',
        '„Klug sein besteht zur Hälfte darin, zu wissen, was man nicht weiß.“ (Konfuzius)',
        '„Nichts ist entspannender, als anzunehmen, was kommt.“ (Dalai Lama)',
        '„Wir leben alle unter dem gleichen Himmel, aber wir haben nicht alle den gleichen Horizont.“ (Konrad Adenauer)',
        '„Wenn das Leben uns in die Knie zwingt, tanzen wir Limbo.“',
        '„Glücklich ist der, der stirbt, bevor er den Tod gerufen hat.“ (Francis Bacon)',
        '„Die Kunst ist, einmal mehr aufzustehen, als man umgeworfen wird.“ (Winston Churchill)',
        '„Gesundheit ist nicht alles, aber ohne Gesundheit ist alles nichts.“ (Arthur Schopenhauer)',
        '„Liebe ist nur ein Wort, aber sie trägt alles, was wir haben. Ohne sie wäre die Welt leer.“ (Oscar Wilde)',
        '„Versuche zu kriegen, wen du liebst. Ansonsten musst du lieben, wen du kriegst.“ (Albert Einstein)',
        '„Bei der falschen Person kannst du nichts richtig machen. Bei der richtigen Person kannst du nichts falsch machen.“',
        '„Liebe ist, wenn es Spaß macht, treu zu sein.“',
        '„Es gibt nichts Schöneres, als geliebt zu werden, geliebt um seiner selbst willen oder vielmehr; trotz seiner selbst.“ (Victor Hugo)',
        '„Entfernung trennt nur Körper, niemals Herzen.“',
        '„Liebe ist der Entschluss, das Ganze eines Menschen zu bejahen, die Einzelheiten mögen sein, wie sie wollen.“ (Otto Flake)',
        '„Es ist mit der Liebe wie mit den Pflanzen: Wer Liebe ernten will, muss Liebe säen.“ (Jeremias Gotthelf)',
        '„In der Liebe ist es wie beim Puzzle: Zwinge keine Teile zusammen, die nicht zusammengehören.“',
        '„Eine Liebe, die an das Ende denkt, hat nie angefangen.“ (Alexander Engel)',
        '„Alles besiegt die Liebe.“ (Vergil)',
        '„Wenn Liebe nicht verrückt ist, ist es keine Liebe.“',
        '„Gesegnet sind die Herzen, die sich verbiegen können, denn sie werden niemals gebrochen." (Albert Camus)',
        '„Reine Liebe macht den Traum des Lebens zur Wahrheit.“ (Johann Kaspar Lavater)',
        '„Für die Welt, bist du irgendjemand, aber für irgendjemand bist du die Welt.“ (Erich Fried)',
        '„Du und ich – wir sind eins. Ich kann dir nicht wehtun, ohne mich zu verletzen.“ (Mahatma Gandhi)',
        '„Die Liebe ist ein Stoff, den die Natur gewebt und die Fantasie bestickt hat.“ (Voltaire)',
        '„Sonne kann nicht ohne Schein, Mensch nicht ohne Liebe sein.“ (Johann Wolfgang von Goethe)',
        '„Liebe und Hass sind nicht blind, aber sie sind geblendet von dem Feuer, das sie selbst mit sich tragen.“ (Friedrich Nietzsche)',
        '„Liebe mich dann, wenn ich es am wenigsten verdient habe, denn dann brauche ich es am meisten.“',
        '„Der Liebe zu begegnen, ohne sie zu suchen, ist der einzige Weg, um sie zu finden.“',
        '„Die Liebe ist das Gewürz des Lebens. Sie kann es versüßen, aber auch versalzen.“ (Konfuzius)',
        '„Wo Liebe ist, wird das Unmögliche möglich.“ (Buddha)',
        '„Alter schützt vor Liebe nicht – aber Liebe vor dem Altern.“ (Coco Chanel)',
        '„Die Summe unseres Lebens sind die Stunden, in denen wir liebten.“ (Wilhelm Busch)',
        '„Alles, worauf die Liebe wartet, ist die Gelegenheit.“ (Miguel de Cervantes)',
        '„Im Leben heißt es: Aller Anfang ist schwer. In der Liebe ist das Ende viel schwerer.“ (Alexander Engel)',
        '„Mancher findet sein Herz nicht eher, als bis er seinen Kopf verliert.“ (Friedrich Nietzsche)',
        '„Lieben heißt, unser Glück in das Glück eines anderen zu legen.“ (Gottfried Wilhelm Leibniz)',
        '„Heirate doch einen Archäologen. Je älter du wirst, desto interessanter findet er dich.“ (Agatha Christie)',
        '„Nicht durch Worte, aber durch Handlungen zeigt sich wahre Treue und wahre Liebe.“ (Heinrich von Kleist)',
        '„Die Liebe allein versteht das Geheimnis, andere zu beschenken und dabei selbst reich zu werden.“ (Clemens Brentano)',
        '„Nähe ist keine Frage der Entfernung. (Hermann Lahm)',
        '„Was immer du liebst, lass es frei. Kommt es zurück, gehört es dir – für immer." (Konfuzius)',
        '„Die Liebe ist wie ein Garten – wenn man sie nicht pflegt, verkommt sie.“ (Arabische Weisheit)',
        '„Dich kennenzulernen, war eines der schönsten Dinge in meinem Leben.“',
        '„Liebe hält die Zeit an und lässt die Ewigkeit beginnen.“ (Chuck Spezzano)',
        '„Kleider machen Leute, aber das Herz macht den Menschen.“',
        '„Die Romantik lebt von Zauber und Schönheit. Die Liebe braucht auch Ehrlichkeit und Verlässlichkeit.“',
        '„Wo es Liebe regnet, wünscht sich keiner einen Schirm.“',
        '„Liebe ist nur ein Wort, bis jemand kommt und ihm eine Bedeutung gibt.“',
        '„Eifersucht ist eine Leidenschaft, die mit Eifer sucht, was Leiden schafft.“ (Franz Grillparzer)',
        '„Wenn wir jemanden wirklich lieben, können wir genau der Mensch sein, der wir wirklich sind.“',
        '„Glück ist Liebe, nichts anderes. Wer lieben kann, ist glücklich.“ (Hermann Hesse)'
    ];
    var button = $('.erzeugtSpruch');
    var spruchAusgabebereich = $('.neuerSpruch');
    var ausgabe_counter = $('.counter');
    var ausgabe_lastspruch = $('.lastspruch');
    var counter = 0;
    var lastone = '';
    var storage = [];
    button.click(function() {
        check();
    });
    function check() {
        var zufallsSpruchID =  Math.floor(Math.random()*sprueche.length);
        if($.inArray(zufallsSpruchID, storage) === -1) {
            storage.push(zufallsSpruchID);
            ausgabe_lastspruch.html(lastone);
            spruchAusgabebereich.html(sprueche[zufallsSpruchID]);
            counter++;
            ausgabe_counter.html(counter);
            lastone = sprueche[zufallsSpruchID];
        }
        else {
            if (storage.length === sprueche.length) {
                storage = [];
            }
            check();
        }
    }
});