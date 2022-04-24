var toggle = true

var infomap = {
    one: {
        infoOneId: 'one',
        infoOneText: 'Sie sammelt Daten zu den Themen Persönlichkeit, Stimmung, Bewegung, Schlafverhalten usw. und nutz sie, um handgefertigte Objekte und grossformatige Installatonen zu schaffen. Für die Umsetzung nutzt sie Materialien wie Holz, Farben, Glas und Laminat.'
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