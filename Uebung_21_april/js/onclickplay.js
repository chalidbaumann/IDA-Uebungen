
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




function myFnc(e){
    e.classList.toggle("show");

    var elem = document.getElementById("navID"),
    Style = window.getComputedStyle(elem),
    right = Style.getPropertyValue("right");


    if(right == "0px"){
        elem.style.right = "-300px";
    }else{
        elem.style.right = "0px";
    }
}