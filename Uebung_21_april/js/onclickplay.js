
var toggle = true

var songmap = {
    one: {
    songInfoId: 'fluessig',
    songInfoText: '20.04.2022 <br>  2.5 Liter Getränke konsumiert <br> Total 83 Schlücke <br>'
},

two: {
    songInfoId: 'two',
    songInfoText: '8 Schlücke'
},
    three: {
    songInfoId: 'three',
    songInfoText: '7 Schlücke'
},

}

function showMessage(songInfo){

if (toggle){
    document.getElementById(songInfo.songInfoId).innerHTML=songInfo.songInfoText
}
else{
    document.getElementById(songInfo.songInfoId).innerHTML=''
}

toggle = !toggle
}