var toggle = true

var infomap = {
    one: {
        infoOneId: 'one',
        infoOneText: 'Sie sammelt Daten zu den Themen Persönlichkeit, Stimmung, Bewegung, Schlafverhalten usw. und nutz sie, um handgefertigte Objekte und grossformatige Installatonen zu schaffen. Für die Umsetzung nutzt sie häufig Materialien wie Holz, Farben, Glas und Laminat. <br>In diesem Projekt analysiert Laurie über die Zeitdauer von 600 Nächte ihren Schlafrhythmus. <br> <b>Ihr Ziel:</b><br>Es interessiert sie, wie die eigene Zeit gewichtet, aufgeteilt und womit man sich während des Tages beschäftigt. Schliesslich hat Laurie sich gefragt: Was passiert eigentlich während dem Schlafen? Wir wissen nicht viel darüber, was während dieser Zeit passiert. Genau diese "Lücke" fand sie interessant. Sie wollte mehr über sich selber erfahren. Laurie nahm an, dass sie gut und tief schläft. Es hat sich jedoch herausgestellt, dass sie einerseits zu wenig schläft und andererseits nicht ausreichend tief. Die Muster, die sich über diese Zeitspanne ergaben, fand sie extrem spannend. In ihren Augen spiegeln sie eine Art Rhythmus wieder, ähnlich wie in der Musik. Sie hat ihre eigene Daten mit anderen verglichen und festgestellt, dass der Schlafrhythmus wie ein Fingerabdruck ist, sehr individuell und einzigartig. <br> Die Messungen konnte sie mittels dem Sleep Manager "Zeo" durchführen. Das Gerät wird direkt am Kopf mit einem Gummiband befestigt. Es misst den leichten Schlaf, Rem- und Tiefschlaf als auch den Wachzustand. Die Messungen werden an die Zeo App übermittelt und können in eine Excel-Liste exportiert werden. Sie hat die digitalen Daten anschliessend physisch übersetzt und veröffentlicht. Die Holzumsetzung findet sie passend, entspannend und ansprechend.'
    },
}


function showMessage(info){

    if (toggle){
        document.getElementById(info.infoOneId).innerHTML=info.infoOneText
    }
    else{document.getElementById(info.infoOneId).innerHTML=''

    }

    toggle = !toggle
}